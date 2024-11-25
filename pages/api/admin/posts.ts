import { NextApiRequest, NextApiResponse } from 'next';
import { TSGhostAdminAPI } from '@ts-ghost/admin-api';

const SERVER_API_URL = process.env.NEXT_PUBLIC_GHOST_SERVER_API_URL;
const ADMIN_API_KEY = process.env.NEXT_PUBLIC_GHOST_ADMIN_API_KEY;

export default async function handler (req: NextApiRequest, res: NextApiResponse) {

    try {

        const api = new TSGhostAdminAPI (
            SERVER_API_URL!, 
            ADMIN_API_KEY!, 
            "v5.0"
        );

        const response = await api.posts
                .browse({ limit: 'all', filter: 'status:published' })
                .formats({ html: true, plaintext: true })
                .fetch();

        res.json(response);

    } catch (err) {
        console.log(err);
    }

}