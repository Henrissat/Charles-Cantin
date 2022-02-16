import styled from "styled-components";
import React, { Component, useState } from "react";
import "./contact.css";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    
    const handleSubmit = (event) => {
        console.log(`
          Email: ${email}
          Password: ${password}
          Country: ${country}
          Accepted Terms: ${acceptedTerms}
        `);
        
        event.preventDefault();
    }
    
    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
            
                <label>
                    Email:
                    <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required />
                </label>
            
                <label>
                    Country:
                    <select
                    name="country"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    required>
                    <option key=""></option>
                    {countries.map(country => (
                        <option key={country}>{country}</option>
                    ))}
                    </select>
                </label>
            
                <label>
                    <input
                    name="acceptedTerms"
                    type="checkbox"
                    onChange={e => setAcceptedTerms(e.target.value)}
                    required />
                    I accept the terms of service        
                </label>
            
                <button>Submit</button>
            </form>
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