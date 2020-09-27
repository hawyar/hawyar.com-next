import Head from 'next/head';
import styled from 'styled-components';

const name = `Hawyar`;
export const siteTitle = `Hawyar`;

const Layout = ({ children }, home) => {
  return (
    <TopLine>
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

          <title>{siteTitle}</title>
        </Head>
        <main>{children}</main>
      </Container>
    </TopLine>
  );
};

const TopLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100vw;
  height: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
`;

const Container = styled.div`
  max-width: 35rem;
  padding: 0 1rem;

  margin: 3rem auto 6rem;
`;

export default Layout;
