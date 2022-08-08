import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  height: 100vh;
  animation: load 1s backwards;
  @keyframes load {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 5rem;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border: 1px solid ${({theme}) => theme.COLORS.LIGHT_300};
  box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);
  border-radius: 18px;
  height: auto;
  width: 100%;
`

export const Header =styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Data = styled.div`
  text-align: justify;
  line-height: 25px;

  h4 {
    display: inline;
  }
`