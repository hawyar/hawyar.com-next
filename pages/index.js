import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Project from '../components/Project';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Blog from '../components/Blog';
import { request } from '../lib/blog';
import { gql } from 'graphql-request';
import Nav from '../components/Nav';

export default function Home({ data }) {
  const posts = data.posts || [];
  return (
    <Layout home>
      <div>
        {' '}
        <Nav />{' '}
      </div>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap'
          rel='stylesheet'
        ></link>

        <title>{siteTitle}</title>
      </Head>
      <div>
        <Header>Hi I'm Hawyar</Header>
        <Secondary>
          Software Developer from beautiful Kurdistan designing and developing
          for the web.
        </Secondary>
      </div>

      <div>
        <Project />
        <Blog posts={posts} />
      </div>

      <Footer />
    </Layout>
  );
}

const Header = styled.h1`
  font-weight: 600;
  letter-spacing: -1.3px;
  line-height: 1.3;
  margin-bottom: 1.5rem;
`;

const Secondary = styled(Header)`
  font-weight: 400;
  letter-spacing: -0.8px;
  line-height: 1.3;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
`;

const AllBlogs = gql`
  query AllBlog {
    posts: allBlogs(orderBy: _createdAt_ASC) {
      title
      _firstPublishedAt
      _status
      category {
        id
        category
      }
      content(markdown: true)
      id
      slug
      _seoMetaTags(locale: en) {
        tag
        content
        attributes
      }
      _updatedAt
    }
  }
`;

export async function getStaticProps() {
  const data = await request({
    query: AllBlogs,
  });
  return {
    props: { data },
  };
}
