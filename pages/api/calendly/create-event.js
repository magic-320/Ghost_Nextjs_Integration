
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

    var event = {
        'summary': 'Test Meet',
        'location': 'Online',
        'description': 'First event with nodeJS!',
        'start': {
            'dateTime': '2024-12-03T09:00:00-07:00',
            'timeZone': 'Asia/Dhaka',
        },
        'end': {
            'dateTime': '2024-12-03T17:00:00-09:00',
            'timeZone': 'Asia/Dhaka',
        },
        'attendees': ['rc.maigc320@gmail.com'],
        'reminders': {
            'useDefault': false,
            'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10},
            ],
        },
    };
      
    const auth = new google.auth.GoogleAuth({
        keyFile: './pages/api/calendly/my-ghost-project-1731312272483-8781cd78b871.json',
        scopes: 'https://www.googleapis.com/auth/calendar',
    });

    auth.getClient().then(client => {
        calendar.events.insert({
            auth: client,
            calendarId: GOOGLE_CALENDAR_ID,
            resource: event,
        }, function(err, event) {
            if (err) {
            console.log('There was an error contacting the Calendar service: ' + err);
            return;
            }
            console.log('Event created: %s', event.data);
            res.json(event.data);
        });
    })
}