// Vercel serverless function: POST /api/quote
// Receives the booking / quote form submission from the website.
type QuoteSubmission = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  size?: string;
  date?: string;
  address?: string;
  notes?: string;
  [key: string]: unknown;
};

const REQUIRED_FIELDS = ["name", "phone", "email", "service", "size", "date", "address"];

function readBody(req: any): QuoteSubmission {
  const body = req.body;
  if (!body) return {};
  if (typeof body === "string") {
    try {
      return JSON.parse(body || "{}");
    } catch {
      return {};
    }
  }
  return body;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  const submission = readBody(req);
  const missing = REQUIRED_FIELDS.filter(field => !String(submission[field] ?? "").trim());
  if (missing.length > 0) {
    res.status(400).json({ ok: false, missing });
    return;
  }

  const payload = {
    ...submission,
    receivedAt: new Date().toISOString(),
    source: req.headers?.["referer"] ?? null,
  };
  console.log("[Quote request]", payload);

  // Optional: forward every lead to your own endpoint (Zapier, Make, n8n, a mail
  // service, ...). Set QUOTE_WEBHOOK_URL in the Vercel project environment.
  const webhookUrl = process.env.QUOTE_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("[Quote request] webhook failed", error);
    }
  }

  res.status(200).json({ ok: true, message: "Quote request received" });
}
