import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
export default function Posts() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Blog</title>
        </Head>
        <h1>Blog</h1>
        <h2>
          <Link href='/'>
            <a>Back to home</a>
          </Link>
        </h2>
      </div>
    </Layout>
  );
}
