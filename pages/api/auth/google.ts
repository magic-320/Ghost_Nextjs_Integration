import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const accessToken = req.body.access_token;

    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: accessToken });

    const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
    const userInfo = await oauth2.userinfo.get();

    console.log('============== userinfo ==================')
    console.log(userInfo)
    console.log('++++++++++++++++ END ++++++++++++++++')

    const calendar = google.calendar({ version: 'v3', auth: accessToken });

    const event = {
        summary: 'New Event',
        location: 'Online',
        description: 'Test event from Next.js app',
        start: {
        dateTime: '2025-12-01T10:00:00-07:00',
        timeZone: 'America/Los_Angeles',
        },
        end: {
        dateTime: '2025-12-01T11:00:00-07:30',
        timeZone: 'America/Los_Angeles',
        },
    };

    const response = await calendar.events.insert({
        calendarId: 'primary',
        requestBody: event,
        auth: accessToken
    });

    console.log('============== response ====================');
    console.log(response);

    res.json(response.data);
}