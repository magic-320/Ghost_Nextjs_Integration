import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const accessToken = req.body.access_token;

    const calendar = google.calendar({ version: 'v3', auth: accessToken });

    const event = {
        summary: 'New Event',
        location: 'Online',
        description: 'Test event from Next.js app',
        start: {
        dateTime: '2024-12-01T10:00:00-07:00',
        timeZone: 'America/Los_Angeles',
        },
        end: {
        dateTime: '2024-12-01T11:00:00-07:00',
        timeZone: 'America/Los_Angeles',
        },
    };

    const response = await calendar.events.insert({
        calendarId: 'primary',
        requestBody: event,
    });

    return response.data;
}