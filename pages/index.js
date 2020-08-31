import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Project from '../components/Project/Project';
import Footer from '../components/Footer';

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
      <section>
        <div>
          <h2 className={utilStyles.textSm}>Hey! I am Hawyar 👋</h2>
          <div style={{ marginTop: '1rem' }}>
            <h2 className={utilStyles.headingLg}>
              I design and develop performant web applications & micro-services
            </h2>
          </div>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.container}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <div key={id}>
              <li className={utilStyles.listItem}>
                <Link href='/blog/[id]' as={`/blog/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
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
