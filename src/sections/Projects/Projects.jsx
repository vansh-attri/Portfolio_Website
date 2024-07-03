import styles from './ProjectsStyles.module.css';
import gurgaon_realtech from '../../assets/gurgaon_realtech.jpg';
import weather from '../../assets/weathericon.png';
import jalhaka from '../../assets/jalhaka.png';
import heroImg from '../../assets/hero-img.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={gurgaon_realtech}
          link="https://www.gurgaonrealtech.com/"
          h3="Gurgaon Realtech"
          p="Real Estate Website"
        />
        <ProjectCard
          src={weather}
          link="https://vansh-attri.github.io/weather-app/"
          h3="Weather"
          p="Weather App"
        />
        <ProjectCard
          src={jalhaka}
          link="https://jalhaka.com/"
          h3="Jalhaka"
          p="Village Website"
        />
        <ProjectCard
          src={heroImg}
          link="#"
          h3="Vansh Attri"
          p="Portfolio Website"
        />
      </div>
    </section>
  );
}

export default Projects;
