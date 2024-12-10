import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const data = req.body.data;

    try {

        const filePath = path.join(process.cwd(), '/pages/api/chatbotAdmin/chatbot.json');
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

        res.json({ success: true, message: 'Saved successfully' });

    } catch (err) {
        console.log(err);
    }
}