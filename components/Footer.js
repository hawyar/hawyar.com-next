import utilStyles from '../styles/utils.module.scss';
const Footer = () => {
  return (
    <div className={`${utilStyles.flexContainer}`}>
      <span className={utilStyles.textSm}>
        {' '}
        {new Date().getFullYear()}, Hawyar F.
      </span>
      <div>
        <a href='https://github.com/hawyar' className={utilStyles.textSm}>
          on GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;
