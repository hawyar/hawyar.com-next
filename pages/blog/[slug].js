import Layout from '../../components/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { request } from '../../lib/blog';
import { gql } from 'graphql-request';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Image } from 'react-datocms';
import { renderMetaTags } from 'react-datocms';

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={coldarkDark}
        language={language}
        children={value}
      />
    );
  },
};

export default function Post({ data }) {
  const router = useRouter();
  const [blog] = data.blog;

  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout blogPage>
      <Head>
        {renderMetaTags(blog._seoMetaTags)}

        <h1>{data.title}</h1>
      </Head>

      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <div>
          <article>
            <Title size='lg' as='h1'>
              {blog.title}
            </Title>
            <Spacer size='2rem' />

            <Image data={blog.featuredImage.responsiveImage} />

            <div>
              {/* <Category>
                {blog.category.map((el) => (
                  <p key={el.id}>{el.category}</p>
                ))}
              </Category> */}
            </div>
            <MdContent>
              <ReactMarkdown
                children={blog.content}
                className={'mdWrapper'}
                renderers={renderers}
              />
            </MdContent>
          </article>

          <FooterWrapper>
            <Link href='/'>
              <a>
                <div>
                  ←
                  <span style={{ marginLeft: `.4rem`, padding: `0` }}>
                    Back
                  </span>
                </div>
              </a>
            </Link>
            <div>Thanks for reading!</div>
          </FooterWrapper>
        </div>
      )}
    </Layout>
  );
}

const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
  srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

const AllBlogSlug = gql`
  query AllBlogSlug {
    allBlogs {
      slug
    }
  }
`;

const AllBlogs = gql`
  query BlogBySlug($slug: String) {
    blog: allBlogs(filter: { slug: { eq: $slug } }, orderBy: _createdAt_ASC) {
      title
      _firstPublishedAt
      _status
      category {
        id
        category
      }
      content(markdown: false)
      id
      slug
      featuredImage {
        responsiveImage(imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      _seoMetaTags(locale: en) {
        tag
        content
        attributes
      }
      _updatedAt
    }
  }
  ${responsiveImageFragment}
`;

export async function getStaticPaths() {
  const data = await request({ query: AllBlogSlug });
  return {
    paths: data.allBlogs.map((post) => `/blog/${post.slug}`) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await request({
    query: AllBlogs,
    variable: {
      slug: params.slug,
    },
  });

  return {
    props: { data },
  };
}

const MdContent = styled.div`
  .mdWrapper {
    margin-top: 3rem;
    h1 {
      font-weight: 600;
      letter-spacing: -0.8px;
      font-size: ${(props) => props.theme.fontSize.lg};
    }
    h2 {
      margin: 0;
      padding-top: 2rem;
      font-weight: 500;
      letter-spacing: -0.8px;

      font-size: ${(props) => props.theme.fontSize.md};
    }
    h3 {
      margin: 0;
      font-weight: 500;
      padding-top: 2rem;
      font-size: ${(props) => props.theme.fontSize.sm};
    }
    h4,
    h5,
    h6 {
      letter-spacing: -0.9px;
      font-weight: 500;
      margin: 0;
      padding-top: 2rem;
      margin: 0;
      font-size: ${(props) => props.theme.fontSize.xs};
    }

    p {
      font-weight: 400;
      line-height: 1.6;
    }

    a {
      color: ${({ theme }) => theme.colors.link};
      text-decoration: none;
    }

    code,
    pre {
      background-color: #222831;
      color: white;
      padding: 0 2px;
      border-radius: 5px;
    }

    li {
      padding: 0.5rem 0;
    }
  }
`;

const Title = styled.h1`
  line-height: 1.1;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.md};
  letter-spacing: -1.2px;
`;
const Spacer = styled.div`
  padding-top: ${(props) => (props.size ? props.size : `1rem`)};
`;

const Category = styled.div`
  display: flex;
  justify-content: left;
  padding: 10px 0;
  grid-template-columns: 1fr 1fr;

  p {
    font-size: 0.9em;
    color: #6a737d;
    margin-right: 15px;
  }
`;

const FooterWrapper = styled.div`
  margin-top: 4rem;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
  }
`;
