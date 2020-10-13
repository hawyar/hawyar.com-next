import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Project from '../components/Project/Project';
import Footer from '../components/Footer';
import { SecondaryHeader, Base } from '../styles/_index';
import styled from 'styled-components';
import Blog from '../components/Blog/Blog';

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
        <MainHeader size='lg' as='h1'>
          Hi I'm Hawyar. I enjoy developing performant Jamstack applications
        </MainHeader>
      </div>

      <Content>
        <Blog posts={allPostsData} />
        <Project />
      </Content>
      <footer>
        <Footer />
      </footer>
    </Layout>
  );
}

const MainHeader = styled(Base)`
  font-weight: 400;
  letter-spacing: -1.3px;
`;

const Content = styled.div`
  padding-top: 1rem;
`;

const SectionHeader = styled(Base)`
  font-weight: 500;
  letter-spacing: -0.8px;
`;

const PostHeader = styled(Base)`
  font-weight: 500;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
  color: ${(props) => props.theme.colors.primary};
`;
