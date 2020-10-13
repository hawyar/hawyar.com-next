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

const Contact = styled.span`
  font-weight: 500;
  text-decoration: none;
  padding: 0.8rem;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;
  :hover {
    background-color: rgba(107, 72, 255, 0.2);
  }

  color: ${(props) => props.theme.colors.primary};
`;

const Self = styled(Base)``;
export default Footer;
