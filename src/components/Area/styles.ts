import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.DARK_900};
  font-weight: 500;
  gap: 1.5rem;
  box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
  height: 10rem;
  width: 25rem;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 2.5rem;
  position: relative;

  label {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_300};
    cursor: pointer;
    padding-left: 3rem;
    transition: 0.4s;
  }

  .selected {
    border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
  }
`