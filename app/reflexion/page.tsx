'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Reflexion() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 md:p-24 flex flex-col items-center">
      <div className="max-w-5xl w-full space-y-16">
        {/* Titre de la page */}
        <section className="border-b border-slate-800 pb-6">
          <h2 className="text-3xl font-bold text-cyan-400">
            {lang === 'fr' ? 'Réflexion & Prise de Recul' : 'Engineering Mindset & Progression'}
          </h2>
          <p className="text-slate-400 mt-2">
            {lang === 'fr'
              ? 'Auto-évaluation de ma progression entre le BUT 1 et le BUT 3 vers une posture d’ingénierie logicielle.'
              : 'Self-assessment of my growth from year 1 to year 3 toward production-ready software engineering.'}
          </p>
        </section>

        {/* SECTION 1 : L'ÉVOLUTION DE MA POSTURE (BUT 1 -> BUT 2 -> BUT 3) */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 border-l-4 border-cyan-500 pl-3">
            <span>📈</span>
            {lang === 'fr' ? 'Évolution de ma Posture Professionnelle' : 'Professional Growth (Year 1 to Year 3)'}
          </h3>

          <div className="grid md:grid-cols-3 gap-6 pt-2">
            {/* BUT 1 */}
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800/80">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {lang === 'fr' ? 'BUT 1 — Fondations' : 'Year 1 — Foundations'}
              </span>
              <h4 className="text-lg font-bold text-slate-300 mt-1 mb-3">
                {lang === 'fr' ? 'Exécution & Algorithmique' : 'Execution & Core Algorithms'}
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                {lang === 'fr'
                  ? 'Assimilation des concepts fondamentaux à l’IUT d’Amiens : algorithmique en C/C++ et C#, programmation orientée objet et bases de données SQL relationnelles sur des projets encadrés.'
                  : 'Mastered core fundamentals at IUT d’Amiens: algorithms in C/C++ and C#, object-oriented programming, and relational SQL databases within structured academic projects.'}
              </p>
            </div>

            {/* BUT 2 */}
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <span className="text-xs font-semibold text-cyan-500 uppercase tracking-wider">
                {lang === 'fr' ? 'BUT 2 — Autonomie (RACA)' : 'Year 2 — Autonomy'}
              </span>
              <h4 className="text-lg font-bold text-slate-200 mt-1 mb-3">
                {lang === 'fr' ? 'Conception de A à Z' : 'End-to-End Application Design'}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {lang === 'fr'
                  ? 'Transition vers une posture de concepteur autonome. Lors de mon stage chez Pink Studio, j’ai assumé seul tout le cycle de vie : recueil du besoin client, modélisation SQL et développement d’un back-office PHP sécurisé.'
                  : 'Transitioned into an autonomous developer role. During my internship at Pink Studio, I owned the entire software lifecycle solo: client requirements, SQL schema design, and a secure PHP back-office.'}
              </p>
            </div>

            {/* BUT 3 */}
            <div className="bg-slate-950 p-6 rounded-xl border border-cyan-700/50 shadow-lg shadow-cyan-950/30">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                {lang === 'fr' ? 'BUT 3 — Industrialisation' : 'Year 3 — Production Engineering'}
              </span>
              <h4 className="text-lg font-bold text-white mt-1 mb-3">
                {lang === 'fr'
                  ? 'Architectures Distribuées, Docker & Qualité'
                  : 'Distributed Systems, Docker & Quality'}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {lang === 'fr'
                  ? 'Maîtrise des architectures modernes en équipe : Monorepos TypeScript, synchronisation temps réel (WebSockets), isolation SaaS multi-tenant (MongoDB/Express/Vue 3), tests automatisés (TDD) et déploiement Docker multi-services.'
                  : 'Mastering modern team architectures: TypeScript Monorepos, real-time synchronization (WebSockets), multi-tenant SaaS isolation (MongoDB/Express/Vue 3), automated testing (TDD), and multi-service Docker deployments.'}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 : SYNTHÈSE DES COMPÉTENCES DU PARCOURS RACA */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 border-l-4 border-cyan-500 pl-3">
            <span>🛠️</span>
            {lang === 'fr'
              ? 'Compétences Clés Validées (Parcours Réalisation d’Applications)'
              : 'Core Software Engineering Competencies'}
          </h3>

          <div className="space-y-4">
            {/* Compétence 1 */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-500 uppercase">
                  {lang === 'fr'
                    ? 'Compétence 1 — Réaliser & Industrialiser'
                    : 'Competency 1 — Full-Stack Development & Containerization'}
                </span>
                <h4 className="text-base font-bold text-slate-200">
                  {lang === 'fr'
                    ? 'Architectures Full-Stack, Temps Réel et Conteneurisation Docker'
                    : 'Full-Stack, Real-Time & Dockerized Application Architectures'}
                </h4>
                <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
                  {lang === 'fr'
                    ? 'Conception du SaaS TaskFlow (Vue 3, Express 5, MongoDB 8, Dockerfile multi-stage), du MMORPG 2D (React, PixiJS, WebSocket, Nginx) et du back-office Pink Studio.'
                    : 'Built TaskFlow SaaS (Vue 3, Express 5, MongoDB 8, multi-stage Dockerfile), the 2D MMORPG (React, PixiJS, WebSocket, Nginx), and the Pink Studio CRUD platform.'}
                </p>
              </div>
              <span className="bg-cyan-950/40 text-cyan-400 text-xs font-medium px-2.5 py-1 rounded border border-cyan-800/30 self-start md:self-center shrink-0">
                {lang === 'fr' ? 'Validé (BUT 2 & BUT 3)' : 'Validated (Years 2 & 3)'}
              </span>
            </div>

            {/* Compétence 2 */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-500 uppercase">
                  {lang === 'fr'
                    ? 'Compétence 2 — Optimiser & Administrer les Données'
                    : 'Competency 2 — Data Architecture & Optimization'}
                </span>
                <h4 className="text-base font-bold text-slate-200">
                  {lang === 'fr'
                    ? 'Modélisation SQL (PostgreSQL/MySQL), NoSQL Multi-Tenant (MongoDB) & Algorithmique'
                    : 'Relational SQL (PostgreSQL/MySQL), Multi-Tenant NoSQL (MongoDB) & Algorithms'}
                </h4>
                <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
                  {lang === 'fr'
                    ? 'Isolation multi-entreprise par plugin Mongoose et JWT/RBAC sur TaskFlow, persistance PostgreSQL sur le MMORPG, et algorithmique avancée en Python (cryptanalyse MCMC, traitement multimédia).'
                    : 'Multi-tenant data isolation via custom Mongoose plugin and JWT/RBAC on TaskFlow, PostgreSQL persistence for the MMORPG, and advanced Python algorithms (MCMC cryptanalysis, image processing).'}
                </p>
              </div>
              <span className="bg-cyan-950/40 text-cyan-400 text-xs font-medium px-2.5 py-1 rounded border border-cyan-800/30 self-start md:self-center shrink-0">
                {lang === 'fr' ? 'Validé (BUT 3)' : 'Validated (Year 3)'}
              </span>
            </div>

            {/* Compétence 3 */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-500 uppercase">
                  {lang === 'fr'
                    ? 'Compétence 3 — Qualité Logicielle & Collaboration Agile'
                    : 'Competency 3 — Software Quality & Agile Collaboration'}
                </span>
                <h4 className="text-base font-bold text-slate-200">
                  {lang === 'fr'
                    ? 'Monorepos TypeScript, Tests Automatisés (TDD) et Git Flow en Équipe'
                    : 'TypeScript Monorepos, Automated Testing (TDD) & Team Git Workflows'}
                </h4>
                <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
                  {lang === 'fr'
                    ? 'Mise en œuvre sur Bomberman Arena et le MMORPG 2D : contrats d’interfaces partagés (shared/), tests unitaires et d’intégration automatisés, linting strict et gestion des branches (main / develop / feat/*).'
                    : 'Applied on Bomberman Arena and the 2D MMORPG: shared interface contracts (shared/), automated unit and integration test suites, strict linting, and structured branching (main / develop / feat/*).'}
                </p>
              </div>
              <span className="bg-emerald-950/40 text-emerald-400 text-xs font-medium px-2.5 py-1 rounded border border-emerald-800/30 self-start md:self-center shrink-0">
                {lang === 'fr' ? 'Validé (Projets Équipe BUT 3)' : 'Validated (Year 3 Team Projects)'}
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 3 : MA PHILOSOPHIE DU CODE & PERSPECTIVES 2027 */}
        <section className="bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-6">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <span>🎯</span>
            {lang === 'fr' ? 'Bilan et Perspectives 2027' : 'Outlook & 2027 Career Goals'}
          </h3>

          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            {lang === 'fr' ? (
              <>
                <p>
                  Mon parcours en BUT Informatique a ancré une conviction forte dans ma pratique :{' '}
                  <strong>un bon logiciel est un logiciel lisible, testé et reproductible</strong>. Mon exigence pour
                  le <em>clean code</em>, le typage fort (TypeScript) et la conteneurisation systématique (Docker
                  Compose) permet à n&apos;importe quel membre d&apos;une équipe de lancer et faire évoluer un projet
                  sans friction.
                </p>
                <p>
                  <strong>Objectif Mars – Juin 2027 :</strong> Dans le cadre de la fin de ma 3ème année de BUT, je
                  recherche un <strong>stage de 13 semaines (du 1er mars au 4 juin 2027)</strong>. Je souhaite
                  vivement réaliser cette expérience à l&apos;international — en particulier en{' '}
                  <strong className="text-cyan-400">Pologne</strong> ou au{' '}
                  <strong className="text-cyan-400">Portugal</strong> (avec le soutien du programme{' '}
                  <strong>Erasmus+</strong>) — ou au sein d&apos;une équipe technique ambitieuse en{' '}
                  <strong className="text-cyan-400">France</strong>, avant de poursuivre mes études vers un Master ou
                  un diplôme d&apos;ingénieur en architecture logicielle.
                </p>
              </>
            ) : (
              <>
                <p>
                  My Computer Science degree has shaped a core conviction in my daily work:{' '}
                  <strong>great software is readable, tested, and reproducible</strong>. My commitment to{' '}
                  <em>clean code</em>, strict TypeScript typing, and systematic Docker containerization ensures that
                  any engineering team member can spin up, test, and extend a service without friction.
                </p>
                <p>
                  <strong>March – June 2027 Goal:</strong> To complete my 3rd year of B.Sc., I am actively looking for
                  a <strong>13-week internship (March 1 – June 4, 2027)</strong>. I am highly motivated to complete
                  this internship internationally — especially in{' '}
                  <strong className="text-cyan-400">Poland</strong> or{' '}
                  <strong className="text-cyan-400">Portugal</strong> (supported by an{' '}
                  <strong>Erasmus+ mobility grant</strong>) — or within an ambitious software team in{' '}
                  <strong className="text-cyan-400">France</strong>, before pursuing a Master&apos;s degree in Software
                  Engineering.
                </p>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
