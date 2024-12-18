import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

const PUBLIC_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const now = new Date();
    const aDay = 86400000;

    // axios.post(`${PUBLIC_DOMAIN}/api/mailer/mail`, {
    //     toUser: 'peterleo1026@gmail.com',
    //     subject: '12 Day Email Course',
    //     html: `<h2>Hello, you will get an Email per day for 12 days.</h2>`
    // })

    try {
        const filePath = path.join(process.cwd(), '/pages/api/12-day-course/course.json');
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const data: any[] = JSON.parse(jsonData);

        data.map((el:any, index:number) => {

            const startDay = new Date(el.joined_at);
            const endDay = new Date(el.ended_at);
            const today = el.today;

            if (now.getTime() >= endDay.getTime()) {
                data[index].isCourseMember = false;
            } else {
                const arg1 = now.getTime() - startDay.getTime();
                const arg2 = arg1 / aDay;
                if (arg2 > today) {
                    data[index].today = today + 1;

                    axios.post(`${PUBLIC_DOMAIN}/api/mailer/mail`, {
                        toUser: el.email,
                        subject: '12 Day Email Course',
                        html: `<h2>Hello, you will get an Email per day for ${12-today} days.</h2>`
                    })
                }
            }

        })

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

    } catch (err) {
        console.log(err);
    }
}