import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { personalInfo } = resumeData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.brandArea}>
            <h3 className={styles.brandHeading}>{personalInfo.fullName}</h3>
            <p className={styles.brandTagline}>
              Aspiring Software Engineer & Web Developer. Prepared to contribute dedicated technical knowledge, continuous learning agility, and collaborative execution to engineering teams.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                aria-label="Email candidate"
                style={{ color: '#cbd5e1' }}
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}
                aria-label="Call candidate"
                style={{ color: '#cbd5e1' }}
              >
                <Phone size={18} />
              </a>
              {personalInfo.contact.github && (
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Candidate GitHub Profile"
                  style={{ color: '#cbd5e1' }}
                >
                  <Github size={18} />
                </a>
              )}
              {personalInfo.contact.linkedin && (
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Candidate LinkedIn Profile"
                  style={{ color: '#cbd5e1' }}
                >
                  <Linkedin size={18} />
                </a>
              )}
            </div>
          </div>

          <div className={styles.linksArea}>
            <div className={styles.linkCol}>
              <span className={styles.colTitle}>Navigation</span>
              <a href="#about" className={styles.footerLink}>Overview</a>
              <a href="#experience" className={styles.footerLink}>Experience</a>
              <a href="#education" className={styles.footerLink}>Education</a>
              <a href="#skills" className={styles.footerLink}>Competencies</a>
            </div>

            <div className={styles.linkCol}>
              <span className={styles.colTitle}>Portfolio</span>
              <a href="#projects" className={styles.footerLink}>Projects</a>
              <a href="#strengths" className={styles.footerLink}>Strengths</a>
              <a href="#contact" className={styles.footerLink}>Inquiries</a>
              <a href="/Virendra_Ware_Resume.pdf" download className={styles.footerLink}>Download PDF</a>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <span>
            © {currentYear} {personalInfo.fullName}. Prepared for corporate recruitment at xyz company and leading enterprise teams.
          </span>

          <button
            type="button"
            className={styles.backToTopBtn}
            onClick={scrollToTop}
            aria-label="Return to top of page"
          >
            <span>Top</span>
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
