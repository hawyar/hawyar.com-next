import styled from 'styled-components';

const Nav = () => {
  return (
    <Wrapper>
      <a href='https://dribbble.com/Hawyar'>Dribbble</a>
      <a href='https://github.com/hawyar'>Github</a>
      <a href='https://www.linkedin.com/in/hawyar-farooq-315295160/'>
        LinkedIn
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  margin-bottom: 4rem;
  display: flex;
  a {
    font-size: 0.9rem;

    margin-right: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

export default Nav;
