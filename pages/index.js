import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Project from '../components/Project/Project';
import Footer from '../components/Footer';
import { SecondaryHeader, Base } from '../styles/_index';
import styled from 'styled-components';

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
          Hi I'm Hawyar. I enjoy creating software that helps and enables others
        </MainHeader>
      </div>

      <section className={`${utilStyles.container}`}>
        <SectionHeader size='xs' as='h3'>
          Writings
        </SectionHeader>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <div key={id}>
              <li className={utilStyles.listItem}>
                <Link href='/blog/[id]' as={`/blog/${id}`}>
                  <a style={{ textDecoration: `none` }}>
                    <PostHeader as='h1' size='sm'>
                      {title}
                    </PostHeader>
                  </a>
                </Link>
                <Spacer />
                <span className={`${utilStyles.lightText} `}>{date}</span>
              </li>
            </div>
          ))}
        </ul>
      </section>
      <section>
        <div className={utilStyles.container}>
          <Project />
        </div>
      </section>
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

const SectionHeader = styled(Base)`
  font-weight: 500;
  letter-spacing: -0.8px;
`;

const PostHeader = styled(Base)`
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }
  color: ${(props) => props.theme.colors.primary};
`;

const Spacer = styled.div`
  padding-top: 1rem;
`;
