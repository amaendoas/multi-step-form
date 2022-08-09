import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 15rem;

  @media (max-width: 1000px) {
    padding: 0 1rem;
  }
`
export const Page = styled.div`
  width: clamp(30rem, 30rem + 50vw, 70rem);
  height: clamp(26rem, 26rem + 50vw, 55rem);
  margin: 0 auto;
`
export const Title = styled.div`
  text-align: center;
  margin: 2rem 0 4rem 0;

  h1 {
    line-height: 46px;
    color: ${({theme}) => theme.COLORS.DARK_800};
    margin-bottom: 12px;
  }

  p {
    line-height: 30px;
    color: ${({theme}) => theme.COLORS.DARK_600};
    padding: 0 5rem;
  }
`
export const Step = styled.div`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  padding: 4rem 7rem;
  border: 1px solid ${({theme}) => theme.COLORS.LIGHT_300};
  box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);
  border-radius: 34px;
  height: 90%;
  width: 100%;
`

export const Content = styled.div`
  animation: load 500ms 400ms backwards;
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