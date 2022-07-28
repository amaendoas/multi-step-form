import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Page = styled.div`
  width: 70rem;
  height: 60rem;
  text-align: center;
`
export const Title = styled.div`

  margin-bottom: 4rem;

  h1 {
    line-height: 46px;
    color: ${({theme}) => theme.COLORS.DARK_900};
    margin-bottom: 12px;
  }

  p {
    line-height: 30px;
    color: ${({theme}) => theme.COLORS.DARK_600};
    padding: 0 5rem;
  }
`
export const Step = styled.div`
  border: 1px solid #EFF0F7;
  box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);
  border-radius: 34px;
  height: 80%;
  width: 100%;
`