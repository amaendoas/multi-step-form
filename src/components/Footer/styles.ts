import styled from "styled-components";

export const Container = styled.footer`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${({theme}) => theme.COLORS.PRIMARY};
  margin: 3rem 0 4rem 0;

  a {
    color: ${({theme}) => theme.COLORS.PRIMARY};
    transition: filter 0.3s;
    font-weight: 700;
  }

  a:hover {
    filter: brightness(0.5);
  }
`