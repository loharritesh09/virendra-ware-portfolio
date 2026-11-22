import React from 'react';
import { Phone, Mail, MapPin, Calendar, FileDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import styles from './Hero.module.css';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const { personalInfo, education, skills, projects } = resumeData;
  const { contact } = personalInfo;

  return (
    <section id="about" className={styles.hero} aria-labelledby="hero-name">
      <div className="container">
        <div className={styles.heroContent}>
          {/* Main Column */}
          <div className={styles.mainCol}>
            <div className={styles.badgeRow}>
              <span className={styles.statusBadge}>
                <span className={styles.statusDot} aria-hidden="true"></span>
                Available for Employment
              </span>
              <span className={styles.qualificationBadge}>
                MSBTE Diploma (79.00%)
              </span>
              <span className={styles.qualificationBadge}>
                Software & Web Dev
              </span>
            </div>

            <span className={styles.heroPretitle}>HELLO, WORLD — WELCOME</span>

            <h1 id="hero-name" className={styles.nameHeading}>
              I'm <span className="gradient-text">{personalInfo.fullName}</span>
            </h1>

            <p className={styles.professionalTitle}>
              {personalInfo.title}
            </p>

            <div className={styles.objectiveCard}>
              <p className={styles.objectiveText}>
                "{personalInfo.careerObjective}"
              </p>
            </div>

            {/* Direct Contact Metadata */}
            <div className={styles.contactGrid} role="list" aria-label="Key Contact Details">
              <div className={styles.contactItem} role="listitem">
                <Phone size={16} className={styles.contactIcon} aria-hidden="true" />
                <span>
                  Tel:&nbsp;
                  <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className={styles.contactLink}>
                    {contact.phone}
                  </a>
                </span>
              </div>

              <div className={styles.contactItem} role="listitem">
                <Mail size={16} className={styles.contactIcon} aria-hidden="true" />
                <span>
                  Email:&nbsp;
                  <a href={`mailto:${contact.email}`} className={styles.contactLink}>
                    {contact.email}
                  </a>
                </span>
              </div>

              <div className={styles.contactItem} role="listitem">
                <MapPin size={16} className={styles.contactIcon} aria-hidden="true" />
                <span>Bhoom, Dist. Dharashiv, Maharashtra</span>
              </div>

              <div className={styles.contactItem} role="listitem">
                <Calendar size={16} className={styles.contactIcon} aria-hidden="true" />
                <span>DOB: {contact.dateOfBirth}</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className={styles.ctaGroup}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onOpenResumeModal}
                aria-label="Download or print official resume"
              >
                <FileDown size={18} aria-hidden="true" />
                <span>Download Resume (PDF)</span>
              </button>

              <a href="#experience" className="btn btn-outline" aria-label="View experience and credentials">
                <span>View Credentials</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Executive Side Card */}
          <aside className={styles.sideCard} aria-label="Candidate Overview">
            <div className={styles.avatarContainer}>
              <img
                src="/profile.jpg"
                alt="Portrait of Virendra Dattatray Ware"
                className={styles.avatarImage}
                onError={(e) => {
                  // Fallback to monogram if image fails
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <h2 className={styles.candidateName}>Virendra Ware</h2>
            <p className={styles.candidateRole}>Technical Candidate</p>

            <div className={styles.divider} />

            <div className={styles.metaStats}>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Primary Discipline:</span>
                <span className={styles.statValue}>Software & Web Dev</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Highest Education:</span>
                <span className={styles.statValue}>Polytechnic Diploma</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>MSBTE Aggregate:</span>
                <span className={`${styles.statValue} ${styles.statHighlight}`}>79.00%</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Location:</span>
                <span className={styles.statValue}>Maharashtra, India</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Languages:</span>
                <span className={styles.statValue}>EN / HI / MR</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Background Check:</span>
                <span className={styles.statValue} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: 'var(--color-success)' }}>
                  <CheckCircle2 size={14} /> Ready
                </span>
              </div>
            </div>
          </aside>
        </div>

        {/* Quantified Executive Highlights Strip */}
        <div className={styles.statsBanner} aria-label="Quick Facts">
          <div className={styles.bannerItem}>
            <span className={styles.bannerNumber}>79%</span>
            <span className={styles.bannerLabel}>Diploma MSBTE Score</span>
          </div>
          <div className={styles.bannerItem}>
            <span className={styles.bannerNumber}>{education.length}</span>
            <span className={styles.bannerLabel}>Academic Degrees</span>
          </div>
          <div className={styles.bannerItem}>
            <span className={styles.bannerNumber}>{skills.reduce((acc, cat) => acc + cat.skills.length, 0)}+</span>
            <span className={styles.bannerLabel}>Verified Competencies</span>
          </div>
          <div className={styles.bannerItem}>
            <span className={styles.bannerNumber}>{projects.length}</span>
            <span className={styles.bannerLabel}>Showcase Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};
