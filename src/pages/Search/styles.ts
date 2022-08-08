import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
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