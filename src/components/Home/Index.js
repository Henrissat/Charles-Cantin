import styled from "styled-components";

export default function Home() {
    return(
        <Wrapper>
            <Logo>
                <img style={{width:'90px' }} src="images/logo-charles-catin.png"/>
                <Logotitle>Charles <br/>Cantin</Logotitle>
                <Line />
                <Job>Photographe</Job>
            </Logo>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 80px;
    width: 100%;
    height: 88vh;
    maxWidth: 100%;
    background-image: url("images/pexels-olya-kobruseva-4560118.jpg"); no-repeat;
    background-position: top center;
    background-size: cover; 
`;

const Logo = styled.div`
    position: absolute;
    width:100%;
    font-family: londontwo;
    margin: 0 auto;
    margin-top: 0em;
    top: 25%;
    color: #482380;
`;

const Logotitle = styled.div`
    text-transform: uppercase;
    font-size: 80px;
    font-weight: bold;
`; 

const Line = styled.div`
    z-index: 2;
    position: absolute;
    background-color:#fd787e;
    width: 300px;
    height: 25px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;

`;

const Job = styled.div`
    z-index: 5;
    position: relative;
    font: 3em "Roboto";
    font-weight: 300;
    font-style: italic;
`;