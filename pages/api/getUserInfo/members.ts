import { NextApiRequest, NextApiResponse } from "next";

const API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const jwtToken = await fetch(`${API_URL}/members/api/session`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Cookie': req.headers.cookie || ''
    }
  });

  const member = await fetch(`${API_URL}/members/api/member`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': req.headers.cookie || ''
      }
  })
  
  const result_jwtToken = await jwtToken.text();
  const result_member = await member.json();
  
  res.json({
    jwtToken: result_jwtToken,
    member: result_member
  });
  
}

