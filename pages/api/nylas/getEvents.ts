import { NextApiRequest, NextApiResponse } from "next";
import Nylas from 'nylas';

const nylasConfig = {
    cliendId: process.env.NEXT_PUBLIC_NYLAS_CLIENT_ID,
    callbackUri: 'http://localhost:4000/Dashboard/meet',
    apiKey: process.env.NEXT_PUBLIC_NYLAS_API_KEY,
    apiUri: process.env.NEXT_PUBLIC_NYLAS_API_URI
}

const nylas = new Nylas({
    apiKey: nylasConfig.apiKey || '',
    apiUri: nylasConfig.apiUri
})


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {

        const code = 'YWP_DQ_8hB3ut7zyjOgTOtBFC7jbX1UHhyCPcn55L2502pqPZmrubFAJ7BOlvwLzUFf76EecNJWyN8SJ5x1CYJ7Lda_qfJJX';
        
        const response = await nylas.auth.exchangeCodeForToken({
            clientSecret: nylasConfig.apiKey,
            clientId: nylasConfig.cliendId || '', // Note this is *different* from your API key
            redirectUri: nylasConfig.callbackUri, // URI you registered with Nylas in the previous step
            code,
          });
        
        const { grantId } = response;
        console.log(response)

        const calendarId = 'primary';

        const events = await nylas.events.list({
            identifier: grantId,
            queryParams: {
                calendarId: calendarId
            }
        })

        res.json(events);

    } catch (err) {
        console.log(err);
    }

}

