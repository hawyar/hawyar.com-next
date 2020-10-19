import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import { getSortedPostsData } from '../lib/posts';
import Project from '../components/Project/Project';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Blog from '../components/Blog';

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
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
        <title>{siteTitle}</title>
      </Head>
      <div>
        <MainHeader>
          Hi I'm Hawyar. I enjoy design and developing software - often I write
          about it here.
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
  font-family: 'Inter', sans-serif;
  margin-bottom: 1.5em;
`;
