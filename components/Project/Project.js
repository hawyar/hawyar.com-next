import { Base } from '../../styles/_index';
import styled from 'styled-components';
const projects = [
  {
    id: 1,
    name: 'Manchester University Open Source Project',
    link: 'https://github.com/muopensource',
    description:
      "Created and actviely maintaining Manchester University's open source GitHub organiztion",
  },
  {
    id: 2,
    name: 'gobucky - A CLI for Google Cloud Storage',
    link: 'https://github.com/muopensource/gcloud-explore',
    description:
      'A service layer running on top of Google Cloud Platform which provides a set of chainable API methods to create a pipe for data processing',
  },
  {
    id: 3,
    name: 'GraphCMS Blog Starter',
    link: 'https://github.com/hawyar/gatsby-graphcms-starter',
    description:
      'A blazing fast Gatsby Blog powered by GraphCMS and deployed to Netlify with some additional featurs including Caching, Image Optimization, Dark Mode, RSS Feed, and more',
  },
];

const Project = () => {
  return (
    <div>
      <SectionHeader size='xs' as='h3'>
        Projects
      </SectionHeader>
      <div>
        <Spacer size='2rem' />
        {projects.map((el) => {
          return (
            <div key={el.id}>
              <a href={el.link} style={{ textDecoration: `none` }}>
                <PostHeader as='h1' size='sm'>
                  {el.name}
                </PostHeader>
              </a>
              <Spacer size='1rem' />
              <Info a='p' size='xs'>
                {el.description}
              </Info>
              <Spacer size='3rem' />
            </div>
          );
        })}
      </div>
    </div>
  );
};
const Spacer = styled.div`
  padding-top: ${(props) => (props.size ? props.size : `1rem`)};
`;

const SectionHeader = styled(Base)`
  font-weight: 500;
  letter-spacing: -0.8px;
`;
const PostHeader = styled(Base)`
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }
  color: ${(props) => props.theme.colors.primary};
`;

const Info = styled(Base)`
  padding: 0;
  margin: 0;
  line-height: 1.3;
`;
export default Project;
