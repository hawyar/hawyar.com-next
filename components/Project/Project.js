import styled from 'styled-components';

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
  /*
  list-style: none;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 1rem;  */
`;

const Spacer = styled.div`
  padding-top: ${(props) => (props.size ? props.size : `1rem`)};
`;

const SectionHeader = styled.h1`
  font-weight: 500;
  letter-spacing: -0.8px;
  margin-bottom: 2em;
  font-size: 1.2em;
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
export default Project;

const projects = [
  {
    id: 4,
    name: 'Monster link',
    repo: 'https://github.com/hawyar/monster-link',
    website: 'https://monster-link.vercel.app/',
    description:
      'A collection of curated resourceful links. Designed with simplicity and a unified design system in mind. Powered by Airtable as headless CMS and deployed to vercel.',
  },
  {
    id: 3,
    name: "Manchester University's Open Source",
    repo: 'https://github.com/muopensource/muopensource.org',
    website: 'https://muopensource.netlify.app/',
    description:
      "An open source project for Manchester University's Math & Computer Science department to archive, store, and share resources.",
  },
  {
    id: 2,
    name: 'Google Cloud Explore',
    repo: 'https://github.com/muopensource/gcloud-explore',
    website: `'`,
    description:
      'A service layer running on top of Google Cloud Platform which provides a set of chainable APIs to consume and process and data.',
  },
  {
    id: 1,
    name: 'GraphCMS Blog Starter',
    repo: 'https://github.com/hawyar/gatsby-graphcms-starter',
    website: `https://gatsby-graphcms.netlify.app/`,
    description:
      'A Gatsby Blog powered by GraphCMS and deployed to Netlify with some additional featurs including Caching, Image Optimization, Dark Mode, RSS Feed, and more.',
  },
];
