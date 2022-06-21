import React from 'react'
//import './Button.css';
import { StyledButton } from './styles'
import { ButtonProps } from "./Button.types"


const Button: React.FC<ButtonProps> = ({
  content, 
  addMessage,
  ...props
}) => {

  const {size, fontFamily, backgroundColor} = content;
  function onButtonClick(e: React.MouseEvent<HTMLButtonElement>): void {
    addMessage({ text: e.currentTarget.value });
  }

  return(
    <div>
        {
          content.elements.map(el=>(
            <StyledButton 
              size={size} 
              fontFamily={fontFamily}
              style={{backgroundColor }}
              value={el.label} 
              key={content.elements.indexOf(el)} 
              onClick={onButtonClick}
              {...props}
              >
              {el.label}
            </StyledButton>
          ))
        }
    </div>
  )

}

export default Button