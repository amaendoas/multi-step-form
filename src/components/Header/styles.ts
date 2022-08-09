import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8rem;

  @media (max-width: 500px) {
    padding: 0rem 2.5rem;

    img {
      width: 12rem;
    }
  }
`