import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 1rem + 10vw, 3rem);
  margin-bottom: clamp(1rem, 1rem + 10vw, 3rem);
`

export const Bar = styled.div`
  width: 120px;
  height: 6px;
  border-radius: 40px;
  background-color: ${({theme}) => theme.COLORS.LIGHT_300};

  @media (max-width: 800px) {
    width: 60px;
    height: 6px;
  }
`

export const Steps = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Step = styled.div`
  background-color: ${({theme}) => theme.COLORS.LIGHT_300};
  color: ${({theme}) => theme.COLORS.DARK_600};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 700px) {
    height: 25px;
    width: 25px;
  }
`

export const Divider = styled.div`
  height: 0;
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.LIGHT_400};
`