import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border: 1px solid ${({theme}) => theme.COLORS.LIGHT_300};
  box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);
  border-radius: 18px;
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
  padding: 1rem 2rem;
  border-radius: 56px;
  border: none;
  background-color: ${({theme}) => theme.COLORS.SECONDARY};
  color: ${({theme}) => theme.COLORS.PRIMARY};
  font-weight: 700;
}

`

export const Content = styled.div`

`