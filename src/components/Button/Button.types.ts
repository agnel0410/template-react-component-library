type Element = {
    label:string
  }
  
  export interface ButtonProps {
      content: {
          backgroundColor?: string,
          color?: string,
          elements:Element[],
          size?: 'small' | 'medium' | 'large',
          fontFamily?:string;
      },
      addMessage: (data:any) => void
  }

  export interface StyledButtonProps{
    backgroundColor?: string,
    size?: 'small' | 'medium' | 'large',
    fontFamily?:string
  }