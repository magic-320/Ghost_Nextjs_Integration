
const { google } = require('googleapis');

const GOOGLE_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_PROJECT_NUMBER = process.env.NEXT_PUBLIC_GOOGLE_PROJECT_NUMBER;
const GOOGLE_CALENDAR_ID = 'primary';
const SCOPES = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events',
];


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

    const startTime = req.body.startTime;
    const endTime = req.body.endTime;

    try {
        const response = await calendar.events.list({
            calendarId: GOOGLE_CALENDAR_ID,
            timeMin: startTime,
            timeMax: endTime
        });

        const events = response.data.items || [];

        if (events.length) {
            res.status(200).json({ events });

            // Delete events
            // events.map(el => {
            //     calendar.events.delete({eventId: el.id, calendarId: GOOGLE_CALENDAR_ID})
            // })

        } else {
            res.status(200).json({ message: 'No upcoming events found.' });
        }
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Failed to fetch events.' });
    }
}