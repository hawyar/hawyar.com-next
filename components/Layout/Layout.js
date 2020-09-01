import styles from '../Layout/layout.module.css';
import utilStyles from '../../styles/utils.module.scss';
import Link from 'next/link';
import Head from 'next/head';
const name = `Hawyar`;
export const siteTitle = `Hawyar`;

const Layout = ({ children }, home) => {
  return (
    <div className={styles.topLine}>
      <div className={`${styles.container}`}>
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
        <header className={styles.header}>
          {home ? (
            <div>
              {/* <img
              src='/images/profile.png'
              className={`${styles.headerHomeImage}`}
              alt={name}
            /> */}
            </div>
          ) : (
            <div>
              <Link href='/'>
                <a>
                  <div className={`${styles.headerImageWrapper}`}>
                    <img
                      src='/images/profile.png'
                      className={`${styles.headerImage}`}
                      alt={name}
                    />
                  </div>
                </a>
                <h2 className={utilStyles.headingLg}>
                  <Link href='/'>
                    <a className={utilStyles.colorInherit}>{name}</a>
                  </Link>
                </h2>
              </Link>
            </div>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href='/'>
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
