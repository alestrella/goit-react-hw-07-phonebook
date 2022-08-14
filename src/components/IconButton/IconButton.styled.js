import styled from 'styled-components';

export const ButtonStyled = styled.button`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.accent};
  background-color: transparent;
  border: ${p => p.theme.borders.none};

  :hover,
  :focus {
    color: ${p => p.theme.colors.hover};
  }
`;
