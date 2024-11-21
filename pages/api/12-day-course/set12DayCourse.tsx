import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

const PUBLIC_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const email = req.body.email;
    
    const now = new Date();
       
    const endDay = new Date();
    endDay.setDate(now.getDate() + 12);


    try {
        const filePath = path.join(process.cwd(), '/pages/api/12-day-course/course.json');
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const data: any[] = JSON.parse(jsonData);

        const addData = {
            email: email,
            joined_at: now,
            today: 0,
            ended_at: endDay,
            isCourseMember: true
        }

        data.push(addData);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

        axios.post(`${PUBLIC_DOMAIN}/api/mailer/mail`, {
            // toUser: 'olekssikaravanov@gmail.com',
            toUser: email,
            subject: '12 Day Email Course',
            html: `<h2>Hello, you will get an Email per day for 12 days.</h2>`
        })

        res.json({ success: true });

    } catch (err) {
        console.log(err);
    }
}