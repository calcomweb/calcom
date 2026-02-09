import {
  applyCors,
  clampList,
  filterStringList,
  enforceRateLimit,
  getSupabaseAdmin,
  getIpHash,
  hashText,
  json,
  readJsonBody,
  trimText,
} from "./_shared.js";

const MAX_TOPICS = 12;
const MAX_NAME = 120;
const MAX_BIO = 1200;

const isValidYear = (year) => Number.isInteger(year) && year > 1900 && year < 2100;

export default async function handler(req, res) {
  if (!applyCors(req, res)) return;

  if (req.method !== "POST") {
    json(res, 405, { error: "METHOD_NOT_ALLOWED" });
    return;
  }

  const body = readJsonBody(req);
  if (!body) {
    json(res, 400, { error: "INVALID_JSON" });
    return;
  }

  const fullName = trimText(body.fullName);
  const graduationYear = Number(body.graduationYear);
  const whatsappNumber = trimText(body.whatsappNumber);
  const email = trimText(body.email) || null;
  const linkedinUrl = trimText(body.linkedinUrl) || null;
  const instagramUrl = trimText(body.instagramUrl) || null;
  const shortBio = trimText(body.shortBio) || null;
  const supportTopics = clampList(filterStringList(body.supportTopics || []), MAX_TOPICS);
  const isAnonymous = Boolean(body.isAnonymous);

  if (!fullName || fullName.length > MAX_NAME) {
    json(res, 400, { error: "INVALID_FULL_NAME" });
    return;
  }

  if (!isValidYear(graduationYear)) {
    json(res, 400, { error: "INVALID_GRADUATION_YEAR" });
    return;
  }

  if (!whatsappNumber) {
    json(res, 400, { error: "INVALID_WHATSAPP_NUMBER" });
    return;
  }

  if (shortBio && shortBio.length > MAX_BIO) {
    json(res, 400, { error: "SHORT_BIO_TOO_LONG" });
    return;
  }

  try {
    const supabase = getSupabaseAdmin();
    const ipHash = getIpHash(req);

    await enforceRateLimit({
      supabase,
      key: "alumni_profiles:create:1h",
      ipHash,
      windowSeconds: 60 * 60,
      limit: 5,
    });

    await enforceRateLimit({
      supabase,
      key: "alumni_profiles:create:24h",
      ipHash,
      windowSeconds: 60 * 60 * 24,
      limit: 20,
    });

    await enforceRateLimit({
      supabase,
      key: "alumni_profiles:create:7d",
      ipHash,
      windowSeconds: 60 * 60 * 24 * 7,
      limit: 50,
    });

    const textHash = hashText(`${fullName}:${graduationYear}:${whatsappNumber}`.toLowerCase());
    const { data: inserted, error: insertError } = await supabase
      .from("alumni_profiles")
      .insert({
        graduation_year: graduationYear,
        full_name: fullName,
        whatsapp_number: whatsappNumber,
        email,
        linkedin_url: linkedinUrl,
        instagram_url: instagramUrl,
        short_bio: shortBio,
        support_topics: supportTopics,
        is_anonymous: isAnonymous,
        text_hash: textHash,
      })
      .select("id")
      .single();

    if (insertError || !inserted) {
      json(res, 400, { error: "INSERT_FAILED" });
      return;
    }

    const { data, error: fetchError } = await supabase
      .from("public_alumni_profiles")
      .select("id, graduation_year, full_name, linkedin_url, instagram_url, email, whatsapp_number, short_bio, support_topics, is_anonymous, created_at")
      .eq("id", inserted.id)
      .single();

    if (fetchError || !data) {
      json(res, 500, { error: "FETCH_FAILED" });
      return;
    }

    json(res, 201, { data });
  } catch (error) {
    if (error?.code === "RATE_LIMITED") {
      json(res, 429, { error: "RATE_LIMITED" });
      return;
    }
    console.error(error);
    json(res, 500, { error: "SERVER_ERROR" });
  }
}
