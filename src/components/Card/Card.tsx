import React from 'react';
import { CardProps } from './Card.types';
import { StyledCard, CardBody, CardImg, CardTitle, CardDescription, CardButton} from './styles'

const Card: React.FunctionComponent<CardProps> = ({
    img,
    title,
    description,
    buttonLabel
}) => {
    return(
        <StyledCard>
            <CardBody>
                <CardImg src= {img}></CardImg>
                <CardTitle> {title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardBody>
            <CardButton>{buttonLabel}</CardButton>
        </StyledCard>
    )
}

export default Card