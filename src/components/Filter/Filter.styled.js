import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  text-transform: uppercase;
`;

export const Field = styled.input`
  margin-top: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.input};
  border: ${p => p.theme.borders.slim} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};

  :hover,
  :focus {
    border: ${p => p.theme.borders.slim} ${p => p.theme.colors.accent};
  }
`;
