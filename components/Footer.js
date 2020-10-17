import styled from 'styled-components';
import { Base } from '../styles/_index';

// i might as well... lol
const email = process.env.PERSONAL_EMAIL || `hawyarfa@gmail.com`;

const Footer = () => {
  return (
    <Wrapper>
      <Self as='span' size='base'>
        Hawyar F.
      </Self>
      <Contact as='a' size='base' href={`mailto:${email}`}>
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
  background-color: rgba(107, 72, 255, 0.1);

  :hover {
    background-color: rgba(107, 72, 255, 0.19);
  }

  color: ${(props) => props.theme.colors.primary};
`;

const Self = styled.p`
  color: ${(props) => props.theme.colors.dark};
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.1em;
  line-height: 1.2;
  :hover {
    text-decoration: underline;
  }
  margin: 0;
  padding: 0;
  letter-spacing: -0.7px;
`;
export default Footer;
