// Vercel serverless function: /api/trpc/*
//
// The public website is a fully static build, so the tRPC/Manus-auth API is not
// available on Vercel. This stub answers with a proper JSON error (instead of
// the SPA fallback HTML) so the client never tries to parse HTML as tRPC data.
//
// If you later need the full API on Vercel, replace this file with a tRPC
// fetch adapter that mounts `appRouter` from `server/routers.ts`.
export default function handler(_req: any, res: any) {
  res.setHeader("Cache-Control", "no-store");
  res.status(404).json({
    error: {
      code: -32601,
      message: "The tRPC API is not enabled on this deployment.",
    },
  });
}
