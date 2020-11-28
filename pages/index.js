import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Project from '../components/Project';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Blog from '../components/Blog';
import { request } from '../lib/blog';
import { gql } from 'graphql-request';
import Nav from '../components/Nav';
import Image from 'next/image';
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
export default function Home({ data }) {
  const posts = data.posts || [];
  return (
    <Layout home>
      <div>
        <Nav />
      </div>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap'
          rel='stylesheet'
        ></link>

        <title>{siteTitle}</title>
      </Head>
      {/* <Image src='/profile.png' alt='Hawyar Farooq' width={160} height={160} /> */}

      <div>
        <Header>
          Software Developer from beautiful Kurdistan designing and developing
          for the web.
        </Header>
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

const Header = styled.h1`
  font-weight: 500;
  letter-spacing: -1.3px;
  line-height: 1.3;
  margin-bottom: 1.5rem;
`;
