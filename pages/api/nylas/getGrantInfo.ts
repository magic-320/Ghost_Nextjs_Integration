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

    const code = req.body.code;

    try {
        
        const response = await nylas.auth.exchangeCodeForToken({
            clientSecret: nylasConfig.apiKey,
            clientId: nylasConfig.cliendId || '', // Note this is *different* from your API key
            redirectUri: nylasConfig.callbackUri, // URI you registered with Nylas in the previous step
            code,
          });
        
        res.json(response);

    } catch (err) {
        console.log(err);
    }

}

