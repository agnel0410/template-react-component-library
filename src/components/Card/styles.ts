import styled from 'styled-components'
import {StyledCardProps, StyledCardImgProps} from './Card.types'

export const StyledCard = styled.div<StyledCardProps>`
    --clr-primary: #d50000;
    --clr-primary-hover: #29e6a7;
    --clr-primary-dark: #039d69;
    --clr-gray100: #f9fbff;
    --clr-gray150: #f4f6fb;
    --clr-gray200: #eef1f6;
    --clr-gray300: #e1e5ee;
    --clr-gray400: #767b91;
    --clr-gray500: #4f546c;
    --clr-gray600: #2a324b;
    --clr-gray700: #161d34;
    --radius: 0.2rem;
    font-family: ${(props) => props.fontFamily? props.fontFamily : "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"};
    color: ${(props) => props.color? props.color : "black"};
    overflow: hidden;
    box-shadow: 0 2px 20px #e1e5ee;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-in;
    &:hover {
      transform: scale(1.02);
    }
`
export const CardBody = styled.div`

`

export const CardImg = styled.img<StyledCardImgProps>`
height: 12rem;
width: 100%;
object-fit: cover;
`

export const CardTitle = styled.h2`
padding: 1rem;
`

export const CardDescription = styled.p`
padding: 0 1rem;
`

export const CardButton = styled.button`
    padding: 1rem;
    font-family: inherit;
    font-weight: bold;
    font-size: 1rem;
    margin: 1rem;
    border: 2px solid var(--clr-primary);
    background: transparent;
    color: var(--clr-primary);
    border-radius: var(--radius);
    transition: background 200ms ease-in, color 200ms ease-in;



  &:hover{
    background: var(--clr-primary);
    color: white;
  }
`