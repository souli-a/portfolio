import '../styles/Projects.scss';
import listify from '../../public/images/listify.png';
import portfolio from '../../public/images/portfolio.png';
import linux from '../../public/images/linux.png';

const openLink = (URL) => {
  window.open(`${URL}`, '_blank');
};

const Projects = () => {
  return (
    <div className="projects-root-div">
      <div
        className="card"
        onClick={() => openLink('https://github.com/souli-a/todo-app')}
      >
        <div className="left-side-card">
          <img src={listify} />
        </div>
        <div className="right-side-card">
          <div className="title-card">
            <h1 className="title-h1-card">Listify</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
              <path d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" />
            </svg>
          </div>
          <div className="description-card">
            Listify est une application avec un design épuré qui permet de créer
            et gérer des listes de tâches. Avec un design responsive, un mode
            clair et sombre, le suivi de la progression des tâches puis la
            suppression de celle-ci ainsi qu'un système d'inscription et de
            connexion pour chaque utilisateur.
          </div>
          <div className="tag-card-list">
            <div className="tag">React</div>
            <div className="tag">JavaScript</div>
            <div className="tag">styled-components</div>
            <div className="tag">Figma</div>
            <div className="tag">Git</div>
            <div className="tag">GitHub</div>
            <div className="tag">Cypress</div>
            <div className="tag">Express</div>
            <div className="tag">MongoDB</div>
            <div className="tag">Vite</div>
          </div>
        </div>
      </div>
      <div
        className="card"
        onClick={() => openLink('https://github.com/souli-a/portfolio')}
      >
        <div className="left-side-card">
          <img src={portfolio} />
        </div>
        <div className="right-side-card">
          <div className="title-card">
            <h1 className="title-h1-card">Portfolio</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
              <path d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" />
            </svg>
          </div>
          <div className="description-card">
            Site personnel présentant mes projets, les technologies que
            j'utilise et une page pour me contacter.
          </div>
          <div className="tag-card-list">
            <div className="tag">React</div>
            <div className="tag">JavaScript</div>
            <div className="tag">Sass</div>
            <div className="tag">Figma</div>
            <div className="tag">Git</div>
            <div className="tag">GitHub</div>
            <div className="tag">Vite</div>
          </div>
        </div>
      </div>
      <div
        className="card"
        onClick={() => openLink('https://github.com/souli-a/dotfiles')}
      >
        <div className="left-side-card">
          <img src={linux} />
        </div>
        <div className="right-side-card">
          <div className="title-card">
            <h1 className="title-h1-card">Linux</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
              <path d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z" />
            </svg>
          </div>
          <div className="description-card">
            Environnement de bureau personnalisé sous Arch Linux.
          </div>
          <div className="tag-card-list">
            <div className="tag">CSS</div>
            <div className="tag">Linux</div>
            <div className="tag">Bash</div>
            <div className="tag">Zsh</div>
            <div className="tag">Arch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
