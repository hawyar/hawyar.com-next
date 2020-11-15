import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import Project from '../components/Project/Project';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Blog from '../components/Blog';
import { request } from '../lib/blog';
import { gql } from 'graphql-request';

const AllBlogs = gql`
  query AllBlog {
    posts: allBlogs(orderBy: _createdAt_ASC) {
      title
      _firstPublishedAt
      _status
      category
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
export default function Home({ data }) {
  const posts = data.posts || [];
  return (
    <Layout home>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
        <title>{siteTitle}</title>
      </Head>
      <div>
        <MainHeader>
          Hi I'm Hawyar. I enjoy developing web applications and open source.
        </MainHeader>
      </div>

      <div>
        <Blog posts={posts} />
        <Project />
      </div>
      <footer>
        <Footer />
      </footer>
    </Layout>
  );
}

const MainHeader = styled.h1`
  font-weight: 400;
  letter-spacing: -1.3px;
  line-height: 1.1;
  font-family: 'Inter', sans-serif;
  margin-bottom: 1.5em;
`;
