import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.DARK_900};
  font-weight: 500;
  gap: 1.5rem;
  box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
  height: 90px;
  width: 230px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_300};
  cursor: pointer;
  margin-bottom: 2.5rem;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    background-color: ${({ theme }) => theme.COLORS.BG_PRIMARY};
    border-radius: 50%;

    svg {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }
`