import { NextApiRequest, NextApiResponse } from "next";
import { google } from 'googleapis';

const SCOPES = process.env.NEXT_PUBLIC_SCOPES;
const GOOGLE_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_PROJECT_NUMBER = process.env.NEXT_PUBLIC_GOOGLE_PROJECT_NUMBER;
const GOOGLE_CALENDAR_ID = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    try {

        const jwtClient = new google.auth.JWT(
            GOOGLE_CLIENT_EMAIL,
            undefined,
            GOOGLE_PRIVATE_KEY,
            SCOPES
        );

        const calendar = google.calendar({ version: 'v3', auth: jwtClient });

        const response = await calendar.events.list({
          calendarId: GOOGLE_CALENDAR_ID,
        });
    
        const events: any[] = response.data.items || [];
        res.status(200).json({ events });
        

    } catch (err) {
        console.error('Error fetching events:', err);
        res.status(500).json({ error: err });
    }
}