import styled from "styled-components";
import ContactForm from "./ContactForm";
import "./contact.css";

export default function Contact() {
    /*const [name, setName] = useState("");
    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    setName()
    setFirstname()
    setEmail()
    setCountry()
    const handleSubmit = (event) => {
        console.log(`
            Name: ${name}
            prénom: ${firstname}
            Email: ${email}
            Country: ${country}
        `);
        
        event.preventDefault();
      }
    */
    

    return(
        <Wrapper>
            <HeaderBack />
            <h1>Contact</h1>
            <div className="forms-container">
                <div className="infos-cantin">
                    <a href="tel:+33650122859">06 50 12 28 59</a><br/>
                    <a href="mailto:charles.cantin@gmail.com">charles.cantin@gmail.com</a>
                    <p className="txt-contact"><span>Un projet de prise de vue, une demande de devis personnalisé ?</span><br/><span> Vous avez reçu un bon cadeau et souhaitez prendre RDV.
        Vous pouvez m'envoyer un message directement sur WhatsApp, via Instagram ou par le formulaire ci-dessous.</span><br/><span>
        Je vous réponds généralement en moins de 24h.</span></p>
                </div>
                <ContactForm/>
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
    background-image: url("images/pexels-pixabay-326650.jpg"); no-repeat;
    filter: brightness(80%);
    background-position: center;
    background-size: cover; 
`;