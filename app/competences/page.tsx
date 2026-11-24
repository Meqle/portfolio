'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Competences() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 md:p-24 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-12">
        {/* Titre de la page */}
        <section className="border-b border-slate-800 pb-6">
          <h2 className="text-3xl font-bold text-cyan-400">
            {lang === 'fr' ? 'Compétences & Expériences' : 'Skills & Experience'}
          </h2>
          <p className="text-slate-400 mt-2">
            {lang === 'fr'
              ? 'Synthèse de mon parcours académique en BUT 3, de ma stack technique et de mes expériences professionnelles.'
              : 'Overview of my 3rd-year Computer Science education, technical stack, and professional experience.'}
          </p>
        </section>

        {/* Section Parcours */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-slate-200">
            {lang === 'fr' ? 'Parcours Académique' : 'Education'}
          </h3>
          <div className="relative border-l border-slate-800 pl-6 space-y-8">
            <div className="relative">
              <div className="absolute -left-[31px] top-1 bg-cyan-500 h-4 w-4 rounded-full border-4 border-slate-900"></div>
              <h4 className="font-bold text-slate-200">
                {lang === 'fr'
                  ? "BUT Informatique — Parcours RACA (Réalisation d'Applications)"
                  : 'B.Sc. in Computer Science (BUT Informatique) — Application Development Track'}
              </h4>
              <p className="text-sm text-cyan-400">
                {lang === 'fr'
                  ? "IUT d'Amiens (UPJV) — 3ème année en cours (BUT 3 • 2024 – 2027)"
                  : "IUT d'Amiens (UPJV), France — 3rd & Final Year in progress (2024 – 2027)"}
              </p>
              <p className="text-sm text-slate-400 mt-1">
                {lang === 'fr'
                  ? 'Conception et développement full-stack, architectures distribuées & conteneurisation (Docker), qualité logicielle (TDD/BDD), nouveaux paradigmes de bases de données (NoSQL/MongoDB, PostgreSQL), algorithmique avancée et modélisation mathématique.'
                  : 'Full-stack software engineering, distributed architectures & containerization (Docker), software quality & automated testing (TDD/BDD), SQL & NoSQL databases (PostgreSQL, MongoDB), and advanced algorithms.'}
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-1 bg-slate-700 h-4 w-4 rounded-full border-4 border-slate-900"></div>
              <h4 className="font-bold text-slate-300">
                {lang === 'fr'
                  ? 'Classe Préparatoire Intégrée'
                  : 'Integrated Engineering Preparatory Class'}
              </h4>
              <p className="text-sm text-slate-400">
                {lang === 'fr'
                  ? "EPITA (École d'Ingénieurs en Informatique) — 6 mois"
                  : 'EPITA (Graduate School of Computer Science, Paris) — 6 months'}
              </p>
              <p className="text-sm text-slate-400 mt-1">
                {lang === 'fr'
                  ? 'Rigueur mathématique et logique, programmation fonctionnelle (OCaml) et algorithmique bas niveau.'
                  : 'Mathematical rigor, formal logic, functional programming (OCaml), and low-level algorithms.'}
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[31px] top-1 bg-slate-700 h-4 w-4 rounded-full border-4 border-slate-900"></div>
              <h4 className="font-bold text-slate-300">
                {lang === 'fr' ? 'Baccalauréat Général' : 'French High School Diploma (Baccalauréat)'}
              </h4>
              <p className="text-sm text-slate-400">
                {lang === 'fr'
                  ? 'Spécialités Mathématiques et NSI (Numérique et Sciences Informatiques)'
                  : 'Specializations in Mathematics and Computer Science (NSI)'}
              </p>
            </div>
          </div>
        </section>

        {/* Section Compétences Techniques */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-slate-200">
            {lang === 'fr' ? 'Compétences Techniques' : 'Technical Stack'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Carte 1 : Frontend & Desktop */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
              <h4 className="text-cyan-400 font-bold">
                {lang === 'fr' ? 'Frontend, UI & Clients Lourds' : 'Frontend, UI & Desktop Clients'}
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cyan-950/60 text-cyan-300 text-xs px-3 py-1 rounded-md border border-cyan-800/60 font-medium">
                  TypeScript
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  React / Next.js
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  Vue 3 (Vite)
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  Electron
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  PixiJS (2D WebGL)
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  Tailwind CSS / CSS3
                </span>
              </div>
            </div>

            {/* Carte 2 : Backend & Temps Réel */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
              <h4 className="text-cyan-400 font-bold">
                {lang === 'fr' ? 'Backend, API & Temps Réel' : 'Backend, APIs & Real-Time'}
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cyan-950/60 text-cyan-300 text-xs px-3 py-1 rounded-md border border-cyan-800/60 font-medium">
                  Node.js (Express 5)
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  WebSocket / Socket.io
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  Python
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  C# / .NET
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  PHP
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  Java / C / C++
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  JWT & RBAC Auth
                </span>
              </div>
            </div>

            {/* Carte 3 : Bases de Données */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
              <h4 className="text-cyan-400 font-bold">
                {lang === 'fr' ? 'Bases de Données (SQL & NoSQL)' : 'Databases (SQL & NoSQL)'}
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cyan-950/60 text-cyan-300 text-xs px-3 py-1 rounded-md border border-cyan-800/60 font-medium">
                  PostgreSQL (PL/pgSQL)
                </span>
                <span className="bg-cyan-950/60 text-cyan-300 text-xs px-3 py-1 rounded-md border border-cyan-800/60 font-medium">
                  MongoDB 8 (Mongoose)
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  MySQL / MariaDB
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  Multi-Tenant Isolation
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  phpMyAdmin
                </span>
              </div>
            </div>

            {/* Carte 4 : DevOps, Qualité & Outils */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
              <h4 className="text-cyan-400 font-bold">
                {lang === 'fr' ? 'DevOps, Qualité & Architecture' : 'DevOps, Quality & Architecture'}
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cyan-950/60 text-cyan-300 text-xs px-3 py-1 rounded-md border border-cyan-800/60 font-medium">
                  Docker & Docker Compose
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  Monorepo Architecture
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  TDD / BDD (Unit & Integration Tests)
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  Git / GitHub (Git Flow)
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  Nginx (Reverse Proxy)
                </span>
                <span className="bg-slate-900 text-slate-300 text-xs px-3 py-1 rounded-md border border-slate-800">
                  Linux / VS Code
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Expériences Professionnelles */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-slate-200">
            {lang === 'fr' ? 'Expériences Professionnelles' : 'Professional Experience'}
          </h3>
          <div className="space-y-4">
            <div className="bg-slate-950 p-6 rounded-xl border border-cyan-900/50 shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h4 className="font-bold text-slate-100 text-lg">
                  {lang === 'fr' ? 'Développeur Web Full-Stack (Stage)' : 'Full-Stack Web Developer Intern'}
                </h4>
                <span className="text-sm text-cyan-400 font-medium">
                  {lang === 'fr' ? 'Janv. — Mars 2026 (2 mois)' : 'Jan — Mar 2026 (2 months)'}
                </span>
              </div>
              <p className="text-sm text-slate-400 italic mt-1">
                {lang === 'fr'
                  ? 'Pink Studio Amiens — Stage de BUT 2 en autonomie complète'
                  : 'Pink Studio Amiens, France — 2nd-Year B.Sc. Internship (Sole Developer)'}
              </p>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {lang === 'fr'
                  ? "Conception, modélisation SQL et développement de A à Z d'une plateforme web dynamique vitrine et d'un back-office d'administration sécurisé (CRUD complet pour artistes, styles et galerie, téléversement sécurisé d'images, filtrage dynamique)."
                  : 'Designed, modeled (relational SQL), and developed from scratch a dynamic web platform and a secure admin back-office (full CRUD for artists, styles, and tattoo gallery, secure image upload handling, and dynamic filtering).'}
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h4 className="font-bold text-slate-200 text-lg">
                  {lang === 'fr'
                    ? 'Expériences Étudiantes & Jobs Saisonniers (Intermarché, McDonald’s)'
                    : 'Student & Seasonal Jobs (Intermarché, McDonald’s)'}
                </h4>
                <span className="text-sm text-slate-400 font-medium">2024 & 2026</span>
              </div>
              <p className="text-sm text-slate-400 italic mt-1">
                {lang === 'fr'
                  ? 'Employé commercial (Été 2026) & Équipier polyvalent (2024)'
                  : 'Retail Staff (Summer 2026) & Crew Member (2024)'}
              </p>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {lang === 'fr'
                  ? "Développement de la rigueur opérationnelle, de la gestion du stress, de la ponctualité et du travail en équipe sous cadence soutenue."
                  : 'Developed operational rigor, stress management, punctuality, and fast-paced teamwork skills.'}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
