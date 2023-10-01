import thumbnail from '/images/thumbnail.png';
import '../styles/projects.scss';

const openLink = (URL: string) => {
  window.open(`${URL}`, '_blank');
};

const projects = [
  {
    title: 'Project - 1',
    thumbnail: thumbnail,
    link: 'https://github.com',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis dolor aliquid a nesciunt provident adipisci soluta modi delectus placeat. Molestiae ipsum enim veritatis maxime mollitia, quasi eius consequatur nihil asperiores.`,
    allTags: {
      tag1: 'JavaScript',
      tag2: 'TypeScript',
      tag3: 'React',
      tag4: 'HTML',
      tag5: 'CSS',
    },
  },
  {
    title: 'Project - 2',
    thumbnail: thumbnail,
    link: 'https://github.com',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis dolor aliquid a nesciunt provident adipisci soluta modi delectus placeat. Molestiae ipsum enim veritatis maxime mollitia, quasi eius consequatur nihil asperiores.`,
    allTags: {
      tag1: 'JavaScript',
      tag2: 'TypeScript',
      tag3: 'React',
      tag4: 'HTML',
      tag5: 'CSS',
    },
  },
];

const Projects = () => {
  return (
    <div className="projects-root-div">
      {projects.map((project) => (
        <div
          className="card"
          key={project.title}
          onClick={() => openLink(project.link)}
        >
          <div className="left-side-card">
            <img src={project.thumbnail} alt={project.title} />
          </div>
          <div className="right-side-card">
            <div className="title-card">
              <h1 className="title-h1-card">{project.title}</h1>
              <svg viewBox="0 0 15 15">
                <path d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" />
              </svg>
            </div>
            <div className="description-card">{project.description}</div>
            <div className="tag-card-list">
              <div className="tag">{project.allTags.tag1}</div>
              <div className="tag">{project.allTags.tag2}</div>
              <div className="tag">{project.allTags.tag3}</div>
              <div className="tag">{project.allTags.tag4}</div>
              <div className="tag">{project.allTags.tag5}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
