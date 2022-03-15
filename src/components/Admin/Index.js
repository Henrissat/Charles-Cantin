import styled from "styled-components";
import React, { useEffect } from 'react';


export default function Admin() {
    useEffect(() => {
        window.location.href = "https://charles-cantin-backend.herokuapp.com/admin";
    }, []);

    return(
        <Wrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-top: 80px;
    width: 100%;
`;