import styled from "styled-components";

export default function Footer() {
    return(
        <Wrapper>
            <p>Reproduction interdite | Mentions légales</p>
            <Mention>Copyright 2021 - Charles Cantin - Made by CreactiC</Mention>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    position: relative;
    height: 80px;
    display: flex;
    width: 100%;
    justify-content : center;
    align-items: center;
    background-color: black;
    bottom: 0;
`;

const Mention = styled.div`
    color: #fff;
`;