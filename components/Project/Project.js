import { Base } from '../../styles/_index';
import styled from 'styled-components';
const projects = [
  {
    id: 1,
    name: "Manchester University's Open Source Project",
    link: 'https://muopensource.netlify.app/',
    description:
      "Created and actively maintaining Manchester University's open source project.",
  },
  {
    id: 2,
    name: 'gobucky - A CLI for Google Cloud Storage',
    link: 'https://github.com/muopensource/gcloud-explore',
    description:
      'A service layer running on top of Google Cloud Platform which provides a set of chainable API methods to create a pipe for data processing.',
  },
  {
    id: 3,
    name: 'GraphCMS Blog Starter',
    link: 'https://gatsby-graphcms.netlify.app/',
    description:
      'A Gatsby Blog powered by GraphCMS and deployed to Netlify with some additional featurs including Caching, Image Optimization, Dark Mode, RSS Feed, and more.',
  },
];

const Project = () => {
  return (
    <div
      css={`
        margin-top: 6rem;
      `}
    >
      <SectionHeader size='xs' as='h3'>
        Projects
      </SectionHeader>
      <div>
        {projects.map((el) => {
          return (
            <div
              key={el.id}
              css={`
                margin: 2rem 0;
                list-style: none;
              `}
            >
              <a href={el.link} style={{ textDecoration: `none` }}>
                <PostHeader as='h1' size='sm'>
                  {el.name}
                </PostHeader>
              </a>
              <Info
                a='p'
                size='xs'
                css={`
                  margin-top: 1rem;
                  color: rgba(0, 0, 0, 0.8);

                  font-weight: 500;
                `}
              >
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

const SectionHeader = styled.h1`
  font-weight: 500;
  letter-spacing: -0.8px;
`;

const PostHeader = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.4em;
  line-height: 1.2;
  :hover {
    text-decoration: underline;
  }
  margin: 0;
  padding: 0;
`;

const Info = styled(Base)`
  padding: 0;
  margin: 0;
  line-height: 1.3;
  font-size: 1.1rem;
`;
export default Project;
