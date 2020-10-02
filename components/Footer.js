import styled from 'styled-components';
import { Base } from '../styles/_index';

const email = `hawyarfa@gmail.com`;
const Footer = () => {
  return (
    <Wrapper>
      <Self as='span' size='base'>
        {new Date().getFullYear()}, Hawyar F.
      </Self>
      <Contact as='a' size='base' href={`mailto:${email}@gmail.com`}>
        Get in touch
      </Contact>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Contact = styled(Base)`
  font-weight: 500;

  color: ${(props) => props.theme.colors.primary};
`;

const Self = styled(Base)``;
export default Footer;
