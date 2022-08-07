import styled from "styled-components";
import bgImg from "../../assets/Blob.png"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
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
`

export const Main = styled.main`
  grid-area: content;
  width: 100%;
  padding: 0 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

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