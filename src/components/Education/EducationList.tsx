import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import styles from './Education.module.css';

export const EducationList: React.FC = () => {
  const { education } = resumeData;

  return (
    <section id="education" className="section" aria-labelledby="education-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Academic Background</span>
          <h2 id="education-heading">Education & Qualifications</h2>
          <p className="section-description">
            Verified academic milestones from polytechnic engineering diploma to secondary schooling under Maharashtra State Board standards.
          </p>
        </header>

        <div className={styles.educationGrid} role="list" aria-label="Education degrees">
          {education.map((item, idx) => (
            <div
              key={idx}
              className={`${styles.educationCard} ${idx === 0 ? styles.featuredCard : ''}`}
              role="listitem"
              tabIndex={0}
              aria-label={`${item.degree} from ${item.institution}`}
            >
              <div className={styles.cardTop}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className={styles.degreeBadge}>
                    {idx === 0 ? 'Diploma' : idx === 1 ? 'HSC (12th)' : 'SSC (10th)'}
                  </span>
                  {idx === 0 ? (
                    <Award size={18} color="var(--color-accent)" aria-hidden="true" />
                  ) : (
                    <BookOpen size={16} color="var(--color-text-subtle)" aria-hidden="true" />
                  )}
                </div>

                <h3 className={styles.degreeName}>{item.degree}</h3>
                <p className={styles.institution}>{item.institution}</p>
                <p className={styles.boardName}>Board: {item.boardOrUniversity}</p>

                {item.details && (
                  <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                    {item.details.map((d, dIdx) => (
                      <li key={dIdx} style={{ marginBottom: '0.35rem' }}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.scoreGroup}>
                  <span className={styles.scoreLabel}>Final Score</span>
                  <span className={`${styles.scoreValue} ${idx === 0 ? styles.scoreHighlight : ''}`}>
                    {item.percentage}
                  </span>
                </div>

                {item.status && (
                  <span className={`${styles.statusPill} ${idx === 0 ? styles.statusSuccess : ''}`}>
                    {item.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
