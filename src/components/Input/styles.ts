import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
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
    color: ${({theme}) => theme.COLORS.DARK_600};
  }

  input:focus {
    outline: 1px solid ${({theme}) => theme.COLORS.PRIMARY};
    border-radius: 15px;
    box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
  }

  input::placeholder {
    color: ${({theme}) => theme.COLORS.DARK_500};
  }

  svg {
    position: absolute;
    right: 20px;
    color: ${({theme}) => theme.COLORS.DARK_500};
  }
`