import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL;
const CONTENT_API_KEY = process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY;

export default async function handler (req: NextApiRequest, res: NextApiResponse) {

    const posts = await fetch(`${API_URL}/ghost/api/content/posts/?key=${CONTENT_API_KEY}&limit=all`, {
        method: 'GET'
    });

    const result = await posts.json();
    res.json(result);
}