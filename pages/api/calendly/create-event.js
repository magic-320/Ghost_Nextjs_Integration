
const { google } = require('googleapis');

const GOOGLE_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_PROJECT_NUMBER = process.env.NEXT_PUBLIC_GOOGLE_PROJECT_NUMBER;
const GOOGLE_CALENDAR_ID = 'primary';
const SCOPES = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events',
];

const GOOGLE_TYPE = process.env.NEXT_PUBLIC_GOOGLE_TYPE;
const GOOGLE_PROJECT_ID = process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID;
const GOOGLE_PRIVATE_KEY_ID = process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY_ID;
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const GOOGLE_AUTH_URI = process.env.NEXT_PUBLIC_GOOGLE_AUTH_URI;
const GOOGLE_TOKEN_URI = process.env.NEXT_PUBLIC_GOOGLE_TOKEN_URI;
const GOOGLE_AUTU_PROVIDER_X509_CERT_URL = process.env.NEXT_PUBLIC_GOOGLE_AUTU_PROVIDER_X509_CERT_URL;
const GOOGLE_CLIENT_X509_CERT_URL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_X509_CERT_URL;
const GOOGLE_UNIVERSE_DOMAIN = process.env.NEXT_PUBLIC_GOOGLE_UNIVERSE_DOMAIN;


const jwtClient = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY,
    SCOPES,
    'peterleo1026@gmail.com'
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
            'dateTime': '2024-12-03T09:00:00-00:00',
            'timeZone': 'America/New_York',
        },
        'end': {
            'dateTime': '2024-12-03T10:00:00-00:00',
            'timeZone': 'America/New_York',
        },
        // 'attendees': [{ email: 'rc.magic320@gmail.com' }],
        'reminders': {
            'useDefault': false,
            'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10},
            ],
        },
    };
      

    const auth = new google.auth.GoogleAuth({
        credentials: {
            type: GOOGLE_TYPE,
            project_id: GOOGLE_PROJECT_ID,
            private_key_id: GOOGLE_PRIVATE_KEY_ID,
            private_key: GOOGLE_PRIVATE_KEY,
            client_email: GOOGLE_CLIENT_EMAIL,
            client_id: GOOGLE_CLIENT_ID,
            auth_uri: GOOGLE_AUTH_URI,
            token_uri: GOOGLE_TOKEN_URI,
            auth_provider_x509_cert_url: GOOGLE_AUTU_PROVIDER_X509_CERT_URL,
            client_x509_cert_url: GOOGLE_CLIENT_X509_CERT_URL,
            universe_domain: GOOGLE_UNIVERSE_DOMAIN
        },
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