import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import "./galery.css";
import { SRLWrapper } from "simple-react-lightbox";


export default function Galery() {
    const [isLoading, setIsLoading] = useState(true);
    // Gestion des filtres de la bdd Strapi
    const qs = require('qs');
    const query = qs.stringify({
      populate: '*', 
    }, {
      encodeValuesOnly: true,
    });
    //Récupération de l'url du portfolio
    const urlPortfolio = "https://charles-cantin-backend.herokuapp.com/api/"
    const portfolios = `${urlPortfolio}portfolios?${query}`
    const [card, setCard] = useState([]);
    // création du fichier json
    useEffect(() => {
        fetchData()
      }, []);
    const fetchData = async () => {
        const resp = await fetch(portfolios)
        const json = await resp.json()
        setCard(json.data)
        setIsLoading(false);
    }  
    
    // gérer les états du filtre
    const [filter, setFilter] = useState("All")
    // Créer le menu catégorie
    const menuFiltered = () => {
        const filtered = card.map((p) => p.attributes.categories);
        const filteredOK = filtered.filter((category, numb, array) => array.indexOf(category) === numb);
        console.log(filteredOK)
        return filteredOK;   
    }

    return(
        <Wrapper>
            <HeaderBack />
            <h1>Galerie</h1>
            <div className="containter-portfolio">
                <div className="portfolio-filter"> 
                    <a active={filter === "all"} onClick={() => setFilter("All")}>All</a>
                    {/* creation dynamique du menu filtre */}
                    {menuFiltered().map(( item ) => (
                        <a active={filter === item} 
                        onClick={() => setFilter(item)} key={item}>{item}</a>)
                    )}
                </div>
                <SRLWrapper>
                    <div className="portfolio-card">
                    {/* creation dynamique des cards photos */}
                    {card.filter((i) => {
                        return filter === "All" ? i[0] !== "" : i.attributes.categories === filter 
                        }).map(( item ) => (
                        <figure key={item.id}>
                            <span className="card-container">
                            <img className="card" src={`${item.attributes.img.data.attributes.url}`} />
                            </span>
                            <figcaption>
                            <div className="label-author">{item.attributes.title}</div>
                            <span className="label-category">{item.attributes.description}</span>
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
const Buttons = styled.div`
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
    */


    /*    
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
        fetch(`${portfolios}`)
            .then(data => data.json())
            .then(json => setCard(json.data))
            .catch(error => console.log(error));
    }, []);
    */

/*
<a active={filter === "all"} onClick={() => setFilter("all")}>All</a>
<a active={filter === "Mariage"} onClick={() => setFilter("Mariage")}>Mariage</a>
<a active={filter === "Couple"} onClick={() => setFilter("Couple")}>Couple</a>
<a active={filter === "Portrait"} onClick={() => setFilter("Portrait")}>Portrait</a>
<a active={filter === "Grossesse"} onClick={() => setFilter("Grossesse")}>Grossesse</a>
<a active={filter === "Bébé"} onClick={() => setFilter("Bébé")}>Bébé</a>
<a active={filter === "Famille"} onClick={() => setFilter("Famille")}>Famille</a>
<a active={filter === "Bapteme"} onClick={() => setFilter("Bapteme")}>Baptême</a>
*/