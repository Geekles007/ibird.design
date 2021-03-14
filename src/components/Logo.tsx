import React from 'react';
import logo from "./../assets/images/ibird-black.png";
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 60px;
    object-fit: cover;
`;

const LogoComponent = () => {
    return (
        <a href="/">
            <StyledImage src={logo} alt="logo"/>
        </a>
    );
}

export default LogoComponent;