import Layout from '../../components/Layout/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.scss';
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

      <FooterWrapper>
        <Link href='/'>
          <a>
            <div>
              ←<span style={{ marginLeft: `.4rem`, padding: `0` }}>Back</span>
            </div>
          </a>
        </Link>
        <div>Suggest a change</div>
      </FooterWrapper>
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

const FooterWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
  }
`;
