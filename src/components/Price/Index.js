import styled from "styled-components";
import "./price.css";

const cards = [
    {title:"Pour deux", descripton:"Pour deux personnes, en extérieur ou en studio", price:"195€", img:"images/icone-couple.png",},
    {title:"Juste pour moi", descripton:"Séance pour une personne, en extérieur ou en studio", price:"130€", img:"images/icone-portrait.png",},
    {title:"Il était une fois", descripton:"Photo de grossesse (À votre domicile, en extérieur ou en studio)", price:"160€", img:"images/icone-pregnant.png",},
    {title:"Mon bébé", descripton:"Photo d’enfant jusqu’à 3 ans (photo à domicile)", price:"100€", img:"images/icone-baby.png",},
    {title:"Famille", descripton:"Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio 30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu\’à 2 ans)", price:"220€", img:"images/icone-family.png",},
    {title:"J’immortalise l’événement", descripton:"Prestation de mariage ou baptême sur devis", price:"Sur mesure", img:"images/icone-baptism.png",},
]

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