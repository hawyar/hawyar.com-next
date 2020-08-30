import utilStyles from '../../styles/utils.module.scss';

const projects = [
  {
    id: 1,
    name: 'Manchester University Open Source Project',
    link: 'https://github.com/muopensource',
    description:
      "Created and actviely maintaining Manchester University's open source GitHub organiztion",
  },
  {
    id: 2,
    name: 'Google Cloud micro-services',
    link: 'https://github.com/muopensource',
    description:
      'A service layer running on top of Google Cloud Platform which provides a set of chainable API methods to create a pipe for data processing. ',
  },
  {
    id: 3,
    name: 'GraphCMS Blog Starter',
    link: 'https://github.com/muopensource',
    description:
      'A blazing fast Gatsby Blog powered by GraphCMS and deployed to Netlify with some additional featurs including Caching, Image Optimization, Dark Mode, RSS Feed, and more',
  },
];

const Project = () => {
  return (
    <div>
      <h2 className={utilStyles.headingLg}>Recent projects</h2>
      <div className={utilStyles.flexContainer}>
        {projects.map((el) => {
          return (
            <div key={el.id} className={utilStyles.bottomMargin}>
              <a href={el.link}>
                <h2 className={utilStyles.headingMd}>{el.name}</h2>
              </a>
              <h4 className={`${utilStyles.textSm} ${utilStyles.topMargin}`}>
                {el.description}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
