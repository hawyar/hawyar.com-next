import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <Self>Hawyar F.</Self>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Self = styled.a`
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
