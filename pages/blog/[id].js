import Layout from '../../components/Layout/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
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
        <h1 className={utilStyles.headingSuper}>{postData.data.title}</h1>
        <div className={utilStyles.lightText}>{postData.data.date}</div>
        <div className={`${utilStyles.mdContent} ${utilStyles.topMargin}`}>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </article>
      <Link href='/'>
        <a
          className={`${utilStyles.flexRow} ${utilStyles.pointerEl} ${utilStyles.topMargin}`}
        >
          <LeftArrow />
          <span className={`${utilStyles.textSm} ${utilStyles.leftMargin} `}>
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
