import styled from "styled-components";

export default function Footer() {
    return(
        <Wrapper>
            <h2>Footer</h2>
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