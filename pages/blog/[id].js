import Layout from '../../components/Layout/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.scss';
import LeftArrow from '../../public/svg/arrow-left.svg';
import Link from 'next/link';
import styled from 'styled-components';
import { Base } from '../../styles/_index';
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <Title size='lg' as='h1'>
          {postData.data.title}
        </Title>
        <Spacer size='2rem' />

        <MdContent dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Link href='/'>
        <a>
          <LeftArrow />
          <span> Back </span>
        </a>
      </Link>
    </Layout>
  );
}
const MdContent = styled.div`
  h1 {
    font-size: ${(props) => props.theme.fontSize.lg};
  }
  h2 {
    font-size: ${(props) => props.theme.fontSize.md};
  }
  h3 {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
  h4 {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
  h5 {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;

const Title = styled(Base)`
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: -1.5px;
`;
const Spacer = styled.div`
  padding-top: ${(props) => (props.size ? props.size : `1rem`)};
`;

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
