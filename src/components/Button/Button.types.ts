type Element = {
    label:string
  }
  
  export interface ButtonProps {
      content: {
          elements:Element[]
      };
      addMessage: (data:any) => void;
      backgroundColor?: string;
      size?: 'small' | 'medium' | 'large';
      fontFamily?:string;
  }

  export interface StyledButtonProps{
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    fontFamily?:string;
  }