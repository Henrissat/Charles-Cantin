import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import "./galery.css";
import { SRLWrapper } from "simple-react-lightbox";


export default function Galery() {
    // Récupération de l'url du portfolio
    const qs = require('qs');
    const query = qs.stringify({
      populate: '*', 
    }, {
      encodeValuesOnly: true,
    });
    const urlPortfolio = "https://backend-charles-cantin.herokuapp.com/api/"
    const portfolios = `${urlPortfolio}portfolios?${query}`
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch(`${portfolios}`)
            .then(data => data.json())
            .then(json => setCard(json.data))
            .catch(error => console.log(error));
    }, []);
    console.log(card)
    

    /*
    // initialiser la valeur à all
    const all = foreach(filter = false)
    filter = true*/

    // gérer les états du filtre
    const [filter, setFilter] = useState("Portrait")
    //appliquer les effets à chaque clic sur un bouton
    useEffect(() => {
        const filtered = card.map(({attributes: p} ) => ({
            ...p, filtered: p.categories.includes(filter)
        }));
        setCard(filtered)
        console.log(card)
    }, [filter]);

 

    return(
        <Wrapper>
            <HeaderBack />
            <h1>Galerie</h1>
            <div className="containter-portfolio">
            <div className="portfolio-filter">
                    <a active={filter === "all"} onClick={() => setFilter("all")}>All</a>
                    <a active={filter === "Mariage"} onClick={() => setFilter("Mariage")}>Mariage</a>
                    <a active={filter === "Couple"} onClick={() => setFilter("Couple")}>Couple</a>
                    <a active={filter === "Portrait"} onClick={() => setFilter("Portrait")}>Portrait</a>
                    <a active={filter === "Grossesse"} onClick={() => setFilter("Grossesse")}>Grossesse</a>
                    <a active={filter === "Bébé"} onClick={() => setFilter("Bébé")}>Bébé</a>
                    <a active={filter === "Famille"} onClick={() => setFilter("Famille")}>Famille</a>
                    <a active={filter === "Bapteme"} onClick={() => setFilter("Bapteme")}>Baptême</a>
                    
                    {/* card.map(({ attributes: item }) => (
                        <a active={filter === item.category} onClick={() => setFilter(item.category)} key={item.id}>{item.category}</a>)
                    )*/}
                </div>
                <SRLWrapper>
                    <div className="portfolio-card">
                        {card.map(({ attributes: item }) => (
                        <figure>
                            <span className="card-container" key={item.id}>
                            <img className="card" src={`https://backend-charles-cantin.herokuapp.com/api/${item.img.data.attributes.url}`} />
                            </span>
                            <figcaption>
                            <div className="label-author">{item.title}</div>
                            <span className="label-category">{item.description}</span>
                            </figcaption>
                        </figure>
                        ))}
                    </div>
                </SRLWrapper>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    margin-top: 75px;
`;
const HeaderBack = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    maxWidth: 100%;
    height: 400px;
    background-image: url("images/pexels-photo-4463762.jpeg"); no-repeat;
    filter: brightness(80%);
    background-position: center;
    background-size: cover; 
    @media screen and (max-width: 780px) {
        background-image: url("https://images.pexels.com/photos/4463762/pexels-photo-4463762.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"); no-repeat;
    }
`;

    /*
    
    // Récupération de l'url du portfolio
    const qs = require('qs');
    const query = qs.stringify({
      populate: '*', 
    }, {
      encodeValuesOnly: true,
    });
    const urlPortfolio = "http://localhost:1337/api/"
    const Portfolios = `${urlPortfolio}portfolios?${query}`
    let allPortfolio = [];

    function getPortfolio() {
        fetch(`$(Portfolios)`)
            .then(card => card.json())
            .then(result => {
                allPortfolio = result;
                console.log("allPortfolio", allPortfolio);
            })
            .catch(err => {
                console.log(err);
            })
    }
    function init() {
        getPortfolio();
    }
    init();*/

    /*
    // Récupération de l'url du portfolio
    const qs = require('qs');
    const query = qs.stringify({
      populate: '*', 
    }, {
      encodeValuesOnly: true,
    });
    const urlPortfolio = "http://localhost:1337/api/"
    const portfolio = `${urlPortfolio}portfolios?${query}`

    //récupération du fichier json
    const [card, setCard] = useState([])
    useEffect(() => {
        const fetchData = async () =>{
            const resp = await fetch(portfolio)
            const json = await resp.json()
            setCard(json.data)
        }
        fetchData()
        // gestion des erreur à mettre en place
        .catch(err => {console.log(err)})
    }, [])
    */


    /*    
    // Récupération de l'url du portfolio
    const qs = require('qs');
    const query = qs.stringify({
      populate: '*', 
    }, {
      encodeValuesOnly: true,
    });
    const urlPortfolio = "http://localhost:1337/api/"
    const Portfolios = `${urlPortfolio}portfolios?${query}`
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch(`${Portfolios}`)
            .then(data => data.json())
            .then(json => setCard(JSON.stringify(json.data)))
            .catch(error => console.log(error));
    
    }, []);
    */