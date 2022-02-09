import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        color : blue;
        font-family: "Roboto";
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    }
    h1, h2, h3, h4 {
        letter-spacing: 1px;
    }
    h1{
        font-size: 1.6rem;
    }
    h2{
        font-size: 1.4rem;
    }
    h3 {
        font-size: 1.2rem;
    }
    p {

    }
    button {
        font-family: Roboto;
        padding: 12px 20px;
        cursor: pointer;
        border: solid 1px;
        transition : linear 0.25s;
    }
`;

export default GlobalStyle;