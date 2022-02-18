import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";

import Header from "../Header/Index";
import Footer from "../Footer/Index";

export default function Layout({ children }) {
    return (
        <Wrapper>
            <GlobalStyle />
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </Wrapper>
    );
};

const Wrapper = styled.div``;

const Main = styled.div`
    display: flex;
    min-height: calc(100vh - 160px);
    width: 100%; 
    margin: auto;
    color: red;
    text-align: center;
`;