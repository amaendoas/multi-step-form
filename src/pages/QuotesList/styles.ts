import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  animation: load 1s 300ms backwards;
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

  @media (max-width: 650px) {
    padding: 0 2rem;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }
`

export const Empty = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.COLORS.DARK_600};

  p {
    margin-bottom: 15px;
  }
`