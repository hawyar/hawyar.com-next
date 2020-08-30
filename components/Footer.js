import utilStyles from '../styles/utils.module.scss';
const Footer = () => {
  return (
    <div>
      <span className={utilStyles.textSm}>
        {' '}
        © {new Date().getFullYear()}, Hawyar F.
      </span>
    </div>
  );
};

export default Footer;
