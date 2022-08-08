import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;

  .step1, .step2, .step3, .step4 {
    background-color: ${({theme}) => theme.COLORS.PRIMARY};
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
`

export const  Success = styled.div`
 text-align: center;

 img {
  width: 130px;
  margin-bottom: 2rem;
 }
`