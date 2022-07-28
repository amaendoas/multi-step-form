import styled from "styled-components";

export const Container = styled.button`
  padding: 2rem 4rem;
  border-radius: 56px;
  border: none;
  background-color: ${({theme}) => theme.COLORS.PRIMARY};
  color: ${({theme}) => theme.COLORS.WHITE};
  font-weight: 700;
  box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
`