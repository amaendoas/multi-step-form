import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  padding: 0 2.5rem;
  box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
  border: 1px solid ${({theme}) => theme.COLORS.LIGHT_300};
  border-radius: 15px;
  margin-bottom: 2rem;

  input {
    height: 100%;
    width: 100%;
    border: none;
    color: ${({theme}) => theme.COLORS.DARK_600};
  }

  input::placeholder {
    color: ${({theme}) => theme.COLORS.DARK_500};
  }

  svg {
    color: ${({theme}) => theme.COLORS.DARK_500};
  }
`