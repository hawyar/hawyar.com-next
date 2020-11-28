import styled from 'styled-components';
import { projects } from '../lib/projects';
const Project = () => {
  return (
    <div
      css={`
        margin-top: 6rem;
      `}
    >
      <SectionHeader>Projects</SectionHeader>
      <div>
        {projects.map((el) => {
          return (
            <Card key={el.id}>
              <a href={el.repo} style={{ textDecoration: `none` }}>
                <PostHeader as='h1' size='sm'>
                  {el.name}
                </PostHeader>
              </a>
              <Info>{el.description}</Info>
              {el.website ? (
                <Website href={el?.website}>View live website →</Website>
              ) : null}
              <Spacer size='3rem' />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const Card = styled.div`
  max-width: 420px;
`;

const Spacer = styled.div`
  padding-top: ${(props) => (props.size ? props.size : `1rem`)};
`;

const SectionHeader = styled.h1`
  font-weight: 400;
  letter-spacing: -0.8px;
  margin-bottom: 2em;
  font-size: 1.2em;
`;

const PostHeader = styled.h1`
  color: ${(props) => props.theme.colors.dark};
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.4em;
  line-height: 1.2;
  transition: color 0.1s ease-in-out;
  :hover {
    color: ${(props) => props.theme.colors.primary};
  }
  margin: 0;
  padding: 0;
  letter-spacing: -0.7px;
`;

const Info = styled.p`
  padding: 0;
  margin-top: 1rem;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  line-height: 1.3;
  font-size: 1.1rem;
  letter-spacing: -0.5px;
`;

const Website = styled.a`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
`;
export default Project;
