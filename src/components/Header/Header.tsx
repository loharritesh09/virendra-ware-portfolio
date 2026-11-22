import React, { useState } from 'react';
import { Menu, X, FileDown, Mail } from 'lucide-react';
import styles from './Header.module.css';

interface HeaderProps {
  onOpenResumeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResumeModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header} role="banner">
      <div className={`container ${styles.navContainer}`}>
        <a href="#intro" className={styles.brand} aria-label="Virendra Ware Portfolio Home">
          <div className={styles.monogram}>VW</div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Virendra Ware</span>
            <span className={styles.brandTitle}>Software Engineer Candidate</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#experience" className={styles.navLink}>Experience</a>
          <a href="#education" className={styles.navLink}>Education</a>
          <a href="#skills" className={styles.navLink}>Skills</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#strengths" className={styles.navLink}>Strengths</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>

        {/* Actions */}
        <div className={styles.headerActions}>
          <button
            type="button"
            className="btn btn-outline"
            onClick={onOpenResumeModal}
            aria-label="Preview and Download Resume PDF"
          >
            <FileDown size={16} aria-hidden="true" />
            <span>Resume (PDF)</span>
          </button>
          
          <a href="#contact" className="btn btn-primary" aria-label="Contact Virendra Ware">
            <Mail size={16} aria-hidden="true" />
            <span>Get in Touch</span>
          </a>

          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav id="mobile-nav" className={styles.mobileDrawer} aria-label="Mobile Navigation">
          <a href="#about" className={styles.mobileNavLink} onClick={closeMobileMenu}>About & Summary</a>
          <a href="#experience" className={styles.mobileNavLink} onClick={closeMobileMenu}>Experience & Training</a>
          <a href="#education" className={styles.mobileNavLink} onClick={closeMobileMenu}>Education & Credentials</a>
          <a href="#skills" className={styles.mobileNavLink} onClick={closeMobileMenu}>Technical & Soft Skills</a>
          <a href="#projects" className={styles.mobileNavLink} onClick={closeMobileMenu}>Projects & Portfolio</a>
          <a href="#strengths" className={styles.mobileNavLink} onClick={closeMobileMenu}>Strengths & Languages</a>
          <a href="#contact" className={styles.mobileNavLink} onClick={closeMobileMenu}>Contact Information</a>
          <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => { closeMobileMenu(); onOpenResumeModal(); }}
              style={{ width: '100%' }}
            >
              <FileDown size={16} /> Download Resume PDF
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};
