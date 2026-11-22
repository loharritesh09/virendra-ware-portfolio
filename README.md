# Executive Portfolio & Resume: Virendra Dattatray Ware

A production-ready, accessible, corporate-grade portfolio and resume web application tailored for enterprise job applications (such as xyz company).

Designed with a **"glasses-on" executive look**: classic typography (Merriweather serif + Inter sans-serif), balanced whitespace, understated navy/slate palette, high-contrast WCAG 2.1 AA compliance, and zero gimmicky neon/AI aesthetics.

---

## 📋 Features & Sections

1. **Header & Navigation**: Sticky accessible navigation, skip-to-content landmark, mobile-friendly drawer menu, direct section anchors, and instant Resume PDF download trigger.
2. **Hero / Introduction**:
   - Executive headline: *Aspiring Software Engineer & Web Developer*
   - Official credentials: *MSBTE Polytechnic Diploma (79.00%)*
   - Verifiable career objective and quick contact metadata (Mobile, Email, Location, DOB)
   - Quantified executive highlight metric badges
3. **Experience & Technical Training (`ExperienceList`)**:
   - Hands-on laboratory and practical technical projects (2021–2024)
   - Concrete bullet points highlighting Python, MySQL database normalization, and Git version control
4. **Education & Credentials (`EducationList`)**:
   - **Diploma in Engineering (Polytechnic)**: Vidya Vikas Pratishthan Polytechnic, Solapur | MSBTE | **79.00%** (First Class with Distinction)
   - **Higher Secondary Certificate (HSC - 12th)**: S.P. College, Bhoom | **59.17%**
   - **Secondary School Certificate (SSC - 10th)**: Kalbhairav Madhyamik Vidyalaya, Shikrapur, Pune | **75.00%**
5. **Technical Skills (`Skills`)**:
   - Categorized by discipline: Programming Languages, Web Technologies, Database & Backend, Developer Tools & Platforms, Professional Soft Skills
   - Clean, understated executive proficiency indicators with accessible `progressbar` semantics
6. **Projects & Portfolio (`Projects`)**:
   - **Student Record & Academic Management System**: Python, MySQL, Tkinter
   - **Responsive Corporate Client Portal**: HTML5, CSS3, JavaScript, WCAG 2.1
   - **TruthVision AI - Media Authenticity Inspection Tool**: Python, OpenCV, NumPy
7. **Languages & Strengths (`LanguagesStrengths`)**:
   - Multilingual competencies: English, Hindi, Marathi (Native)
   - Core behavioral strengths: Confident & self-motivated, Quick learner & adaptable, Disciplined time management, Positive working attitude
8. **Contact Form & Official Resume Dossier (`ContactForm`)**:
   - Recruiter inquiry form with field validation and accessible error states
   - Direct clickable contact cards (`tel:`, `mailto:`, postal address)
9. **Executive Resume Modal & PDF Engine (`ResumeModal`)**:
   - Built-in preview of the formal one-page resume
   - Direct download link to the original high-resolution PDF (`Virendra_Ware_Resume.pdf`)
   - Native browser print stylesheet formatting the page into an immaculate paper resume (`Ctrl+P` / `Cmd+P`)
10. **Dedicated Route (`/resume`)**:
    - Dedicated standalone page via React Router for direct linking and clean printing.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Bundler & Tooling**: Vite 5
- **Routing**: React Router DOM v6
- **Styling**: CSS Modules + CSS Custom Properties (Design Tokens)
- **Icons**: Lucide React (Subtle, clean line icons)
- **Accessibility**: WCAG 2.1 AA compliant, semantic HTML5, keyboard navigable, screen-reader friendly

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm

### 1. Installation

```bash
cd portfolio
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

The application will launch at `http://localhost:3000` (or the next available port).

### 3. Build for Production

```bash
npm run build
```

This compiles TypeScript, optimizes assets, and bundles the production app into `dist/`.

### 4. Preview Production Build

```bash
npm run preview
```

### 5. Deploy to Vercel

```bash
npm run deploy
```

---

## ⚡ Deployment to Vercel via GitHub

1. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```
2. **Import into Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your GitHub repository.
   - Vercel automatically detects the **Vite** framework and `vercel.json`.
   - Click **Deploy**. Your portfolio will be live at `https://<your-project>.vercel.app` in under 30 seconds!

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   ├── favicon.svg                 # Monogram favicon
│   └── Virendra_Ware_Resume.pdf    # Downloadable official resume PDF
├── src/
│   ├── components/
│   │   ├── Header/                 # Navigation & Mobile Drawer
│   │   ├── Hero/                   # Executive Introduction & Metrics
│   │   ├── Experience/             # Roles, Lab Work & Bullets
│   │   ├── Education/              # Academic Credentials & Scores
│   │   ├── Skills/                 # Technical & Soft Competencies
│   │   ├── Projects/               # Project Portfolio Showcase
│   │   ├── LanguagesStrengths/     # Languages & Workplace Strengths
│   │   ├── Contact/                # Recruiter Contact Form
│   │   ├── ResumeModal/            # Preview & PDF Generator
│   │   └── Footer/                 # Corporate Footer & Quick Links
│   ├── data/
│   │   └── resumeData.ts           # Central typed resume data source
│   ├── styles/
│   │   ├── global.css              # Reset, typography, print styles
│   │   └── variables.css           # Executive design tokens
│   ├── types/
│   │   └── resume.ts               # TypeScript data models
│   ├── App.tsx                     # Route definitions & layout
│   ├── main.tsx                    # React entrypoint
│   └── vite-env.d.ts               # CSS module & Vite declarations
├── index.html                      # Semantic HTML5 template
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📝 Customizing Resume Content

All resume data is centrally managed in `src/data/resumeData.ts`. Simply modify the objects in that file to instantly update:
- Personal information & contact details
- Work experience & bullet points
- Academic degrees & board percentages
- Technical skills & proficiency levels
- Project descriptions & GitHub links
