import Layout from '../../components/Layout/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.scss';
import LeftArrow from '../../public/svg/arrow-left.svg';
import Link from 'next/link';
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Link href='/'>
        <a className={`${utilStyles.flexTwo} ${utilStyles.pointerEl}`}>
          <LeftArrow />
          <span className={`${utilStyles.textSm} ${utilStyles.leftMargin}`}>
            {' '}
            Back{' '}
          </span>
        </a>
      </Link>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
