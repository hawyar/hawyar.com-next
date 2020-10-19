import Head from 'next/head';
import styled from 'styled-components';

export const siteTitle = `Hawyar`;

const Layout = ({ children, blogPage }) => {
  return (
    <TopLine custom={blogPage && `none`}>
      <Container>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <meta name='description' content="Hawyar's personal website" />
          <meta
            property='og:image'
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name='og:title' content={siteTitle} />
          <meta name='twitter:card' content='summary_large_image' />

          <title>{siteTitle}hello</title>
        </Head>
        <main>{children}</main>
      </Container>
    </TopLine>
  );
};

const Container = styled.div`
  margin: 4rem auto 1rem;
  max-width: 520px;
  @media only screen and (max-width: 820px) {
    max-width: calc(100vw - 12rem);
  }

  @media only screen and (max-width: 640px) {
    max-width: calc(100vw - 4rem);
  }
`;

const TopLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 1rem;
  min-width: 100vw;
  background-color: ${(props) =>
    props.custom === `none`
      ? props.theme.colors.dark
      : props.theme.colors.primary};
`;

export default Layout;
