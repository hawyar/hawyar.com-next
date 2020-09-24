import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
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
          <h2 className={utilStyles.headingMd}>
            Hey! I am Hawyar <span style={{ marginLeft: `.5rem` }}>👋</span>
          </h2>

          <div style={{ marginTop: '1rem' }}>
            <h2 className={utilStyles.headingSuper}>
              I design and develop performant web applications & micro-services
            </h2>
          </div>
        </div>
      </section>
      <section className={`${utilStyles.container}`}>
        <h2 className={utilStyles.headingMd}>Writings</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <div key={id}>
              <li className={utilStyles.listItem}>
                <Link href='/blog/[id]' as={`/blog/${id}`}>
                  <a>
                    {' '}
                    <h2 className={utilStyles.headingLg}>{title}</h2>
                  </a>
                </Link>

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
