import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .step1, .step2, .step3 {
    background-color: ${({theme}) => theme.COLORS.PRIMARY};
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
`

export const Buttons = styled.div`
  width: 70rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`
