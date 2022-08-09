import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.DARK_800};
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_300};
  box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
  height: 10rem;
  width: 25rem;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 2.5rem;
  position: relative;

  span {
    position: absolute;
    left: 20px;
  }

  input {
    position: absolute;
    left: 20px;
    display: none;
  }

  input:checked + label {
    border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
    box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
  }

  input:checked + label>span>svg {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

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
    
    span>svg {
     color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }
  
  :hover {
    border: 1px solid ${({theme}) => theme.COLORS.PRIMARY};
    box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);

  }

  @media (max-width: 780px) {
    margin-bottom: 1rem;
    height: 9rem;
    width: 15rem;

    span {
    position: absolute;
    left: 6px;
    }
  }
`