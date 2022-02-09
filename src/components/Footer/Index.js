import styled from "styled-components";

export default function Footer() {
    return(
        <Wrapper>
            <h2>Footer</h2>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    height: 80px;
    display: flex;
    justify-content : center;
    align-items: center;
    background-color: black;
`;