import styled from 'styled-components';
import { up } from 'styled-breakpoints';
const Nav = () => {
  return (
    <StyledNav>
      <LinkWrapper>
        <Links href='https://www.linkedin.com/in/hawyar-farooq-315295160/'>
          LinkedIn
        </Links>
        <Links href='https://github.com/hawyar'>Github</Links>
        <Links href='https://dribbble.com/Hawyar'>Dribbble</Links>
      </LinkWrapper>
      <Contact href='mailto:hawyarfa@gmail.com'>Get in touch</Contact>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 4rem;

  ${up('sm')} {
    flex-direction: row;
  }
`;
const LinkWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  ${up('sm')} {
    margin-bottom: 0;
    flex-direction: row;
  }
`;

const Links = styled.a`
  font-size: 0.9rem;
  font-weight: 500;
  padding: 12px;
  border-radius: 5px;
  margin-right: 1rem;
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    background-color: rgba(107, 72, 255, 0.19);
  }

  color: ${(props) => props.theme.colors.primary};
`;

const Contact = styled.span`
  font-weight: 500;
  text-decoration: none;
  padding: 12px 14px;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  background-color: rgba(107, 72, 255, 1);
  color: ${(props) => props.theme.colors.light};
`;

export default Nav;
