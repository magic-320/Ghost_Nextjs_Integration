import { NextApiRequest, NextApiResponse } from "next";
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

    try {

        const calendar = await nylas.calendars.getAvailability({
            requestBody: {
                participants: [
                    {
                        email: 'rc.magic320@gmail.com',
                        calendarIds: [''],
                        openHours: [
                            {
                                days: [0, 1, 2, 3, 4, 5, 6],
                                timezone: 'America/Toronto',
                                start: '9:00',
                                end: '17:00',
                                exdates: []
                            }
                        ]
                    }
                ],
                startTime: 1733648400,
                endTime: 1733652000,
                intervalMinutes: 30,
                durationMinutes: 30,
                roundTo: 15
            }
        })

        console.log('----------------------')
        res.json(calendar)

    } catch (err) {
        console.log(err);
    }

}

