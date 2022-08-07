import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem auto 9rem;
  grid-template-areas:
  "header"
  "content"
  "footer";

  .step1, .step2, .step3, .step4 {
    background-color: ${({theme}) => theme.COLORS.PRIMARY};
    color: ${({theme}) => theme.COLORS.LIGHT_300};
  }
`
export const Main = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const  Success = styled.div`
 text-align: center;

 img {
  width: 130px;
  margin-bottom: 2rem;
 }
`