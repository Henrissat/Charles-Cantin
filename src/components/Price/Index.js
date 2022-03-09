import styled from "styled-components";
import cards from "./price.json";
import "./price.css";


export default function Price() {
    const listitems = cards.map(props => (     
            <div className="price-card">
                <div className="price-body">
                    <img className="price-pict" src={props.img} />
                    <h2 className="price-title">{props.title}</h2>
                    <p className="price-description">{props.descripton}</p>
                    
                </div>
                <div className="price-end">
                    <p className="price-rate">{props.price}</p>
                    <button href="/Contact" className="price-btn">En savoir plus</button>
                </div>
            </div>
    ))

    return(
        <Wrapper>
            <HeaderBack />
            <h1>Tarifs & prestations</h1>
            <p><button className="btn-mobile">En savoir plus ></button></p>
            <div className="container-price-cards">{listitems}</div>
            <div className="txt-price">
                <span><b>Découvrez mes forfaits adaptés à toutes vos demandes ci-dessus !</b></span><br/><span>
                Pour les projets créatifs ou atypiques, je peux bien sûr vous proposer une offre sur mesure.</span><br/><span>

                Pour toutes les offres, mise à disposition des fichiers numériques des photos sur un album privé en ligne, en haute définition et sans logos.
                Possibilité de tirages sur papier photo premium, de livres, posters ou tableaux en supplément.</span><br/><span>

                Détails pratiques, déroulement des séances... n'hésitez pas à m'envoyer un mail</span>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 80px;
    width: 100%;
`;

const HeaderBack = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    maxWidth: 100%;
    height: 400px;
    background-image: url("images/pexels-photo-4473870.jpeg"); no-repeat;
    filter: brightness(70%);
    background-position: center;
    background-size: cover; 
`;