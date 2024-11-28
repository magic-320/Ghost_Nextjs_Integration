import { google } from 'googleapis';

export default async function handler(req:any, res:any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { access_token } = req.body;

  if (!access_token) {
    return res.status(400).json({ error: 'Access token not provided' });
  }

  try {
    // Verify the token and get user info
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token });

    const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
    const userInfo = await oauth2.userinfo.get();

    // Optionally, store user info and tokens in a database
    res.status(200).json({ user: userInfo.data });
  } catch (error:any) {
    console.error('Error validating token:', error.message);
    res.status(500).json({ error: 'Failed to validate access token' });
  }
}

