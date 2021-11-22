const axios = require('axios');


const pipeDriveBaseUrl = process.env.PIPEDRIVE_BASE_URL;
const key = process.env.PIPEDRIVE_API_TOKEN

module.exports =  {
    async getOportunitiesFromPipedrive() {
    try {
        const { data } = await axios
            .get(`https://trombini.pipedrive.com/api/v1/deals?limit=500&api_token=d131d8b4ed0b6a1125c6145b85db76220376dd8e`)
              
            const oportunitiesWithStatusWon = data.data.filter(data => data.status === "won")

            return oportunitiesWithStatusWon;
    } catch (err) {
        console.log(err);
        return
    }
}
}