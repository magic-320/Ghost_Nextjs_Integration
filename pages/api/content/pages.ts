import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL;
const ADMIN_API_KEY = process.env.NEXT_PUBLIC_GHOST_ADMIN_API_KEY;
const CONTENT_API_KEY = process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY;

import { TSGhostAdminAPI } from '@ts-ghost/admin-api';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {

    const api = new TSGhostAdminAPI (
        API_URL || '', 
        ADMIN_API_KEY || '', 
        "v5.0"
    );

    const response = await api.pages
        .browse({
            limit: 10,
        })
        .fields({
            title: true,
            slug: true,
            id: true,
            html: true,
            plaintext: true,
        })
        .formats({
            html: true,
            plaintext: true,
        })
        .fetch();

    console.log(response);
    res.json(response);
    
    
    // const pages = await fetch(`${API_URL}/ghost/api/content/pages/?key=${CONTENT_API_KEY}${req.body.payload}`, {
    //     method: 'GET',
    //     credentials: 'include',
    //     headers: {
    //         // Authorization: `Ghost ${token}`, // Correct placement of the Authorization header
    //         'Content-Type': 'application/json',
    //         'Cookie': req.headers.cookie || ''
    //     }
    // });

    // const result = await pages.json();
    // res.json(result);
}