import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Only POST allowed" });
    }

    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const input = body?.input;

    if (!input) {
      return res.status(400).json({ error: "Missing input" });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a high-end fashion AI stylist."
        },
        {
          role: "user",
          content: input
        }
      ]
    });

    return res.status(200).json({
      result: completion.choices[0].message.content
    });

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
}
