import { NextApiRequest, NextApiResponse } from "next";
import Nylas from 'nylas';

const nylasConfig = {
    cliendId: process.env.NEXT_PUBLIC_NYLAS_CLIENT_ID,
    callbackUri: process.env.NEXT_PUBLIC_DOMAIN! + '/learn',
    apiKey: process.env.NEXT_PUBLIC_NYLAS_API_KEY,
    apiUri: process.env.NEXT_PUBLIC_NYLAS_API_URI
}

const nylas = new Nylas({
    apiKey: nylasConfig.apiKey || '',
    apiUri: nylasConfig.apiUri
})


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const authUrl = nylas.auth.urlForOAuth2({
        clientId: nylasConfig.cliendId || '',
        redirectUri: nylasConfig.callbackUri
    })

    res.send(authUrl);
}

