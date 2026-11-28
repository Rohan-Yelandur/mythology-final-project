import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const choices = req.body.choices;
    for (const scenarioId in choices) {
      await redis.hincrby(`votes:${scenarioId}`, choices[scenarioId], 1);
    }
    res.status(200).json({ ok: true });
    return;
  }

  const counts = await redis.hgetall(`votes:${req.query.scenario}`);
  res.status(200).json(counts || {});
}
