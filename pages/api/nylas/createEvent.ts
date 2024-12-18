import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import path from 'path';
import Nylas from 'nylas';

const nylasConfig = {
    cliendId: process.env.NEXT_PUBLIC_NYLAS_CLIENT_ID,
    callbackUri: process.env.NEXT_PUBLIC_DOMAIN! + '/learn',
    apiKey: process.env.NEXT_PUBLIC_NYLAS_API_KEY,
    apiUri: process.env.NEXT_PUBLIC_NYLAS_API_URI
}

const nylas = new Nylas({
    apiKey: nylasConfig.apiKey || '',
    apiUri: nylasConfig.apiUri
})


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const grantId = req.body.grantId;
    const demoDate = req.body.date;
    const calendarId = 'primary';

    try {
        
        // start Time
        const date = new Date(demoDate);
        const startTime = new Date(date.getTime());

        // end Time
        const endTime = new Date(startTime);
        endTime.setMinutes(startTime.getMinutes() + 30);

        // create Event
        const newEvent = await nylas.events.create({
            identifier: grantId,
            queryParams: {
                calendarId
            },
            requestBody: {
                title: 'Edosa Odaro',
                description: 'Meet with Edosa Odaro',
                when: {
                    startTime: Math.floor(startTime.getTime() / 1000), // Time in Unix timestamp format (in seconds)
                    endTime: Math.floor(endTime.getTime() / 1000)
                },
                conferencing: {
                    provider: 'Google Meet',
                    autocreate: {}
                },
                participants: [
                    {
                        name: 'Edosa Odaro',
                        // email: 'edosaodaro@gmail.com',
                        email: 'rc.magic320@gmail.com',
                        status: 'noreply'
                    }
                ],
            }
        })

        // save event time
        const bookDate = demoDate.split('T')[0];
        const bookTime = demoDate.split('T')[1].split('.')[0].split(':').slice(0, -1).join(':');

        const filePath = path.join(process.cwd(), '/pages/api/nylas/booked.json');
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        const bookedData: any = JSON.parse(jsonData);

        if (!bookedData[`${bookDate}`]) bookedData[`${bookDate}`] = [];
        bookedData[`${bookDate}`].push(bookTime);

        fs.writeFileSync(filePath, JSON.stringify(bookedData, null, 2), 'utf-8');

        // return response
        res.json(newEvent);

    } catch (err) {
        console.log(err);
    }

}

