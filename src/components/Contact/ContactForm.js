import React from 'react';
import styled from "styled-components";
import { useForm, ValidationError } from '@formspree/react';

    function ContactForm() {
        const [state, handleSubmit] = useForm("xrgjleeg");
        if (state.succeeded) {
            return <h2>Merci pour votre message!</h2>;
    }
    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Nom</label>
                    <input type="text" name="name" />
                </p>
                <p>
                <label htmlFor="email">
                    Email Address
                </label>
                    <input
                        id="email"
                        type="email" 
                        name="email"
                    />
                </p>
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <p>
                    <label>Role</label><br/><select name="role[]" multiple>
                            <option value="customer">Déjà client</option>
                            <option value="follower">Nouveau client</option>
                    </select>
                </p>
                <p>
                    <label>Catégorie</label><br/><select name="role[]" multiple>
                            <option value="customer">Portrait</option>
                            <option value="follower">Couple</option>
                            <option value="customer">Famille</option>
                            <option value="follower">Mariage</option>
                            <option value="customer">Grossesse</option>
                            <option value="follower">Bébé</option>
                            <option value="follower">Baptême</option>
                            <option value="follower">Autre</option>
                    </select>
                </p>
                <p>
                    <textarea
                    id="message"
                    name="message"
                    />
                </p>
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Envoyer
                </button>
            </form>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    @media (max-width: 1440px) {

            }
    @media (max-width: 375px) {
            }
`;

export default ContactForm;