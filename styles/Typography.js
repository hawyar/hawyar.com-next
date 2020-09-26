import styled from 'styled-components';
export const Base = styled.p`
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: ${({ size, theme }) => {
    switch (size) {
      case 'xs':
        return theme.fontSize.xs;
      case 'sm':
        return theme.fontSize.sm;
      case 'md':
        return theme.fontSize.md;
      case 'lg':
        return theme.fontSize.lg;
      case 'xl':
        return theme.fontSize.xl;
      default:
        return theme.fontSize.base;
    }
  }};
  padding: 0;
  margin: 0;
  letter-spacing: ${({ size }) => {
    switch (size) {
      case 'xs':
        return `-.4px`;
      case 'sm':
        return `-.8px`;
      case 'md':
        return `-1px`;
      case 'lg':
        return `-.1.2px`;
      case 'xl':
        return `-.1.2px`;
      default:
        return `inherit`;
    }
  }};
`;

export const SectionHeader = styled(Base)`
  font-weight: 400;
  font-size: 1.563em;
  letter-spacing: -1.1px;
`;
export const PrimaryHeader = styled(Base)`
  margin: 2rem 0 4rem 0;
  font-size: 1.563em;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: -1.5px;
`;

export const PostHeader = styled.h1`
  text-decoration: none;

  margin: 2rem 0 4rem 0;
  font-size: 1.953em;
  line-height: 1.3;
  font-weight: 500;
  letter-spacing: -1.5px;
  color: ${(props) => props.theme.colors.primary};
`;
