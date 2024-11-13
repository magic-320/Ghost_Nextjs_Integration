// pages/api/posts.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = req.body;

    const filePath = path.join(process.cwd(), '/pages/api/assessment/assessment.json');

    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
        res.status(200).json({ message: 'Save Assessment successfully' });
    } catch (error) {
        console.error('Error writing file:', error);
        res.status(500).json({ error: 'Failed to save Assessment' });
    }
}
