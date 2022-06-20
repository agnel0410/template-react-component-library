import styled, { css } from 'styled-components'
import { StyledButtonProps,ButtonProps } from "./Button.types"



export const StyledButton = styled.button<StyledButtonProps>`
  font-family: ${(props) => props.fontFamily? props.fontFamily : "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"};
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  
  ${(props) =>
    props.size === 'small' &&
    css`
      font-size: 12px;
      padding: 10px 16px;
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      font-size: 14px;
      padding: 11px 20px;
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      font-size: 16px;
      padding: 12px 24px;
    `}
`