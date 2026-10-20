// Vercel serverless function: GET /api/health
export default function handler(_req: any, res: any) {
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ status: "ok" });
}
