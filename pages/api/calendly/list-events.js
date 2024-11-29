
const { google } = require('googleapis');

const SCOPES = process.env.NEXT_PUBLIC_SCOPES;
const GOOGLE_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_PROJECT_NUMBER = process.env.NEXT_PUBLIC_GOOGLE_PROJECT_NUMBER;
const GOOGLE_CALENDAR_ID = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;


const jwtClient = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY,
    SCOPES
);

const calendar = google.calendar({
    version: 'v3',
    project: GOOGLE_PROJECT_NUMBER,
    auth: jwtClient
});


export default async function handler(req, res) {
    try {
        const response = await calendar.events.list({
            calendarId: GOOGLE_CALENDAR_ID,
        });

        const events = response.data.items || [];

        if (events.length) {
            res.status(200).json({ events });
        } else {
            res.status(200).json({ message: 'No upcoming events found.' });
        }
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Failed to fetch events.' });
    }
}