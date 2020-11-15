import styled from 'styled-components';
import Link from 'next/link';

const Blog = ({ posts }) => {
  return (
    <div
      css={`
        margin-top: 6rem;
      `}
    >
      <SectionHeader>Writings</SectionHeader>
      <div>
        {posts.map(({ id, title, date, slug }) => {
          return (
            <div key={id}>
              <li
                css={`
                  margin: 2rem 0;
                  list-style: none;
                  width: 85%;
                `}
              >
                <Link href={`/blog/${slug}`} passHref>
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

const SectionHeader = styled.h1`
  font-weight: 500;
  letter-spacing: -0.8px;
  font-size: 1.2em;
`;
const PostHeader = styled.h1`
  color: ${(props) => props.theme.colors.dark};
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: -0.7px;
  font-size: 1.4em;
  line-height: 1.2;
  transition: color 0.1s ease-in-out;
  :hover {
    color: ${(props) => props.theme.colors.primary};
  }
  margin: 0;
  padding: 0;
`;

export default Blog;
