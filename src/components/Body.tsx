import React from 'react';
import styled from 'styled-components';
import BodyText from './../fragments/BodyText';

import WidgetContactFragment from './../fragments/WidgetContactFragment';
import CardUI from '../ui/CardUI';
import { IService } from '../models/IService';

const Div = styled.div`
    width: 100%;
    height: 100vh;
`;

const Services = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const Body = () => {

    const services: IService[] = [
        {
            id: 1,
            title: "Graphic design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia aspernatur incidunt iure non.",
            image: "001-vector"
        },
        {
            id: 2,
            title: "Graphic design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "002-web-design"
        },
        {
            id: 3,
            title: "Graphic design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "003-paint-palette"
        },

    ]

    return (
        <Div>
            <BodyText />
            <Services>
                {
                    services.map((item: IService) => {
                        return <CardUI key={item.id} item={item} />
                    })
                }
            </Services>
            <WidgetContactFragment />
        </Div>
    );
}

export default Body;