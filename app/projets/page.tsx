'use client';

import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Projets() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 md:p-24 pb-0 md:pb-0 flex flex-col items-center w-full">
      <div className="max-w-5xl w-full space-y-20 mb-20">
        {/* Titre de la page */}
        <section className="border-b border-slate-800 pb-6">
          <h2 className="text-3xl font-bold text-cyan-400">
            {lang === 'fr' ? 'Mes Réalisations & Architectures' : 'Featured Projects & Architectures'}
          </h2>
          <p className="text-slate-400 mt-2">
            {lang === 'fr'
              ? 'Découvrez mes projets récents de BUT 3 (architectures temps réel, SaaS multi-tenant, Docker) ainsi que mon projet de stage.'
              : 'Explore my recent 3rd-year Computer Science projects (real-time systems, multi-tenant SaaS, Docker) and my internship work.'}
          </p>
        </section>

        {/* =====================================================================
            PROJET 1 : MMORPG 2D MYTHOLOGIE GRECQUE (BUT 3)
           ===================================================================== */}
        <article className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-l-4 border-cyan-500 pl-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-2xl font-bold text-slate-100">
                  {lang === 'fr'
                    ? 'MMORPG 2D Temps Réel — Mythologie Grecque'
                    : 'Real-Time 2D MMORPG — Greek Mythology'}
                </h3>
                <span className="bg-cyan-950 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded border border-cyan-800">
                  BUT 3 • SAÉ
                </span>
              </div>
              <p className="text-sm text-cyan-400 font-medium mt-1">
                {lang === 'fr'
                  ? 'Octobre — Novembre 2026 | Architecture Monorepo & Multijoueur Réseau'
                  : 'October — November 2026 | Monorepo Architecture & Real-Time Multiplayer'}
              </p>
            </div>
            <a
              href="https://github.com/Meqle/SAE-BUT3-mmorpg-mythologie-grecque"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start md:self-center inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-cyan-400 text-xs font-semibold px-4 py-2 rounded-lg border border-slate-800 transition-colors"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {lang === 'fr' ? 'Voir le dépôt GitHub' : 'View on GitHub'}
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              'TypeScript (Monorepo)',
              'React & Vite',
              'PixiJS (WebGL 2D)',
              'Node.js',
              'WebSocket',
              'PostgreSQL / PLpgSQL',
              'Docker Compose',
              'Nginx Reverse Proxy',
            ].map((tag) => (
              <span
                key={tag}
                className="bg-slate-950 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-4 text-slate-300 leading-relaxed max-w-4xl">
            {lang === 'fr' ? (
              <>
                <p>
                  <strong className="text-white">Le Défi :</strong> Concevoir en équipe un jeu de rôle multijoueur en
                  ligne (MMORPG 2D) fluide dans le navigateur, combinant une exploration en vue de dessus (top-down)
                  et des phases de plateforme en vue de profil, avec synchronisation temps réel des joueurs par salle.
                </p>
                <p>
                  <strong className="text-white">Architecture & Déploiement :</strong> Le projet est structuré en{' '}
                  <span className="text-cyan-400">Monorepo TypeScript</span> divisé en trois briques :{' '}
                  <code>packages/client</code> (interface React et moteur graphique 2D PixiJS),{' '}
                  <code>packages/server</code> (serveur WebSocket Node.js gérant l&apos;état du monde, les salles et
                  les limites anti-abus) et <code>packages/shared</code> (contrats d&apos;interfaces et types
                  partagés). La persistance est modélisée sous <span className="text-cyan-400">PostgreSQL</span>.
                </p>
                <p>
                  <strong className="text-white">Sécurité & Conteneurisation :</strong> L&apos;ensemble est orchestré
                  via <span className="text-cyan-400">Docker Compose</span>. Le serveur backend n&apos;est jamais
                  exposé directement sur l&apos;hôte : seul le conteneur client/Nginx est publié et relaie les flux
                  HTTP et WebSocket sur le réseau interne Docker, avec contrôle strict des origines, de la cadence et
                  de la taille des messages.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong className="text-white">The Challenge:</strong> Design and build a browser-based 2D online
                  multiplayer role-playing game (MMORPG) combining top-down exploration and side-scrolling platformer
                  phases, with low-latency real-time room synchronization across players.
                </p>
                <p>
                  <strong className="text-white">Architecture & Engineering:</strong> Built as a strict{' '}
                  <span className="text-cyan-400">TypeScript Monorepo</span> split into three packages:{' '}
                  <code>packages/client</code> (React UI + PixiJS 2D WebGL rendering engine),{' '}
                  <code>packages/server</code> (Node.js WebSocket server handling world state, lobbies, and rate
                  limiting), and <code>packages/shared</code> (shared TypeScript contracts and packet schemas), backed
                  by <span className="text-cyan-400">PostgreSQL</span>.
                </p>
                <p>
                  <strong className="text-white">Security & Containerization:</strong> Fully containerized with{' '}
                  <span className="text-cyan-400">Docker Compose</span>. The game server port is isolated within the
                  internal Docker network; only the Nginx reverse-proxy container is exposed to relay HTTP and
                  WebSocket traffic, paired with origin validation, payload size limits, and anti-abuse throttling.
                </p>
              </>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-cyan-400 uppercase">1. Monorepo & Types Partagés</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'fr'
                  ? 'Partage de 100 % des contrats réseau via packages/shared pour garantir la cohérence de typage entre le client PixiJS/React et le serveur WebSocket.'
                  : '100% shared network contracts via packages/shared ensuring compile-time type safety between the PixiJS/React client and the WebSocket server.'}
              </p>
            </div>
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-emerald-400 uppercase">2. Réseau Temps Réel & PixiJS</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'fr'
                  ? 'Rendu 2D fluide sous PixiJS avec transitions de vue (top-down / profil) et synchronisation multi-salles par WebSockets.'
                  : 'Smooth 2D WebGL rendering with PixiJS featuring top-down/side-view transitions and multi-room WebSocket state synchronization.'}
              </p>
            </div>
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-amber-400 uppercase">3. Isolation Docker & Nginx</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'fr'
                  ? 'Architecture réseau isolée : reverse proxy Nginx en frontal relayant HTTP et WebSocket vers le serveur Node.js interne.'
                  : 'Isolated container network: front-facing Nginx reverse proxy relaying HTTP and WebSocket streams to the internal Node.js service.'}
              </p>
            </div>
          </div>
        </article>

        {/* =====================================================================
            PROJET 2 : BOMBERMAN ARENA (BUT 3 — QUALITÉ DE DÉVELOPPEMENT)
           ===================================================================== */}
        <article className="space-y-8 pt-12 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-l-4 border-emerald-500 pl-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-2xl font-bold text-slate-100">
                  {lang === 'fr'
                    ? 'Bomberman Arena — Client Desktop & Serveur Autoritaire'
                    : 'Bomberman Arena — Desktop Client & Authoritative Server'}
                </h3>
                <span className="bg-emerald-950 text-emerald-300 text-xs font-semibold px-2.5 py-0.5 rounded border border-emerald-800">
                  {lang === 'fr' ? 'BUT 3 • Qualité de Dev' : 'BUT 3 • Software Quality'}
                </span>
              </div>
              <p className="text-sm text-emerald-400 font-medium mt-1">
                {lang === 'fr'
                  ? 'Octobre — Novembre 2026 | Electron, Socket.io, Docker & Tests Automatisés'
                  : 'October — November 2026 | Electron, Socket.io, Docker & Automated Testing'}
              </p>
            </div>
            <a
              href="https://github.com/Luzzz17/bomberman-arena"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start md:self-center inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-emerald-400 text-xs font-semibold px-4 py-2 rounded-lg border border-slate-800 transition-colors"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {lang === 'fr' ? 'Voir le dépôt GitHub' : 'View on GitHub'}
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              'TypeScript (Monorepo)',
              'Electron (Desktop App)',
              'Node.js 22',
              'Socket.io',
              'Docker Compose',
              'Unit & Integration Tests',
              'ESLint / Prettier / Typecheck',
            ].map((tag) => (
              <span
                key={tag}
                className="bg-slate-950 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-4 text-slate-300 leading-relaxed max-w-4xl">
            {lang === 'fr' ? (
              <>
                <p>
                  <strong className="text-white">Le Défi :</strong> Développer un jeu multijoueur en réseau inspiré de
                  Bomberman en appliquant les standards industriels de <strong>Qualité de Développement</strong> :
                  séparation stricte Client-Serveur, documentation formelle du protocole WebSocket (
                  <code>docs/protocol.md</code>) et couverture de tests automatisés.
                </p>
                <p>
                  <strong className="text-white">L&apos;Approche Technique :</strong> Le moteur de jeu s&apos;exécute
                  côté serveur (<span className="text-emerald-400">Node.js & Socket.io</span>) dans un conteneur{' '}
                  <span className="text-emerald-400">Docker</span> isolé afin de garantir un état de jeu autoritaire
                  (gestion des collisions, explosions en chaîne, bonus et ticks réseau). Le client est une application
                  de bureau hybride packagée avec <span className="text-emerald-400">Electron et TypeScript</span>,
                  consommant le module partagé <code>shared/</code>.
                </p>
                <p>
                  <strong className="text-white">Qualité Logicielle & Tests :</strong> Mise en place de suites de
                  tests unitaires et d&apos;intégration dédiées sur le serveur et le client (<code>npm test</code>),
                  associées à une validation stricte du style (Linter) et du typage TypeScript (<code>typecheck</code>)
                  avant chaque fusion sur la branche <code>develop</code>.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong className="text-white">The Challenge:</strong> Build a networked multiplayer Bomberman game
                  adhering to strict <strong>Software Quality Engineering</strong> standards: clean Client-Server
                  decoupling, formal WebSocket protocol specification (<code>docs/protocol.md</code>), and automated
                  test suites.
                </p>
                <p>
                  <strong className="text-white">Technical Approach:</strong> The authoritative game engine runs
                  server-side (<span className="text-emerald-400">Node.js & Socket.io</span>) inside an isolated{' '}
                  <span className="text-emerald-400">Docker</span> container (managing grid collisions, chain
                  explosions, power-ups, and server ticks). The frontend is a cross-platform desktop application built
                  with <span className="text-emerald-400">Electron and TypeScript</span>, sharing protocol constants
                  via the <code>shared/</code> module.
                </p>
                <p>
                  <strong className="text-white">Testing & Quality Gates:</strong> Implemented dedicated unit and
                  integration test suites across both server and client packages (<code>npm test</code>), enforced
                  with automated linting and strict TypeScript type-checking (<code>typecheck</code>) on the{' '}
                  <code>develop</code> workflow.
                </p>
              </>
            )}
          </div>
        </article>

        {/* =====================================================================
            PROJET 3 : TASKFLOW — PLATEFORME SAAS MULTI-ENTREPRISE (BUT 3)
           ===================================================================== */}
        <article className="space-y-8 pt-12 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-l-4 border-purple-500 pl-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-2xl font-bold text-slate-100">
                  {lang === 'fr'
                    ? 'TaskFlow — Application SaaS Multi-Entreprise (Kanban)'
                    : 'TaskFlow — Multi-Tenant SaaS Project Management App'}
                </h3>
                <span className="bg-purple-950 text-purple-300 text-xs font-semibold px-2.5 py-0.5 rounded border border-purple-800">
                  BUT 3 • SaaS & NoSQL
                </span>
              </div>
              <p className="text-sm text-purple-400 font-medium mt-1">
                {lang === 'fr'
                  ? 'Novembre 2026 | Vue 3, Node.js (Express 5), MongoDB 8, JWT & Docker Multi-Stage'
                  : 'November 2026 | Vue 3, Node.js (Express 5), MongoDB 8, JWT & Multi-Stage Docker'}
              </p>
            </div>
            <a
              href="https://github.com/Meqle/TaskFlow_Projet_SaaS"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start md:self-center inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-purple-400 text-xs font-semibold px-4 py-2 rounded-lg border border-slate-800 transition-colors"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {lang === 'fr' ? 'Voir le dépôt GitHub' : 'View on GitHub'}
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              'Vue 3 (Vite & SortableJS)',
              'Node.js (Express 5)',
              'MongoDB 8 (Mongoose)',
              'Multi-Tenant Isolation',
              'JWT & RBAC',
              'Multi-Stage Dockerfile',
              'Docker Compose',
            ].map((tag) => (
              <span
                key={tag}
                className="bg-slate-950 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-4 text-slate-300 leading-relaxed max-w-4xl">
            {lang === 'fr' ? (
              <>
                <p>
                  <strong className="text-white">Le Défi :</strong> Concevoir une plateforme SaaS multi-entreprise de
                  gestion de projets et de tâches avec tableau Kanban interactif (Drag & Drop), garantissant une
                  étanchéité totale des données entre les différentes organisations clientes.
                </p>
                <p>
                  <strong className="text-white">Isolation Multi-Tenant & Sécurité :</strong> Développement d&apos;une
                  API REST sous <span className="text-purple-400">Express 5 et Mongoose (MongoDB 8)</span> intégrant un
                  plugin d&apos;isolation automatique par locataire (tenant) et des middlewares de contrôle
                  d&apos;accès par rôle (<span className="text-purple-400">JWT & RBAC</span> : Super-Admin plateforme,
                  Admin d&apos;entreprise, Membre).
                </p>
                <p>
                  <strong className="text-white">Industrialisation Docker :</strong> L&apos;application démarre sans
                  aucune dépendance locale via <code>docker compose up -d --build</code>. Un{' '}
                  <span className="text-purple-400">Dockerfile multi-étapes</span> compile le frontend{' '}
                  <span className="text-purple-400">Vue 3</span>, construit l&apos;image Express, attend le healthcheck
                  de MongoDB 8, puis initialise automatiquement les index et le jeu de données de démonstration.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong className="text-white">The Challenge:</strong> Architect and build a multi-company SaaS
                  project management tool featuring an interactive drag-and-drop Kanban board, ensuring strict data
                  isolation between tenant organizations.
                </p>
                <p>
                  <strong className="text-white">Multi-Tenant Isolation & RBAC Security:</strong> Developed a REST API
                  with <span className="text-purple-400">Express 5 and Mongoose (MongoDB 8)</span> featuring a custom
                  Mongoose tenant-isolation plugin and role-based access middlewares (
                  <span className="text-purple-400">JWT & RBAC</span>: Platform Super-Admin, Company Admin, Member).
                </p>
                <p>
                  <strong className="text-white">Zero-Config Docker Deployment:</strong> Deploys with a single{' '}
                  <code>docker compose up -d --build</code> command requiring no local Node or MongoDB install. A{' '}
                  <span className="text-purple-400">multi-stage Dockerfile</span> compiles the{' '}
                  <span className="text-purple-400">Vue 3</span> SPA, packages the Express server, waits for the
                  MongoDB 8 container healthcheck, and automatically creates indexes and demo seed data.
                </p>
              </>
            )}
          </div>
        </article>

        {/* =====================================================================
            PROJET 4 : PINK STUDIO AMIENS (STAGE BUT 2)
           ===================================================================== */}
        <article className="space-y-10 pt-12 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-l-4 border-pink-500 pl-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-2xl font-bold text-slate-100">
                  {lang === 'fr'
                    ? 'Plateforme Web & Back-Office — "Pink Studio Amiens"'
                    : 'Dynamic Web Platform & Back-Office — "Pink Studio Amiens"'}
                </h3>
                <span className="bg-pink-950 text-pink-300 text-xs font-semibold px-2.5 py-0.5 rounded border border-pink-800">
                  {lang === 'fr' ? 'Stage BUT 2 • Solo' : '2nd-Year Internship • Sole Dev'}
                </span>
              </div>
              <p className="text-sm text-pink-400 font-medium mt-1">
                {lang === 'fr'
                  ? 'Janvier — Mars 2026 | Conception Full-Stack en Autonomie Complète'
                  : 'January — March 2026 | End-to-End Full-Stack Development in Complete Autonomy'}
              </p>
            </div>
            <span className="self-start md:self-center bg-slate-950 text-slate-400 text-xs px-3 py-1 rounded-full border border-slate-800">
              PHP, MySQL, HTML5/CSS3, phpMyAdmin
            </span>
          </div>

          <div className="space-y-6 text-slate-300 leading-relaxed max-w-4xl">
            {lang === 'fr' ? (
              <>
                <p>
                  <strong className="text-white">Le Défi :</strong> Lors de mon stage au salon{' '}
                  <em>Pink Studio Amiens</em>, ma mission était de concevoir de A à Z un site web complet et
                  administrable. En tant qu&apos;unique développeur, j&apos;ai pris en charge la totalité du cycle :
                  recueil du besoin client, modélisation des données relationnelles, interface publique et back-office
                  d&apos;administration sécurisé.
                </p>
                <p>
                  <strong className="text-white">L&apos;Approche Rigoureuse :</strong> La structure SQL devait
                  garantir une liaison flexible entre les artistes, leurs styles et les œuvres via des tables
                  associatives. J&apos;ai structuré le backend en <span className="text-cyan-400">PHP</span> en
                  séparant strictement la logique de traitement, l&apos;administration sécurisée (CRUD + upload
                  d&apos;images contrôlé) et l&apos;affichage dynamique.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong className="text-white">The Challenge:</strong> During my internship at{' '}
                  <em>Pink Studio Amiens</em>, I was tasked with designing and delivering a complete dynamic website
                  from scratch. As the sole developer on site, I owned the entire software lifecycle: requirements
                  gathering, relational database modeling, public gallery UI, and a secure admin back-office.
                </p>
                <p>
                  <strong className="text-white">Engineering Approach:</strong> Designed a normalized MySQL schema
                  linking artists, tattoo styles, and artworks through junction tables. Built a clean{' '}
                  <span className="text-cyan-400">PHP</span> backend strictly separating data processing, authenticated
                  CRUD administration (including validated image uploads), and dynamic frontend filtering.
                </p>
              </>
            )}
          </div>

          {/* GALERIE DES PREUVES TECHNIQUES */}
          <section className="space-y-8 pt-2">
            <div className="grid md:grid-cols-2 gap-8">
              {/* CARTE 1 : L'ESPACE ADMIN (site-admin.png) */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      {lang === 'fr'
                        ? 'Aperçu 1 : Back-Office Administrateur (CRUD)'
                        : 'Preview 1: Admin Back-Office Interface (CRUD)'}
                    </h4>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900 aspect-video flex items-center justify-center group">
                    <Image
                      src="/site-admin.png"
                      alt="Interface d'administration CRUD du site Pink Studio"
                      width={800}
                      height={450}
                      className="opacity-95 group-hover:opacity-100 transition-opacity duration-300 object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-normal bg-slate-900/50 p-3 rounded-md border border-slate-800/50 mt-4">
                  💡{' '}
                  {lang === 'fr' ? (
                    <>
                      <span className="font-semibold text-slate-300">CRUD Complet :</span> Espace sécurisé permettant
                      au gérant d&apos;ajouter des œuvres, d&apos;associer des styles et de gérer les artistes en
                      toute autonomie.
                    </>
                  ) : (
                    <>
                      <span className="font-semibold text-slate-300">Full CRUD Back-Office:</span> Authenticated
                      dashboard allowing the studio manager to upload artworks, link styles, and manage artists without
                      touching code.
                    </>
                  )}
                </p>
              </div>

              {/* CARTE 2 : LA GALERIE PUBLIQUE (site-galerie.png) */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      {lang === 'fr'
                        ? 'Aperçu 2 : Galerie Grand Public & Filtres Dynamiques'
                        : 'Preview 2: Public Gallery & Dynamic Filtering'}
                    </h4>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900 aspect-video flex items-center justify-center group">
                    <Image
                      src="/site-galerie.png"
                      alt="Galerie utilisateur avec filtres dynamiques"
                      width={800}
                      height={450}
                      className="opacity-95 group-hover:opacity-100 transition-opacity duration-300 object-cover"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-normal bg-slate-900/50 p-3 rounded-md border border-slate-800/50 mt-4">
                  💡{' '}
                  {lang === 'fr' ? (
                    <>
                      <span className="font-semibold text-slate-300">Affichage Dynamique :</span> Cartes générées
                      depuis MySQL avec filtrage combiné par artiste et par style.
                    </>
                  ) : (
                    <>
                      <span className="font-semibold text-slate-300">Dynamic Rendering:</span> Responsive gallery cards
                      populated from MySQL with multi-criteria filtering by artist and style.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* CARTE 3 & 4 : ARCHITECTURE DE CODE & BDD */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      {lang === 'fr'
                        ? 'Aperçu 3 : Structure du Code & Variables CSS'
                        : 'Preview 3: Code Structure & CSS Architecture'}
                    </h4>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900 aspect-video flex items-start group">
                    <Image
                      src="/vscode-architecture.png"
                      alt="Architecture des dossiers PHP et structure CSS sous VS Code"
                      width={800}
                      height={450}
                      className="opacity-95 group-hover:opacity-100 transition-opacity duration-300 object-cover object-top w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-normal bg-slate-900/50 p-3 rounded-md border border-slate-800/50">
                  💡{' '}
                  {lang === 'fr'
                    ? 'Séparation modulaire des traitements PHP (includes) et système de design unifié par variables CSS.'
                    : 'Modular separation of PHP processing scripts (includes) and unified CSS custom properties.'}
                </p>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-2 w-2 rounded-full bg-slate-400"></div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      {lang === 'fr'
                        ? 'Aperçu 4 : Modèle Relationnel SQL (phpMyAdmin)'
                        : 'Preview 4: Relational SQL Schema (phpMyAdmin)'}
                    </h4>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900 aspect-video flex items-center justify-center p-2 group">
                    <Image
                      src="/phpmyadmin.png"
                      alt="Base de données relationnelle sous phpMyAdmin"
                      width={800}
                      height={450}
                      className="opacity-95 group-hover:opacity-100 transition-opacity duration-300 object-contain w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-normal bg-slate-900/50 p-3 rounded-md border border-slate-800/50">
                  💡{' '}
                  {lang === 'fr'
                    ? 'Tables entités (artistes, tatouages, utilisateurs) et table pivot (tatouage_styles) sans redondance.'
                    : 'Normalized entity tables (artists, tattoos, users) and associative junction table (tatouage_styles).'}
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
