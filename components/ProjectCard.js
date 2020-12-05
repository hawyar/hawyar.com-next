import { up } from 'styled-breakpoints';
import styled from 'styled-components';
const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <div>
      <Card>
        <Info>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          {project.website ? (
            <WebsiteLink href={project.website}>View website</WebsiteLink>
          ) : (
            ''
          )}
          <SoureCode href={project.repo} alone={project.website ? true : false}>
            Source Code
          </SoureCode>
        </Info>
      </Card>
    </div>
  );
};

const Card = styled.div`
  display: flex;
  border-radius: 5px;
  width: 100%;

  box-sizing: border-box;
  flex-direction: column-reverse;

  ${up('sm')} {
    flex-direction: row;
  }
`;

const Info = styled.div`
  width: 75%;

  h3 {
    font-weight: 500;
  }

  p {
    margin-bottom: 2rem;
    font-size: 0.9rem;
  }
`;

const WebsiteLink = styled.a`
  text-decoration: none;
  background: ${({ theme }) => theme.colors.primary};
  padding: 12px 14px;
  font-size: 0.9rem;
  border-radius: 5px;
  color: white;
  font-weight: 600;
`;

const SoureCode = styled.a`
  color: gray;
  font-size: 0.9rem;
  text-decoration: none;
  margin-left: ${({ alone }) => (alone === true ? '1rem ' : '')};
`;

export default ProjectCard;
