import React, { useState, useEffect } from 'react';

export default function JsonPortfolio() {
    // Récupération de l'url du portfolio
    const qs = require('qs');
    const query = qs.stringify({
      populate: '*', 
    }, {
      encodeValuesOnly: true,
    });
    const urlPortfolio = "https://charles-cantin-backend.herokuapp.com/api/"
    const portfolios = `${urlPortfolio}portfolios?${query}`
    const [card, setCard] = useState([]);
        useEffect(() => {
            const fetchData = async () =>{
                const resp = await fetch(portfolios)
                const json = await resp.json()
                if(resp.ok) setCard(json.data)
            }
            fetchData()
            // gestion des erreur à mettre en place
            .catch(err => {console.log(err)})
        }, [])


    return(
        <Wrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    margin-top: 75px;
`;
