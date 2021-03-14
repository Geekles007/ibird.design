import React from 'react';
import styled from 'styled-components';
import ButtonUI from '../ui/ButtonUI';
import Tilt from 'react-parallax-tilt';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
    z-index: 3;

    text-align: center;
`;

const H1 = styled.span`
    font-size: 5em;
    font-weight: 600;
    font-family: "gilroy";
    line-height: 80px;
`;

const Paragraph = styled.p`
    font-size: 17px;
    margin-left: 5px;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 520px;
`;

const BodyText = () => {
    return (
        <Tilt>
            <Wrapper>
                <H1>iBIRD DESIGN</H1>
                <Paragraph>Ibird design as its name suggests is a company focused on the design and creativity. We try our best to provide the best possible visual identity to our customer.</Paragraph>
                <ButtonUI label={"CONTACT US"} />
            </Wrapper>
        </Tilt>
    );
}

export default BodyText;