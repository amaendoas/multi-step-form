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

export const  Budgets = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  label>span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  input:checked + label>span {
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12.35' cy='12.35' r='12.35' fill='%238752F3'/%3E%3Ccircle cx='12.3504' cy='12.3504' r='4.85233' fill='white'/%3E%3C/svg%3E%0A");
  }

  svg {
    font-size: 2.5rem;
    position: absolute;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  label p {
    margin-left: 3.5rem;
  }
`
export const Buttons = styled.div`
  width: 70rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`