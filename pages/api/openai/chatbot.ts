import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // Use your OpenAI API key
});

export async function getChatResponse(prompt: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-0125', // Specify the model
      messages: [{ role: 'user', content: prompt }],
    });
    return response.choices[0]?.message?.content || 'No response';
  } catch (error) {
    console.error('Error communicating with OpenAI:', error);
    return 'Sorry, there was an issue.';
  }
}


import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { prompt } = req.body;
    const response = await getChatResponse(prompt);
    res.status(200).json({ response });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

