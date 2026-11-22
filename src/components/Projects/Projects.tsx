import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import styles from './Projects.module.css';

export const Projects: React.FC = () => {
  const { projects } = resumeData;

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Practical Implementations</span>
          <h2 id="projects-heading">Projects & Engineering Portfolio</h2>
          <p className="section-description">
            Selected software development implementations emphasizing database normalization, responsive design, and core algorithmic problem solving.
          </p>
        </header>

        <div className={styles.projectGrid} role="list" aria-label="Project portfolio showcase">
          {projects.map((project) => (
            <article
              key={project.id}
              className={styles.projectCard}
              tabIndex={0}
              aria-labelledby={`project-title-${project.id}`}
            >
              <div>
                <div className={styles.cardHeader}>
                  <span className={styles.categoryTag}>{project.category}</span>
                  <h3 id={`project-title-${project.id}`} className={styles.projectTitle}>
                    {project.title}
                  </h3>
                  <p className={styles.projectSubtitle}>{project.subtitle}</p>
                </div>

                <p className={styles.projectSummary}>{project.summary}</p>

                <div className={styles.techPills} aria-label="Technologies used">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className={styles.techPill}>
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className={styles.highlightList} aria-label="Engineering achievements">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className={styles.highlightItem}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardActions}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionLink}
                    aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                  >
                    <Github size={15} aria-hidden="true" />
                    <span>View Repository</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionLink}
                    aria-label={`Open live demonstration of ${project.title} (opens in new tab)`}
                  >
                    <ExternalLink size={15} aria-hidden="true" />
                    <span>Live Demo</span>
                  </a>
                )}

                {!project.liveUrl && !project.githubUrl && (
                  <span className={styles.actionLink} style={{ color: 'var(--color-text-subtle)' }}>
                    <Code2 size={15} aria-hidden="true" />
                    <span>Academic Project Code</span>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
