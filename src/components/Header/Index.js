import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';

/*
const buttonLeft = 100;
const buttonright = 100;
const buttonTrans = 'translate('+buttonLeft+'px, '+buttonright+'px)';
var translateButton = {
    transform: buttonTrans 
   }
*/

export default function Header() {
    const location = useLocation();
    return(
        <Wrapper>
            <Nav>
                <Link to="/">
                    <MenuEl isCurrentPage={location.pathname === "/"}><img style={{width:'25px', marginTop:'-5px' }} src="images/icone_home-off.png" /></MenuEl>
                </Link>
                <Link to="/galery">
                    <MenuEl isCurrentPage={location.pathname === "/galery"}>Gallerie</MenuEl>
                </Link>
                <Link to="/price">
                    <MenuEl isCurrentPage={location.pathname === "/price"}>Tarifs & prestations</MenuEl>
                </Link>
                <Link to="/Contact">
                    <MenuEl isCurrentPage={location.pathname === "/Contact"}><img style={{width:'25px', marginTop:'-5px' }} src="images/icone_contact-off.png" /></MenuEl>
                </Link>
            </Nav>
            <Linepink />
        </Wrapper>
    );
};

const Wrapper = styled.header`
    display: flex;
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 80px;
    background: linear-gradient(to right, #261953,70%, #c25071, #df6a73);
    color: white;
    padding: 0px 34px 0 0;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    text-align: center;
    & a{
        text-decoration: none;
        color : inherit;
    }
    & a:first-child{
        margin-right: 16px;
    }
`;

const Linepink = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    height: 5px;
    background-color: #fd787e;
    top: 75px;
    left: 0px;
`;

const Nav = styled.nav`
    display: flex;
`;

const MenuEl= styled.p`
    color: #ff8e93; 
    font-size: 18px;
    margin: 0 30px;
    height: 25px;
    padding: 10px 5px 0 5px;
    border-radius: 30px;
    cursor: pointer;
    text-decoration: none;
    will-change: transform;
    transition: .3s all ease-in-out;
    background-color: #fd787e
        ${(props) =>(props.isCurrentPage ? "" : "transparent")};
    color: #261953
        ${(props) =>(props.isCurrentPage ? "" : "#ff8e93")};
    &:before{
        transform: translate(-120%,-50%) translateZ(0);
    }
    &:hover{
        color: #261953;
        background-color:#fd787e;
    }

    @media screen and (max-width: 1024px) {  
    }

    @media screen and (max-width: 780px) {
        margin: 0 10px;
    }
`;