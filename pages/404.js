import Link from 'next/link';
import utilStyles from '../styles/utils.module.scss';
export default function Custom404() {
  return (
    <div className={utilStyles.center}>
      <h1 className={utilStyles.textSm}>404 - Page Not Found</h1>
      <Link href='/'>
        <a>Back home</a>
      </Link>
    </div>
  );
}
