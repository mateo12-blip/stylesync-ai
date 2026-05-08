import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  try {
    const { input } = req.body;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an elite AI fashion stylist. Suggest stylish outfits based on the user's occasion and vibe."
        },
        {
          role: "user",
          content: `Suggest an outfit for: ${input}`
        }
      ]
    });

    res.status(200).json({
      result: completion.choices[0].message.content
    });

  } catch (error) {
    res.status(500).json({
      error: "AI request failed"
    });
  }
}
