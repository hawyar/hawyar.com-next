import { Base } from '../../styles/_index';
import styled from 'styled-components';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    name: 'Manchester University Open Source Project',
    link: 'https://muopensource.netlify.app/',
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
    link: 'https://gatsby-graphcms.netlify.app/',
    description:
      'A blazing fast Gatsby Blog powered by GraphCMS and deployed to Netlify with some additional featurs including Caching, Image Optimization, Dark Mode, RSS Feed, and more',
  },
];
const Blog = ({ posts }) => {
  return (
    <div
      css={`
        margin-top: 2rem;
      `}
    >
      <SectionHeader size='xs' as='h3'>
        Blog
      </SectionHeader>
      <div>
        {posts.map(({ id, title, date }) => {
          return (
            <div key={id}>
              <li
                css={`
                  margin: 2rem 0;
                  list-style: none;
                `}
              >
                <Link href={`/blog/${id}`} passHref>
                  <PostHeader as='a' size='sm'>
                    {title}
                  </PostHeader>
                </Link>
                <div
                  css={`
                    margin-top: 1rem;
                  `}
                >
                  <span
                    css={`
                      color: rgba(0, 0, 0, 0.8);
                      font-size: 1rem;
                      font-weight: 500;
                    `}
                  >
                    {date}
                  </span>
                </div>
              </li>
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
  cursor: pointer;
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
export default Blog;
