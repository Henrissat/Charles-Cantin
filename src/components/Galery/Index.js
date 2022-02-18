import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import "./galery.css";
import portfolio from "./imgs";
import { SRLWrapper } from "simple-react-lightbox";

export default function Galery() {
    // gérer les états du filtre et des cards
    const [filter, setFilter] = useState("all");
    const [cards, setCards] = useState([]);
    
    //appliquer les effets à chaque clic sur un bouton
    useEffect(() => {
        setCards(portfolio);
    }, []);
    
    useEffect(() => {
        setCards([]);
    
        const filtered = portfolio.map(p => ({
            ...p, filtered: p.category.includes(filter)
        }));
        setCards(filtered);
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
                </div>
                <SRLWrapper>
                <div className="portfolio-card">
                    {cards.map(item =>
                    item.filtered === true ? 
                    <figure>
                        <span className="card-container" key={item.name}>
                            <img className="card" src={item.src} />
                            {item.name}
                        </span>
                        <figcaption>
                            <div className="label-author">
                                {item.author}
                            </div>
                            <span className="label-category">
                                {item.description}
                            </span>
                        </figcaption>
                    </figure> : ""
                    )};
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