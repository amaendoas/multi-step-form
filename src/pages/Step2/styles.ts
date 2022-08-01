import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div>span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    background-color: ${({ theme }) => theme.COLORS.BG_PRIMARY};
    border-radius: 50%;
    position: absolute;

    svg {
      font-size: 3.5rem;
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    } 
  }

  label>p {
    margin-left: 6.5rem;
  }
`

export const  Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export const Buttons = styled.div`
  width: 70rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`