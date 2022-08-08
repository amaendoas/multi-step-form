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
  margin-bottom: 15px;

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
  p {
    color: ${({theme}) => theme.COLORS.DARK_600};
    margin: 5px 0;
    max-height: 2ch;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100rem;
  }

  footer {
    font-size: 1.4rem;
    display: flex;
    gap: 10px;
  }
`