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
    link: 'https://github.com/muopensource/gcloud-explore',
    description:
      'A service layer running on top of Google Cloud Platform which provides a set of chainable API methods to create a pipe for data processing',
  },
  {
    id: 3,
    name: 'GraphCMS Blog Starter',
    link: 'https://github.com/hawyar/gatsby-graphcms-starter',
    description:
      'A blazing fast Gatsby Blog powered by GraphCMS and deployed to Netlify with some additional featurs including Caching, Image Optimization, Dark Mode, RSS Feed, and more',
  },
];

const Project = () => {
  return (
    <div>
      <h2 className={utilStyles.headingMd}>Projects</h2>
      <div>
        {projects.map((el) => {
          return (
            <div
              key={el.id}
              className={`${utilStyles.bottomMargin} ${utilStyles.listItem}`}
            >
              <a href={el.link}>
                <h2
                  style={{ marginBottom: `0.6rem` }}
                  className={utilStyles.headingLg}
                >
                  {el.name}
                </h2>
              </a>
              <h4 className={`${utilStyles.textSm}`}>{el.description}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
