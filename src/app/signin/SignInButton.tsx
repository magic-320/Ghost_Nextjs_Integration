import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { google } from 'googleapis';

const SignInButton = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // Handle successful login
      const { access_token } = tokenResponse;
      
      // Send token to the backend for further processing or secure storage
      // const response = await axios.post('/api/auth/google', { access_token });

console.log(access_token);

      const calendar = google.calendar({ version: 'v3', auth: access_token });

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

      console.log('User authenticated:', response.data);
    },
    onError: () => {
      console.error('Login failed');
    },
    scope: 'openid email profile https://www.googleapis.com/auth/calendar.events',
  });

  return <button onClick={() => login()}>Sign in with Google</button>;
};

export default SignInButton;
