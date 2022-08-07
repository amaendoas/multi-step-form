import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 9rem;
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({theme}) => theme.COLORS.PRIMARY};

  a {
    color: ${({theme}) => theme.COLORS.PRIMARY};
    transition: filter 0.3s;
    font-weight: 700;
  }

  a:hover {
    filter: brightness(0.5);
  }
`