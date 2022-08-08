import styled from "styled-components";

export const Container = styled.button`
  width: fit-content;
  padding: 1.5rem 2.5rem;
  border-radius: 56px;
  border: 1px solid ${({theme}) => theme.COLORS.PRIMARY};
  background-color: ${({theme}) => theme.COLORS.WHITE};
  color: ${({theme}) => theme.COLORS.PRIMARY};
  font-weight: 700;
`