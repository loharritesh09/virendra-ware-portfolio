import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import styles from './Experience.module.css';

export const ExperienceList: React.FC = () => {
  const { experience } = resumeData;

  return (
    <section id="experience" className="section section-alt" aria-labelledby="experience-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Career Track Record</span>
          <h2 id="experience-heading">Practical Experience & Technical Training</h2>
          <p className="section-description">
            Structured hands-on laboratory, project coordination, and technical experience built throughout diploma engineering coursework.
          </p>
        </header>

        <div className={styles.experienceList} role="feed" aria-label="Experience entries">
          {experience.map((item, idx) => (
            <article key={idx} className={styles.experienceItem} tabIndex={0} aria-labelledby={`exp-role-${idx}`}>
              <div className={styles.itemHeader}>
                <div className={styles.titleArea}>
                  <h3 id={`exp-role-${idx}`} className={styles.roleTitle}>
                    {item.role}
                  </h3>
                  <div className={styles.orgMeta}>
                    <span className={styles.orgName}>{item.organization}</span>
                    <span className={styles.dotSeparator} aria-hidden="true">•</span>
                    <span className={styles.location}>
                      <MapPin size={14} aria-hidden="true" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className={styles.metaArea}>
                  <span className={styles.periodBadge}>
                    <Calendar size={14} aria-hidden="true" />
                    {item.period}
                  </span>
                  <span className={styles.typeBadge}>
                    <Briefcase size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    {item.type}
                  </span>
                </div>
              </div>

              <ul className={styles.bulletList} aria-label="Key responsibilities and achievements">
                {item.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className={styles.bulletItem}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
