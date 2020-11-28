import styled from 'styled-components';

const Nav = () => {
  return (
    <StyledNav>
      <LinkWrapper>
        <a href='https://www.linkedin.com/in/hawyar-farooq-315295160/'>
          LinkedIn
        </a>
        <a href='https://github.com/hawyar'>Github</a>
        <a href='https://dribbble.com/Hawyar'>Dribbble</a>
        <a href='https://videohive.net/user/hawyar/portfolio'>Videohive</a>
      </LinkWrapper>
      <Contact href='mailto:hawyarfa@gmail.com'>Get in touch</Contact>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  justify-content: space-between;
`;
const LinkWrapper = styled.div`
  display: flex;
  a {
    font-size: 0.9rem;

    margin-right: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

const Contact = styled.span`
  font-weight: 500;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  background-color: rgba(107, 72, 255, 0.1);

  :hover {
    background-color: rgba(107, 72, 255, 0.19);
  }

  color: ${(props) => props.theme.colors.primary};
`;

export default Nav;
