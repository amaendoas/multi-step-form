import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  h2 {
    line-height: 35px;
  }

  p {
    line-height: 30px;
    color: ${({theme}) => theme.COLORS.DARK_600}
  }
`