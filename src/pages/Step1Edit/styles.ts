import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;

  .step1 {
    background-color: ${({theme}) => theme.COLORS.PRIMARY};
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }

  @media (max-width: 700px) {
    width: 100vw;
  }
`

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`