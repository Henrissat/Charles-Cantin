import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import "./footer.css";

export default function Footer() {
    // Récupération de l'url du portfolio
    // Récupération de l'url du portfolio
    const qs = require('qs');
    const query = qs.stringify({
      populate: '*', 
    }, {
      encodeValuesOnly: true,
    });
    const urlStrapi= "https://charles-cantin-backend.herokuapp.com/api/"
    const urlSocialMedia = `${urlStrapi}social-medias?${query}`
    const [socialMedia, setSocialMedia] = useState([]);
    // création du fichier json
    useEffect(() => {
        fetchData()
      }, []);
    const fetchData = async () => {
        const resp = await fetch(urlSocialMedia)
        const json = await resp.json()
        setSocialMedia(json.data)
    } 
    console.log(socialMedia)

    const listSocial = socialMedia.map(({ attributes: item }) => (     
        <div className="sm" key={item.id}>
            <a className="social-link" href={item.urlSM}>
                <img className="social-pict" src={`${item.pictoSM.data.attributes.url}`} />
            </a>
        </div>
    ))

    return(
        <Wrapper>
            <SocialMedia>
                <div className="container-sm">{listSocial}</div>
            </SocialMedia>
            <Mention>
                <span>Reproduction interdite | Mentions légales |</span> 
                <span> Copyright 2021 - Charles Cantin - Made by CreatiC Studio</span>
            </Mention>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    position: relative;
    display: flex; 
    height: 200px;
    display: flex;
    width: 100%;
    justify-content : center;
    align-items: center;
    background-color: black;
    bottom: 0;
`;
const SocialMedia = styled.div`
    color: #fff;
`;
const Mention = styled.div`
    display: flex; 
    flex-direction: column;
    color: #fff;
`;