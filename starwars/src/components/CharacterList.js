import React from "react";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';

const CharacterList = (props) => {
    const CardContainer = styled.div`
        display: flex;
        flex-wrap: wrap; 
        justify-content: space-around;
    
    `

    return (
        <div>
            <CardContainer>
                {props.characters.map((character, index) => <CharacterCard key={index} character={character}/>)}
            </CardContainer>
        </div>
    );
};

export default CharacterList;