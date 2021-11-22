const axios = require('axios');
require('dotenv')

const pipeDriveBaseUrl = process.env.PIPEDRIVE_BASE_URL;
const key = process.env.PIPEDRIVE_API_TOKEN

module.exports =  {
    async getOportunitiesFromPipedrive() {
    try {
        const { data } = await axios
            .get(`${pipeDriveBaseUrl}/deals?limit=500&api_token=${key}`)
              
            const oportunitiesWithStatusWon = data.data.filter(data => data.status === "won")

            return oportunitiesWithStatusWon;
    } catch (err) {
        console.log(err);
        return
    }
}
}