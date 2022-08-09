import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: clamp(2rem, 3rem + 10vw, 5rem);
  box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
  border: 1px solid ${({theme}) => theme.COLORS.LIGHT_300};
  border-radius: 15px;
  margin-bottom: 2rem;
  position: relative;

  input {
    padding: 0 2.5rem;
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 15px;
    color: ${({theme}) => theme.COLORS.DARK_600};
  }

  input:focus, input:hover {
    outline: 1px solid ${({theme}) => theme.COLORS.PRIMARY};
    border-radius: 15px;
    box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
  }

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;   
  }
  
  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
  
  }

  input:focus + svg {
    color: ${({theme}) => theme.COLORS.PRIMARY};
  }

  input:hover + svg {
    color: ${({theme}) => theme.COLORS.PRIMARY};
  }

  input::placeholder {
    color: ${({theme}) => theme.COLORS.DARK_500};
  }

  svg {
    position: absolute;
    right: 20px;
    color: ${({theme}) => theme.COLORS.DARK_500};
  }

  @media (max-width: 700px) {
    margin-bottom: 1.4rem;

    input::placeholder {
    font-size: 1.5rem;
  }
  }
`