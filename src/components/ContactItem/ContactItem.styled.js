import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
  border-bottom: ${p => p.theme.borders.slim} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.none};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const Name = styled.p`
  color: ${p => p.theme.colors.text};
  /* font-weight: ${p => p.theme.fontWeights.semiBold}; */
  margin: 0 ${p => p.theme.space[3]}px;
`;

export const Number = styled.p`
  color: ${p => p.theme.colors.textSecondary};
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;
