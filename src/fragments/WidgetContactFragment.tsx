import React, { memo } from 'react';
import styled from 'styled-components';

import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

interface IWidgetContactFragment {

}

const Div = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 5px;
    position: fixed;
    bottom: 30px;
    transform: translateX(-50%);
    left: 50%;
    height: 50px;
    width: 160px;

    display: inline-flex;
    column-gap: 5px;
    z-index: 5;

    box-shadow: 1px 0px 10px rgba(0,0,0,.2a);
`;

const ButtonIcon = styled.a`
    border: 3px solid #FDD708;
    height: 45px;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;

    transition: all .5s 0s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FDD708;

    &:hover{
        background-color: #FDD708;
    }
`;

const WidgetContactFragment = ({}: IWidgetContactFragment) => {
    return (
        <Div>
            <ButtonIcon>
                <FaInstagram color="#fff" size={20} />
            </ButtonIcon>
            <ButtonIcon>
                <FaFacebookF color="#fff" size={20} />
            </ButtonIcon>
            <ButtonIcon>
                <FaWhatsapp color="#fff" size={20} />
            </ButtonIcon>
        </Div>
    );
}

export default memo(WidgetContactFragment);