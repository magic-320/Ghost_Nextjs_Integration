import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL;
const CONTENT_API_KEY = process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY;

export default async function handler (req: NextApiRequest, res: NextApiResponse) {

    const pages = await fetch(`${API_URL}/ghost/api/content/pages/?key=${CONTENT_API_KEY}${req.body.payload}`);

    const result = await pages.json();
    res.json(result);
}