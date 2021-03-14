import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { IService } from '../models/IService';
import Tilt from 'react-parallax-tilt';

const CardWrapper = styled.div`
    padding: 15px;
    background-color: #fff;
    box-shadow: 0px 0px 15px rgba(0,0,0,.1);
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    z-index: 7;
    position: absolte;
    width: 250px;
    height: 150px;
    z-index: 6;
    margin-bottom: 80px;

    & p{
        font-size: 14px;
        margin: 0;
    }

    & strong{
        margin: 5px 0;
    }
`;

const CardImage = styled.img`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 50px;
    height: 50px;
`;

interface CardUIProps {
    item: IService
}

const CardUI = ({item}: CardUIProps) => {
    const icon = require(`./../assets/images/${item.image}.svg`);

    return (
        <Tilt>
            <CardWrapper>
                <CardImage src={icon} />
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
            </CardWrapper>
        </Tilt>
    );
}

export default memo(CardUI);