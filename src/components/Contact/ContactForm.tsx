import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, FileDown, Calendar } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import styles from './Contact.module.css';

interface ContactFormProps {
  onOpenResumeModal: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  company: string;
  opportunityType: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onOpenResumeModal }) => {
  const { personalInfo } = resumeData;
  const { contact } = personalInfo;

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    opportunityType: 'Full-time Software Engineering Role',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid corporate or personal email.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please include a brief message or job description.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate accessible API round-trip
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        opportunityType: 'Full-time Software Engineering Role',
        message: ''
      });
    }, 700);
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Employment Inquiries</span>
          <h2 id="contact-heading">Connect for Career Opportunities</h2>
          <p className="section-description">
            Available immediately for entry-level Software Engineer, Associate Developer, or Technical Trainee openings. Reach out directly or submit an inquiry below.
          </p>
        </header>

        <div className={styles.contactLayout}>
          {/* Direct Details Column */}
          <div className={styles.infoColumn}>
            <div>
              <h3 className={styles.infoTitle}>Candidate Contact Dossier</h3>
              <p className={styles.infoLead}>
                Feel free to connect by telephone, email, or schedule an initial screening call. All communications are reviewed promptly.
              </p>
            </div>

            <div className={styles.detailsList} role="list">
              <div className={styles.detailCard} role="listitem">
                <div className={styles.detailIconBox} aria-hidden="true">
                  <Phone size={18} />
                </div>
                <div className={styles.detailMeta}>
                  <span className={styles.detailLabel}>Direct Mobile</span>
                  <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className={`${styles.detailValue} ${styles.detailLink}`}>
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className={styles.detailCard} role="listitem">
                <div className={styles.detailIconBox} aria-hidden="true">
                  <Mail size={18} />
                </div>
                <div className={styles.detailMeta}>
                  <span className={styles.detailLabel}>Email Address</span>
                  <a href={`mailto:${contact.email}`} className={`${styles.detailValue} ${styles.detailLink}`}>
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className={styles.detailCard} role="listitem">
                <div className={styles.detailIconBox} aria-hidden="true">
                  <MapPin size={18} />
                </div>
                <div className={styles.detailMeta}>
                  <span className={styles.detailLabel}>Postal Address</span>
                  <span className={styles.detailValue}>{contact.location}</span>
                </div>
              </div>

              <div className={styles.detailCard} role="listitem">
                <div className={styles.detailIconBox} aria-hidden="true">
                  <Calendar size={18} />
                </div>
                <div className={styles.detailMeta}>
                  <span className={styles.detailLabel}>Date of Birth</span>
                  <span className={styles.detailValue}>{contact.dateOfBirth}</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '0.5rem' }}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={onOpenResumeModal}
                style={{ width: '100%', padding: '0.8rem' }}
                aria-label="Download formal resume PDF"
              >
                <FileDown size={18} /> Download Formal Resume PDF
              </button>
            </div>
          </div>

          {/* Form Column */}
          <div className={styles.formCard}>
            {submitted && (
              <div className={`${styles.alertBox} ${styles.alertSuccess}`} role="alert">
                <CheckCircle2 size={20} style={{ flexShrink: 0 }} />
                <div>
                  <strong>Inquiry received.</strong> Thank you for reaching out. Virendra will review your opportunity and reply within one business day.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate aria-label="Recruiter message form">
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName" className={styles.label}>
                    Your Full Name <span className={styles.requiredStar} aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                    placeholder="e.g. Hiring Manager / Recruiter"
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {errors.fullName && (
                    <span id="fullName-error" className={styles.errorText} role="alert">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Official Email <span className={styles.requiredStar} aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    placeholder="hiring@company.com"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className={styles.errorText} role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.label}>
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="e.g. xyz company"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="opportunityType" className={styles.label}>
                    Opportunity Classification
                  </label>
                  <select
                    id="opportunityType"
                    name="opportunityType"
                    value={formData.opportunityType}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="Full-time Software Engineering Role">Full-time Software Engineering Role</option>
                    <option value="Associate Web Developer Position">Associate Web Developer Position</option>
                    <option value="Graduate Engineering Trainee">Graduate Engineering Trainee</option>
                    <option value="Internship / Apprenticeship">Internship / Apprenticeship</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="message" className={styles.label}>
                    Message / Position Overview <span className={styles.requiredStar} aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    placeholder="Briefly describe the candidate requirement, role location, or proposed next steps..."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <span id="message-error" className={styles.errorText} role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={isSubmitting}
                aria-label="Send recruitment message"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <Send size={16} aria-hidden="true" />
                    <span>Send Recruitment Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
