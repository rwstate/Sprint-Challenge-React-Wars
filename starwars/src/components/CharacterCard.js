import React from "react";
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import styled from 'styled-components';

const CharacterCard = (props) => {
    const Title = styled(CardTitle)`
        font-size: 40px; 
    `

    const StyledCard = styled(Card)`
        background-color:aqua;
        width: 300px;
        height: 200px;
        margin-top: 100px;
        margin-bottom: 50px;
        opacity: .7;
    `

    return (
        <div>
            <StyledCard>
                <CardBody>
                    <Title>{props.character.name}</Title>

                    <CardSubtitle>Born: {props.character.birth_year}</CardSubtitle>

                    <CardSubtitle>Mass: {props.character.mass}</CardSubtitle>
                </CardBody>
            </StyledCard>
        </div>
    );
};

export default CharacterCard;