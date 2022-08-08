import styled from "styled-components";

export const Container = styled.div`

a {
    display: flex;
    font-weight: 700;
    gap: 8px;
    align-items: center;
    color: ${({theme}) => theme.COLORS.PRIMARY};
  }
`