import styled from "styled-components";
import bgImg from "../../assets/Blob.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
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

  img {
    width: 20rem;
  }

  p {
    font-size: 1.6rem;
    color: ${({theme}) => theme.COLORS.DARK_600};
    max-width: 70rem;
    text-align: center;
    line-height: 25px;
  }

`