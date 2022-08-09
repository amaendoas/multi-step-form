import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  h2 {
    line-height: 35px;
    font-size: clamp(1.2rem, 1.5rem + 10vw, 2.2rem);
  }

  p {
    line-height: 30px;
    color: ${({theme}) => theme.COLORS.DARK_600}
  }

  @media (max-width: 700px) {
    h2 {
      font-size: 2rem;
      line-height: 30px;
    }

    p {
      font-size: 1.5rem;
      line-height: 20px;
    }
  }
`