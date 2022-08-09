import styled from "styled-components";
import bgImg from "../../assets/background.png"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 10.5rem auto 9rem;
  grid-template-areas:
  "header"
  "content"
  "footer";
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: left bottom;
  background-attachment: fixed;
  position: relative;
`

export const Main = styled.main`
  grid-area: content;
  padding: 2rem 15rem;

  @media (max-width: 1000px) {
    padding: 0;
  }
`