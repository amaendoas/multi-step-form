import styled from "styled-components";

export const Container = styled.button`
  padding: 1rem 2rem;
  border-radius: 56px;
  border: none;
  background-color: ${({theme}) => theme.COLORS.SECONDARY};
  color: ${({theme}) => theme.COLORS.PRIMARY};
  font-weight: 700;

  @media (max-width: 650px) {
    padding: 0.8rem 1.5rem;
    font-size: 1.4rem;
  }
`