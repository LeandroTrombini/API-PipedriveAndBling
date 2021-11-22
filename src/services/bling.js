const axios = require('axios')
require('dotenv')
const baseUrl = process.env.BLING_BASE_URL
const key = process.env.BLING_API_TOKEN

module.exports = {
    async createOrder(deal) {
        try {
            const xml = `
            <?xml version="1.0" encoding="UTF-8"?>
            <pedido>
             <cliente>
             <nome>${deal.person_id === null ?  "Any name" : deal.person_id.name}</nome>
             </cliente>
             
             <volume>
             <servico> ANY VOLUME SERVICE </servico>
             </volume>
    
             <itens>
             <item>
             <codigo>${deal.id}</codigo>
             <descricao> ANY ITEM DESCRIPTION </descricao>
             <qtde>${deal.products_count}</qtde>
             <vlr_unit>${deal.value/deal.products_count}</vlr_unit>
             </item>
             </itens>
            </pedido>
            `
            await axios.post(`${baseUrl}/pedido/json?apikey=${key}&xml=${encodeURIComponent(xml)}`)
        } catch(err) {
            console.error(err.response.data.retorno.erros.erro)
            return
        }
    }
}