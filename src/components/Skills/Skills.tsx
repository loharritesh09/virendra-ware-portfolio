import React, { useState } from 'react';
import { resumeData } from '../../data/resumeData';
import styles from './Skills.module.css';

export const Skills: React.FC = () => {
  const { skills } = resumeData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skills.map(c => c.category)];

  const filteredCategories = selectedCategory === 'All'
    ? skills
    : skills.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="section section-alt" aria-labelledby="skills-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Core Competencies</span>
          <h2 id="skills-heading">Technical & Professional Skillset</h2>
          <p className="section-description">
            Graded assessment of programming languages, web architecture, relational databases, developer tooling, and collaborative workplace strengths.
          </p>
        </header>

        {/* Category Filters */}
        <div className={styles.filterNav} role="tablist" aria-label="Skill category filters">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`${styles.filterBtn} ${selectedCategory === cat ? styles.filterBtnActive : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className={styles.categoriesGrid}>
          {filteredCategories.map((category, catIdx) => (
            <div key={catIdx} className={styles.categoryCard}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <p className={styles.categoryDesc}>{category.description}</p>

              <div className={styles.skillList}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevelLabel}>{skill.levelLabel}</span>
                    </div>

                    <div
                      className={styles.meterTrack}
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency: ${skill.level}% (${skill.levelLabel})`}
                    >
                      <div
                        className={styles.meterFill}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
