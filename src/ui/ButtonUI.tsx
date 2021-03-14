import React from 'react';
import styled, { keyframes } from 'styled-components';

const grow = keyframes`
    from {
        transform: scale(.9);
        opacity: 1;
    }

    to {
        transform: scale(1.2);
        opacity: 0;
    }
`;

const Button = styled.a`
    border: none;
    width: 150px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #FDD708;
    font-size: 16px;
    text-align: center;
    font-weight: 600;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    position: relative;
    /* box-shadow: 0px 4px 5px rgba(0,0,0,.2); */

    transition: all .3s 0s ease-in-out;

    &:last-child {
        margin-right: 10px;
    }

    &:active{
        /* box-shadow: 0px 0px 0px rgba(0,0,0,.2); */
    }

    &:before{
        content: "";
        display: block;
        position: absolute;
        background-color: #FDD708;
        width: 150px;
        height: 60px;
        z-index: -1;
        border-radius: 5px;
        animation: ${grow} 1s linear infinite;
    }

    & label{
        z-index: 8;
    }
`;

interface IButtonProps {
    label: string;
    onClick?: () => void
}

const ButtonUI = ({label, onClick}: IButtonProps) => {
    return (
        <Button onClick={onClick}>
            <span>{label}</span>
        </Button>
    );
}

export default ButtonUI;