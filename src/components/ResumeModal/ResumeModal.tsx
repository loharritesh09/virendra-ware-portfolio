import React, { useEffect } from 'react';
import { X, FileDown, Printer } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import styles from './ResumeModal.module.css';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { personalInfo, education, strengths, languages } = resumeData;
  const { contact } = personalInfo;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-resume-title"
    >
      <div
        className={styles.modalWindow}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={styles.modalHeader}>
          <h2 id="modal-resume-title" className={styles.modalTitle}>
            Executive Resume Preview
          </h2>

          <div className={styles.headerActions}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={handlePrint}
              aria-label="Print or save as PDF"
            >
              <Printer size={16} aria-hidden="true" />
              <span>Print / PDF</span>
            </button>

            <a
              href="/Virendra_Ware_Resume.pdf"
              download="Virendra_Ware_Resume.pdf"
              className="btn btn-primary"
              aria-label="Direct download original resume PDF"
            >
              <FileDown size={16} aria-hidden="true" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body / Sheet */}
        <div className={styles.modalBody}>
          <div className={styles.resumeSheet}>
            <header className={styles.sheetHeader}>
              <div>
                <h1 className={styles.sheetName}>{personalInfo.fullName}</h1>
                <p style={{ fontWeight: 600, color: 'var(--color-primary-light)', marginTop: '0.25rem' }}>
                  {personalInfo.title}
                </p>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.5', marginTop: '0.5rem' }}>
                  <p><strong>Mobile:</strong> {contact.phone}</p>
                  <p><strong>Email:</strong> {contact.email}</p>
                  <p><strong>DOB:</strong> {contact.dateOfBirth}</p>
                  <p><strong>Address:</strong> {contact.location}</p>
                </div>
              </div>
              <div>
                <img
                  src="/profile.jpg"
                  alt="Virendra Ware"
                  style={{ width: '92px', height: '92px', borderRadius: '4px', objectFit: 'cover', border: '1px solid var(--color-border)' }}
                />
              </div>
            </header>

            {/* Career Objective */}
            <section className={styles.sheetSection}>
              <h3 className={styles.sheetSectionTitle}>Career Objective</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-main)' }}>
                {personalInfo.careerObjective}
              </p>
            </section>

            {/* Technical Skills */}
            <section className={styles.sheetSection}>
              <h3 className={styles.sheetSectionTitle}>Technical Skills</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.9rem' }}>
                <div>
                  <strong>Programming:</strong> Python
                </div>
                <div>
                  <strong>Tools:</strong> VS Code, Git, GitHub, Android Studio
                </div>
                <div>
                  <strong>Web Technologies:</strong> HTML, CSS, JavaScript
                </div>
                <div>
                  <strong>Soft Skills:</strong> Communication, Teamwork, Time Management
                </div>
                <div>
                  <strong>Database:</strong> MySQL
                </div>
              </div>
            </section>

            {/* Education */}
            <section className={styles.sheetSection}>
              <h3 className={styles.sheetSectionTitle}>Education</h3>
              {education.map((item, idx) => (
                <div key={idx} className={styles.sheetEntry}>
                  <div className={styles.sheetEntryHeader}>
                    <span>{item.degree} — {item.institution}</span>
                    <span className={styles.sheetScore}>{item.percentage}</span>
                  </div>
                  <div className={styles.sheetSub}>
                    Board: {item.boardOrUniversity}
                  </div>
                </div>
              ))}
            </section>

            {/* Languages */}
            <section className={styles.sheetSection}>
              <h3 className={styles.sheetSectionTitle}>Languages</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                {languages.map(l => l.language).join(' • ')}
              </p>
            </section>

            {/* Strengths */}
            <section className={styles.sheetSection} style={{ marginBottom: 0 }}>
              <h3 className={styles.sheetSectionTitle}>Strengths</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.9rem' }}>
                {strengths.map((s, sIdx) => (
                  <div key={sIdx}>• {s.title}</div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.modalFooter}>
          <span style={{ fontSize: '0.82rem', color: 'var(--color-text-subtle)' }}>
            Official resume document for Virendra Dattatray Ware
          </span>
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
