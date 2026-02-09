import {
  applyCors,
  enforceRateLimit,
  getIpHash,
  getSupabaseAdmin,
  hashText,
  json,
  readJsonBody,
  trimText,
} from "../_shared.js";

const MAX_TITLE = 120;
const MAX_DESCRIPTION = 2000;

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

  const title = trimText(body.title);
  const description = trimText(body.description);

  if (!title || title.length > MAX_TITLE) {
    json(res, 400, { error: "INVALID_TITLE" });
    return;
  }

  if (!description || description.length > MAX_DESCRIPTION) {
    json(res, 400, { error: "INVALID_DESCRIPTION" });
    return;
  }

  try {
    const supabase = getSupabaseAdmin();
    const ipHash = getIpHash(req);

    await enforceRateLimit({
      supabase,
      key: "solidarity_topics:create:1h",
      ipHash,
      windowSeconds: 60 * 60,
      limit: 3,
    });

    await enforceRateLimit({
      supabase,
      key: "solidarity_topics:create:24h",
      ipHash,
      windowSeconds: 60 * 60 * 24,
      limit: 10,
    });

    await enforceRateLimit({
      supabase,
      key: "solidarity_topics:create:7d",
      ipHash,
      windowSeconds: 60 * 60 * 24 * 7,
      limit: 20,
    });

    const textHash = hashText(`${title}:${description}`.toLowerCase());
    const { data: inserted, error: insertError } = await supabase
      .from("alumni_solidarity_topics")
      .insert({ title, description, text_hash: textHash })
      .select("id")
      .single();

    if (insertError || !inserted) {
      json(res, 400, { error: "INSERT_FAILED" });
      return;
    }

    const { data, error: fetchError } = await supabase
      .from("public_alumni_solidarity_topics")
      .select("id, title, description, created_at")
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
