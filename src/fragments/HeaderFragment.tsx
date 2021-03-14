import React from 'react';
import ILink from "./../models/ILink";

import Logo from "./../components/Logo";
import styled from 'styled-components';

import { Colors } from './../constants/colors'; 

import ButtonUI from './../ui/ButtonUI';

interface HeaderFragmentProps {
    links?: Array<ILink>
}

const WrapHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    z-index: 5;
`;

const Link = styled.a`
    cursor: pointer;
    text-decoration: none;
    transition: all .5s 0s ease-in-out;
    font-weight: 500;

    &:hover{
        color: #FDD708
    }
`;

const HeaderFragment = ({links}: HeaderFragmentProps) => {
    return (
        <WrapHeader>
            <Logo />
        </WrapHeader>
    );
}

export default HeaderFragment;