import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Empty = styled.div`
  position: absolute;
`
export const PopUp = styled.div`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  padding: 3rem;
  border: 1px solid ${({theme}) => theme.COLORS.LIGHT_300};
  box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);
  border-radius: 34px;
  height: 45rem;
  width: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;

  .close {
    position: absolute;
    top: 30px;
    right: 30px;
    background: transparent;
    border: none;
    font-size: 3rem;
    color: ${({theme}) => theme.COLORS.PRIMARY};
  }

  img {
    width: 12rem;
  }

  h2 {
    font-size: 2.2rem;
  }

  p {
    font-size: 1.6rem;
    color: ${({theme}) => theme.COLORS.DARK_600};
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
`