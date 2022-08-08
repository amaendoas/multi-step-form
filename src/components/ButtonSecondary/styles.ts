import styled from "styled-components";

export const Container = styled.button`
  padding: 1rem 2rem;
  border-radius: 56px;
  border: none;
  background-color: ${({theme}) => theme.COLORS.SECONDARY};
  color: ${({theme}) => theme.COLORS.PRIMARY};
  font-weight: 700;
`