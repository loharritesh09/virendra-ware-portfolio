import React from 'react';
import { Languages, CheckCircle, Sparkles } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import styles from './LanguagesStrengths.module.css';

export const LanguagesStrengths: React.FC = () => {
  const { languages, strengths } = resumeData;

  return (
    <section id="strengths" className="section section-alt" aria-labelledby="attributes-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Personal Attributes & Linguistics</span>
          <h2 id="attributes-heading">Professional Strengths & Languages</h2>
          <p className="section-description">
            Key professional behavioral attributes and multilingual communication capabilities supporting collaborative corporate team operations.
          </p>
        </header>

        <div className={styles.dualGrid}>
          {/* Strengths */}
          <div className={styles.pane}>
            <div className={styles.paneHeader}>
              <Sparkles size={20} className={styles.paneIcon} aria-hidden="true" />
              <h3 className={styles.paneTitle}>Core Behavioral Strengths</h3>
            </div>

            <div className={styles.strengthList}>
              {strengths.map((item, idx) => (
                <div key={idx} className={styles.strengthCard}>
                  <h4 className={styles.strengthTitle}>
                    <CheckCircle size={15} color="var(--color-accent)" aria-hidden="true" />
                    {item.title}
                  </h4>
                  <p className={styles.strengthDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className={styles.pane}>
            <div className={styles.paneHeader}>
              <Languages size={20} className={styles.paneIcon} aria-hidden="true" />
              <h3 className={styles.paneTitle}>Language Proficiencies</h3>
            </div>

            <div className={styles.languageList}>
              {languages.map((item, idx) => (
                <div key={idx} className={styles.languageItem}>
                  <span className={styles.langName}>{item.language}</span>
                  <span
                    className={`${styles.langBadge} ${item.native ? styles.nativeTag : ''}`}
                  >
                    {item.proficiency}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--color-primary)' }}>Linguistic Context:</strong> Fluent in verbal and written technical communication in English, with native command of Marathi and full professional working proficiency in Hindi for seamless regional and enterprise interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
