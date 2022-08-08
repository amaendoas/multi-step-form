import styled from "styled-components";

export const Container = styled.div<{finished: boolean}>`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({theme}) => theme.COLORS.DARK_600};
  
  svg {
    font-size: 10px;
    color: ${({theme, finished}) => finished ? theme.COLORS.GREEN : theme.COLORS.ORANGE}
  }
`