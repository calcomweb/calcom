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

const MAX_BODY = 1200;

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

  const topicId = trimText(body.topicId);
  const text = trimText(body.body);

  if (!topicId) {
    json(res, 400, { error: "INVALID_TOPIC" });
    return;
  }

  if (!text || text.length > MAX_BODY) {
    json(res, 400, { error: "INVALID_BODY" });
    return;
  }

  try {
    const supabase = getSupabaseAdmin();
    const ipHash = getIpHash(req);

    await enforceRateLimit({
      supabase,
      key: "solidarity_comments:create:1h",
      ipHash,
      windowSeconds: 60 * 60,
      limit: 10,
    });

    await enforceRateLimit({
      supabase,
      key: "solidarity_comments:create:24h",
      ipHash,
      windowSeconds: 60 * 60 * 24,
      limit: 50,
    });

    await enforceRateLimit({
      supabase,
      key: "solidarity_comments:create:7d",
      ipHash,
      windowSeconds: 60 * 60 * 24 * 7,
      limit: 200,
    });

    const textHash = hashText(`${topicId}:${text}`.toLowerCase());
    const { data: inserted, error: insertError } = await supabase
      .from("alumni_solidarity_comments")
      .insert({ topic_id: topicId, body: text, text_hash: textHash })
      .select("id")
      .single();

    if (insertError || !inserted) {
      json(res, 400, { error: "INSERT_FAILED" });
      return;
    }

    const { data, error: fetchError } = await supabase
      .from("public_alumni_solidarity_comments")
      .select("id, topic_id, body, created_at")
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
