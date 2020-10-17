import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Project from '../components/Project/Project';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Blog from '../components/Blog';
import { up, down, between, only } from 'styled-breakpoints';
const email = process.env.PERSONAL_EMAIL || `hawyarfa@gmail.com`;

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
          Hi I'm Hawyar. I enjoy developing web applications and often I write
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
  font-family: 'Inter';
  margin-bottom: 1.5em;
`;

const Contact = styled.a`
  font-weight: 500;
  text-decoration: none;
  padding: 0.8rem;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;
  background-color: rgba(107, 72, 255, 0.1);

  :hover {
    background-color: rgba(107, 72, 255, 0.19);
  }

  color: ${(props) => props.theme.colors.primary};
`;
