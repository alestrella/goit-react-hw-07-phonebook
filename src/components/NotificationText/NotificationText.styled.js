import styled from 'styled-components';

export const Message = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.hover};
  text-align: center;
`;
