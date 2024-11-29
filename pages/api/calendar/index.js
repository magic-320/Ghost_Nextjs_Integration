// Integrating Google Calendar

const express = require('express');
const { google } = require('googleapis');

const app = express();

const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
const GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCW0YmzOfElxuBE\n6fMIItMR8UBSrq03kM24xesQir+o/8UwdoINFKXGMQ3itqvoOl3oX50YGoTNC5/a\nyz8CZMSCtJWonnTh5Kr2SJQLdcNpPdBGEMiQkm4zuqiyPZc4NASLrXOasEmb3E9i\nYCA01Bt/aTqWKMh2d9YuGyVVieQ6mN+0cWhRPKz6lX1Nj6S2FxtdU4t4xGdxxszM\nQlFF579OI7CiAbFCTBmUthm2XxsjdvTKzeRXHGhSyFlNeLss+Qg7VMDhy6SB7sJ6\nu/K/o7lcxg3ILCIclnR3qCIlF921U1o6WMGXdUszfosBb6wop3c8kAwy3YVZQ9oG\nEtYCkNo1AgMBAAECggEANs1xIeUeEUIQ4Dm6i+xLkit92g2K97PwbQHOBrbEKh62\ngoOtgh9MlZXhm84Q7VO4J+YGaWnJc9CTh6du/+mp1mzULO9XPXYgAVoiIX/rP+Ss\nN6mFl7L9xGJBRnNG7a9JL5AZf84rES2e0vpm+YtRapzMIyAyp4moFBzdFhYDDp9L\nbZKsfTpEe+mzxi8kH5nREcUjStFK5hzFf40uhOzDQfJeq4ykAzx4CWTjmq4xA1Ji\nRZIuY894AhVVErJluT5RmeBNiGmC+V/0F9yK/i4HqtHpy/AsleUMLyTPIZbkLylR\nARqMUQsCW0InjUEF4qN6dVNxlYRnBjtyLpjbBkeNiQKBgQDEgQz3hbjXgtDZ1vKY\nLpHVOxGfWKH64qZfG1FN3EA7qDLTlNZmsehylE1HNCPT4BFdKeT+ht0H1cltrqTo\nd7uhryP7vtCceawL6xZJOCXTLXBVX9SsOMgixSHlboMQMJRTjoXaij8qRBSSQHef\nU8QPsmapTdKRCOLdkDxRLNu5HwKBgQDEe2qGQMSCQtVN6o2LToDb+LIkBqEVVxRv\niWVOS8Fw9QWPsgnHDNNqvRrJyMvu8lk2cwCiUz+ShgLoLhvdazcMi/R9k7yUoekr\n6O36mQvX8VrfqwjqYDrqIUgOa2VKU0I3jr08oDbCNBnPpvglN1fsJI3Nhi9kFd9W\nQ+HlfIT+KwKBgQCeKr3UMkdg+IPBA/nKsplhh6UcnIvs1ChUHznnMORm4HDgy0lz\n6bmPGH3HVVmNPirb0U/n64fXuaXjahKEp3NYpg+Rn7psaKcqBLSwhMg1XbqwjW0y\nnpXBHum0sao/CsspImvtRx+mlpv0SH3AufzzIYbuuZxGb1+kNWfHcxL8wwKBgEwS\ndJXyMaM1eRynuZG8HUwNp/smzetTQchFbAG6dvTjCPovtnVo09o5yUtjAQJMtpnM\nQOyYSr7SQAHhCEzcG/4xmcGdF6B8Z6jmkG08IEfFXKfIsrT7+RN5O0rJ7feu8K5O\nB5qXdVwPjAbH4L+YA+Sb6oMudt7LUSM3ORj+8wbtAoGANW4Z7DUIB3qOuR0m8aX3\nhx9XVAMQOlkCsGTAfhnrG57Lkjbj4AwIO/+cA2doIPfWAezltPzhg9o2Eh2KO3WB\npoqpVaGsN7IBql2KA6Ab2XgcpyIX94oaIAj8Mcy5wFS2OaTxHmtzJyfldyqDP9U3\ndV3My0eH2GlOyndGBN2fW70=\n-----END PRIVATE KEY-----\n";
const GOOGLE_CLIENT_EMAIL = "calendar-key@my-ghost-project-1731312272483.iam.gserviceaccount.com";
const GOOGLE_PROJECT_NUMBER = "712439827619";
const GOOGLE_CALENDAR_ID = "primary";

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



app.get('/', (req, res) => {

    calendar.events.list({
        calendarId: GOOGLE_CALENDAR_ID
    }, (error, result) => {
      if (error) {
        console.log('---------- errror---------------')
        res.send(error);
      } else {
        if (result.data.items.length) {
          res.send(JSON.stringify({ events: result.data.items }));
        } else {
          res.send(JSON.stringify({ message: 'No upcoming events found.' }));
        }
      }
    });
});


app.get("/createEvent",(req,res)=>{
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
    keyFile: './my-ghost-project-1731312272483-6596bc1a6687.json',
    scopes: 'https://www.googleapis.com/auth/calendar',
  });
  auth.getClient().then(a=>{
    calendar.events.insert({
      auth:a,
      calendarId: GOOGLE_CALENDAR_ID,
      resource: event,
    }, function(err, event) {
      if (err) {
        console.log('There was an error contacting the Calendar service: ' + err);
        return;
      }
      console.log('Event created: %s', event.data);
      res.jsonp("Event successfully created!");
    });
  })
})



app.listen(5000, () => console.log(`App listening on port 5000!`));