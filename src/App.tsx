import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { ExperienceList } from './components/Experience/ExperienceList';
import { EducationList } from './components/Education/EducationList';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { LanguagesStrengths } from './components/LanguagesStrengths/LanguagesStrengths';
import { ContactForm } from './components/Contact/ContactForm';
import { Footer } from './components/Footer/Footer';
import { ResumeModal } from './components/ResumeModal/ResumeModal';
import { resumeData } from './data/resumeData';
import { Printer, ArrowLeft, FileDown } from 'lucide-react';

function HomePage({ onOpenResumeModal }: { onOpenResumeModal: () => void }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header onOpenResumeModal={onOpenResumeModal} />

      <main id="main-content" role="main">
        <Hero onOpenResumeModal={onOpenResumeModal} />
        <ExperienceList />
        <EducationList />
        <Skills />
        <Projects />
        <LanguagesStrengths />
        <ContactForm onOpenResumeModal={onOpenResumeModal} />
      </main>

      <Footer />
    </>
  );
}

function DedicatedResumePage() {
  const { personalInfo, education, strengths, languages, projects } = resumeData;
  const { contact } = personalInfo;

  return (
    <div style={{ maxWidth: '850px', margin: '2rem auto', padding: '2rem 1.5rem' }}>
      <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <Link to="/" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button type="button" onClick={() => window.print()} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <Printer size={16} /> Print / Save as PDF
          </button>
          <a href="/Virendra_Ware_Resume.pdf" download className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileDown size={16} /> Download PDF
          </a>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--radius-md)' }}>
        <header style={{ borderBottom: '2px solid var(--color-primary)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>
              {personalInfo.fullName}
            </h1>
            <p style={{ fontWeight: 600, color: 'var(--color-primary-light)', marginTop: '0.35rem', fontSize: '1.05rem' }}>
              {personalInfo.title}
            </p>
          </div>
          <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.5', textAlign: 'right' }}>
            <p><strong>Mobile:</strong> {contact.phone}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>DOB:</strong> {contact.dateOfBirth}</p>
            <p>{contact.location}</p>
          </div>
        </header>

        {/* Objective */}
        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.1rem', borderBottom: '1px solid var(--color-border-dark)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
            Career Objective
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
            {personalInfo.careerObjective}
          </p>
        </section>

        {/* Technical Skills */}
        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.1rem', borderBottom: '1px solid var(--color-border-dark)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
            Technical Skills
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.92rem' }}>
            <div><strong>Programming:</strong> Python</div>
            <div><strong>Tools:</strong> VS Code, Git, GitHub, Android Studio</div>
            <div><strong>Web Technologies:</strong> HTML, CSS, JavaScript</div>
            <div><strong>Soft Skills:</strong> Communication, Teamwork</div>
            <div><strong>Database:</strong> MySQL</div>
          </div>
        </section>

        {/* Education */}
        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.1rem', borderBottom: '1px solid var(--color-border-dark)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
            Education
          </h2>
          {education.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: '0.95rem' }}>
                <span>{item.degree} — {item.institution}</span>
                <span style={{ color: 'var(--color-accent)' }}>{item.percentage}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                Board: {item.boardOrUniversity}
              </div>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.1rem', borderBottom: '1px solid var(--color-border-dark)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
            Selected Projects
          </h2>
          {projects.map((p, idx) => (
            <div key={idx} style={{ marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: '0.92rem' }}>
                <span>{p.title}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)' }}>{p.technologies.join(', ')}</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: '0.2rem 0' }}>{p.summary}</p>
            </div>
          ))}
        </section>

        {/* Languages & Strengths */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.1rem', borderBottom: '1px solid var(--color-border-dark)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
              Languages
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
              {languages.map(l => l.language).join(' • ')}
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: '1.1rem', borderBottom: '1px solid var(--color-border-dark)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
              Strengths
            </h2>
            <div style={{ fontSize: '0.88rem', color: 'var(--color-text-main)' }}>
              {strengths.map((s, idx) => (
                <div key={idx}>• {s.title}</div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
      {/* Dynamic Ambient Background Canvas for Glassmorphism Refraction */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
        <div className="ambient-orb ambient-orb-4" />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onOpenResumeModal={() => setIsResumeModalOpen(true)}
            />
          }
        />
        <Route path="/resume" element={<DedicatedResumePage />} />
      </Routes>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}

export default App;
