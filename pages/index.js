import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Project from '../components/Project/Project';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Blog from '../components/Blog';
import { up, down, between, only } from 'styled-breakpoints';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <MainHeader>
          Hi I'm Hawyar. I enjoy developing performant web applications on the
          Jamstack
        </MainHeader>
      </div>

      <div>
        <Blog posts={allPostsData} />
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
`;
