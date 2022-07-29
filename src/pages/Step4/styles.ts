import styled from "styled-components";

export const Container = styled.div`
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
  }

  svg {
    font-size: 2.5rem;
    position: absolute;
    margin-left: 2rem;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  label:hover{
    border: 1px solid ${({theme}) => theme.COLORS.PRIMARY};
  }

  label>p {
    margin-left: 3.5rem;
  }
`

export const Buttons = styled.div`
  width: 70rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`