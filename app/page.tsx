'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import { useLanguage } from './context/LanguageContext';

export default function PortfolioDeck() {
  const { lang } = useLanguage();
  const [activeSection, setActiveSection] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [activeMmorpgTab, setActiveMmorpgTab] = useState(0);
  const [activeBombermanTab, setActiveBombermanTab] = useState(0);
  const [activePinkTab, setActivePinkTab] = useState(0);
  const [activeTaskflowTab, setActiveTaskflowTab] = useState(0);
  const [hoverProgress, setHoverProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 500, y: 300 });

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const hoverTimerRef = useRef<number | null>(null);

  const sections =
    lang === 'fr'
      ? [
          { id: 'intro', num: '01', label: 'Introduction' },
          { id: 'projets', num: '02', label: 'Réalisations' },
          { id: 'architecture', num: '03', label: 'Stack & Architecture' },
          { id: 'parcours', num: '04', label: 'Parcours' },
          { id: 'contact', num: '05', label: 'Contact' },
        ]
      : [
          { id: 'intro', num: '01', label: 'Overview' },
          { id: 'projets', num: '02', label: 'Selected Work' },
          { id: 'architecture', num: '03', label: 'Stack & Systems' },
          { id: 'parcours', num: '04', label: 'Background' },
          { id: 'contact', num: '05', label: 'Contact' },
        ];

  const scrollToSection = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, 4));
    const el = sectionRefs.current[clamped];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(clamped);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            if (!Number.isNaN(idx)) {
              setActiveSection(idx);
            }
          }
        });
      },
      { threshold: 0.45 }
    );

    sectionRefs.current.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (activeSection < 4) {
          e.preventDefault();
          scrollToSection(activeSection + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (activeSection > 0) {
          e.preventDefault();
          scrollToSection(activeSection - 1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, scrollToSection]);

  const handleBottomZoneEnter = () => {
    if (activeSection >= 4) return;
    const startTime = performance.now();
    const duration = 550;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setHoverProgress(pct);
      if (pct < 100) {
        hoverTimerRef.current = requestAnimationFrame(tick);
      } else {
        setHoverProgress(0);
        scrollToSection(activeSection + 1);
      }
    };

    hoverTimerRef.current = requestAnimationFrame(tick);
  };

  const handleBottomZoneLeave = () => {
    if (hoverTimerRef.current) {
      cancelAnimationFrame(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setHoverProgress(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'd6f70cfb-73bf-4c05-8b71-919a846daf33',
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const projects =
    lang === 'fr'
      ? [
          {
            num: '01',
            title: 'MMORPG 2D Temps Réel',
            subtitle: 'Monorepo TypeScript, WebSocket & Moteur 2D PixiJS',
            year: '2026',
            context: 'Projet BUT 3',
            repo: 'https://github.com/Meqle/SAE-BUT3-mmorpg-mythologie-grecque',
            stack: ['TypeScript', 'React', 'PixiJS', 'Node.js', 'WebSocket', 'PostgreSQL', 'Docker Compose', 'Nginx'],
            summary:
              "Conception d'un jeu de rôle multijoueur en ligne mêlant exploration en vue de dessus et phases de plateforme en vue de profil. Le projet repose sur une architecture Monorepo garantissant le partage strict des contrats de typage entre le client graphique et le serveur temps réel.",
            points: [
              {
                label: 'Contrat réseau partagé',
                text: "Module TypeScript commun définissant l'ensemble des paquets, états de salles et entités synchronisées entre le client et le serveur.",
              },
              {
                label: 'Serveur temps réel & anti-abus',
                text: "Synchronisation basse latence par WebSocket avec gestion des salons, contrôle de cadence des paquets et limitation de taille des messages.",
              },
              {
                label: 'Isolation Docker & Reverse Proxy',
                text: 'Seul le conteneur Nginx est exposé sur la machine hôte ; il relaie les flux HTTP et WebSocket vers le serveur Node.js isolé sur le réseau interne.',
              },
            ],
            archNodes: [
              { title: 'Client Web', detail: 'React · Vite · PixiJS WebGL' },
              { title: 'Reverse Proxy', detail: 'Nginx :8080 · HTTP & WS' },
              { title: 'Serveur Temps Réel', detail: 'Node.js :3001 · Salles & État' },
              { title: 'Persistance & Types', detail: 'PostgreSQL · packages/shared' },
            ],
            command: 'docker compose up --build',
          },
          {
            num: '02',
            title: 'Bomberman Arena',
            subtitle: 'Client Desktop Electron, Serveur Autoritaire & Tests Automatisés',
            year: '2026',
            context: 'Qualité de Développement BUT 3',
            repo: 'https://github.com/Luzzz17/bomberman-arena',
            stack: ['TypeScript', 'Electron', 'Node.js', 'Socket.io', 'Docker', 'Tests Unitaires & Intégration'],
            summary:
              "Développement d'un jeu d'arène multijoueur en réseau axé sur l'ingénierie de la qualité logicielle. La logique du jeu s'exécute intégralement sur un serveur autoritaire conteneurisé afin de garantir la cohérence de l'état de la partie entre les clients de bureau Electron.",
            points: [
              {
                label: 'Moteur serveur autoritaire',
                text: 'Calcul centralisé des déplacements, collisions, explosions en chaîne et apparitions de bonus sur le serveur Node.js / Socket.io.',
              },
              {
                label: 'Protocole réseau spécifié',
                text: 'Documentation technique formelle du protocole WebSocket et partage des constantes via un module commun au sein du monorepo.',
              },
              {
                label: 'Couverture de tests & validation',
                text: "Suites de tests unitaires et d'intégration dédiées côté client et côté serveur, associées au linting et à la vérification stricte du typage.",
              },
            ],
            archNodes: [
              { title: 'Client Desktop', detail: 'Electron · TypeScript' },
              { title: 'Protocole Partagé', detail: 'shared/ · Contrats Socket.io' },
              { title: 'Serveur Autoritaire', detail: 'Node.js 22 · Conteneur Docker' },
              { title: 'Pipeline Qualité', detail: 'Tests Unitaires · Linter · Typecheck' },
            ],
            command: 'npm --prefix server test && npm --prefix client run typecheck',
          },
          {
            num: '03',
            title: 'TaskFlow SaaS',
            subtitle: 'Plateforme Kanban Multi-Entreprise avec Isolation NoSQL',
            year: '2026',
            context: 'Architecture SaaS & NoSQL BUT 3',
            repo: 'https://github.com/Meqle/TaskFlow_Projet_SaaS',
            stack: ['Vue 3', 'Node.js', 'Express 5', 'MongoDB 8', 'Mongoose', 'JWT & RBAC', 'Docker Multi-Stage'],
            summary:
              "Application web SaaS permettant à plusieurs entreprises clientes de gérer leurs projets et tableaux Kanban sur une même instance applicative tout en garantissant un cloisonnement strict des données entre organisations.",
            points: [
              {
                label: 'Cloisonnement Multi-Tenant',
                text: "Plugin Mongoose d'isolation automatique filtrant chaque requête selon l'identifiant d'entreprise extrait du contexte d'authentification.",
              },
              {
                label: 'Contrôle d’accès par rôles',
                text: "Authentification par jetons JWT et gestion granulaire des permissions sur trois niveaux : super-administrateur plateforme, administrateur d'entreprise et membre.",
              },
              {
                label: 'Build Docker multi-étapes',
                text: "Compilation de l'interface Vue 3 puis assemblage du serveur Express dans une image unique, orchestrée avec MongoDB 8, test de disponibilité et initialisation automatique.",
              },
            ],
            archNodes: [
              { title: 'Interface Kanban', detail: 'Vue 3 · Vite · SortableJS' },
              { title: 'Sécurité API', detail: 'Express 5 · JWT · Rôles RBAC' },
              { title: 'Isolation Tenant', detail: 'Plugin Mongoose par entreprise' },
              { title: 'Base Documentaire', detail: 'MongoDB 8 · Index & Seed auto' },
            ],
            command: 'docker compose up -d --build',
          },
          {
            num: '04',
            title: 'Pink Studio Amiens',
            subtitle: 'Plateforme Web Dynamique & Back-Office Administrateur',
            year: '2026',
            context: 'Stage de BUT 2 en autonomie',
            repo: null,
            stack: ['PHP', 'MySQL', 'Architecture Modulaire', 'HTML5 & CSS3', 'CRUD Administrateur'],
            summary:
              "Réalisation complète en autonomie du site vitrine dynamique et de l'interface d'administration d'un salon de tatouage lors de mon stage de deuxième année. Prise en charge de l'ensemble du cycle, du recueil du besoin client à la mise en place de la base relationnelle.",
            points: [
              {
                label: 'Administration complète',
                text: "Création d'un back-office sécurisé permettant au gérant d'administrer les artistes, les styles et la galerie d'œuvres avec validation des fichiers téléversés.",
              },
              {
                label: 'Modélisation relationnelle',
                text: 'Base de données MySQL normalisée reposant sur des tables associatives pour croiser dynamiquement artistes et styles sans redondance.',
              },
              {
                label: 'Filtrage dynamique',
                text: 'Galerie publique fluide générée côté serveur avec système de filtres combinés et architecture CSS structurée par variables globales.',
              },
            ],
            archNodes: [],
            command: null,
          },
        ]
      : [
          {
            num: '01',
            title: 'Real-Time 2D MMORPG',
            subtitle: 'TypeScript Monorepo, WebSocket Server & PixiJS 2D Engine',
            year: '2026',
            context: '3rd-Year Capstone Project',
            repo: 'https://github.com/Meqle/SAE-BUT3-mmorpg-mythologie-grecque',
            stack: ['TypeScript', 'React', 'PixiJS', 'Node.js', 'WebSocket', 'PostgreSQL', 'Docker Compose', 'Nginx'],
            summary:
              'Browser-based multiplayer 2D role-playing game combining top-down world exploration and side-scrolling platformer phases. Architected as a TypeScript monorepo enforcing compile-time type contracts between the WebGL client and the real-time server.',
            points: [
              {
                label: 'Shared network contracts',
                text: 'Dedicated shared package defining all packet schemas, room states, and entity interfaces across client and server.',
              },
              {
                label: 'Low-latency synchronization',
                text: 'Custom WebSocket server managing multi-room state synchronization, packet rate limiting, and payload size guards.',
              },
              {
                label: 'Isolated Docker topology',
                text: 'Only the Nginx reverse-proxy container is exposed on the host, relaying HTTP and WebSocket streams to the internal Node.js service.',
              },
            ],
            archNodes: [
              { title: 'Web Client', detail: 'React · Vite · PixiJS WebGL' },
              { title: 'Reverse Proxy', detail: 'Nginx :8080 · HTTP & WS' },
              { title: 'Game Server', detail: 'Node.js :3001 · Rooms & State' },
              { title: 'Data & Contracts', detail: 'PostgreSQL · packages/shared' },
            ],
            command: 'docker compose up --build',
          },
          {
            num: '02',
            title: 'Bomberman Arena',
            subtitle: 'Electron Desktop Client, Authoritative Server & Automated Testing',
            year: '2026',
            context: 'Software Quality Engineering',
            repo: 'https://github.com/Luzzz17/bomberman-arena',
            stack: ['TypeScript', 'Electron', 'Node.js', 'Socket.io', 'Docker', 'Unit & Integration Tests'],
            summary:
              'Networked multiplayer arena game built with a strict focus on software quality engineering. All game physics and rules run on an authoritative Dockerized server to ensure deterministic state synchronization across Electron desktop clients.',
            points: [
              {
                label: 'Authoritative server engine',
                text: 'Server-side computation of grid movement, collisions, chain explosions, and power-up spawns using Node.js and Socket.io.',
              },
              {
                label: 'Formal protocol specification',
                text: 'Documented WebSocket communication protocol paired with shared TypeScript constants across the monorepo.',
              },
              {
                label: 'Automated quality gates',
                text: 'Unit and integration test suites for both server and client packages, backed by strict linting and static type checking.',
              },
            ],
            archNodes: [
              { title: 'Desktop Client', detail: 'Electron · TypeScript' },
              { title: 'Shared Protocol', detail: 'shared/ · Socket.io Contracts' },
              { title: 'Authoritative Server', detail: 'Node.js 22 · Docker Container' },
              { title: 'Quality Pipeline', detail: 'Unit Tests · Linter · Typecheck' },
            ],
            command: 'npm --prefix server test && npm --prefix client run typecheck',
          },
          {
            num: '03',
            title: 'TaskFlow SaaS',
            subtitle: 'Multi-Tenant Kanban Platform with NoSQL Data Isolation',
            year: '2026',
            context: 'SaaS & NoSQL Architecture',
            repo: 'https://github.com/Meqle/TaskFlow_Projet_SaaS',
            stack: ['Vue 3', 'Node.js', 'Express 5', 'MongoDB 8', 'Mongoose', 'JWT & RBAC', 'Multi-Stage Docker'],
            summary:
              'Multi-company SaaS project management application featuring an interactive drag-and-drop Kanban board. Designed to serve multiple client organizations from a single deployment with strict tenant data isolation.',
            points: [
              {
                label: 'Multi-tenant isolation',
                text: 'Custom Mongoose plugin and request middlewares automatically scoping every database operation to the authenticated company context.',
              },
              {
                label: 'Role-based access control',
                text: 'JWT authentication with three hierarchical permission tiers: platform super-admin, company admin, and team member.',
              },
              {
                label: 'Multi-stage Docker build',
                text: 'Single-command deployment compiling the Vue 3 frontend, packaging the Express 5 API, verifying MongoDB 8 healthchecks, and seeding initial data.',
              },
            ],
            archNodes: [
              { title: 'Kanban SPA', detail: 'Vue 3 · Vite · SortableJS' },
              { title: 'API Security', detail: 'Express 5 · JWT · RBAC Roles' },
              { title: 'Tenant Scoping', detail: 'Custom Mongoose Isolation Plugin' },
              { title: 'Document Store', detail: 'MongoDB 8 · Auto Index & Seed' },
            ],
            command: 'docker compose up -d --build',
          },
          {
            num: '04',
            title: 'Pink Studio Amiens',
            subtitle: 'Dynamic Web Platform & Custom Admin Back-Office',
            year: '2026',
            context: '2nd-Year Internship · Sole Developer',
            repo: null,
            stack: ['PHP', 'MySQL', 'Modular Architecture', 'HTML5 & CSS3', 'Admin CRUD'],
            summary:
              'End-to-end design and development of a dynamic showcase platform and administration back-office during my second-year internship. Delivered autonomously from client requirements and SQL schema design to deployment.',
            points: [
              {
                label: 'Custom CRUD back-office',
                text: 'Authenticated administration interface enabling the studio manager to manage artists, styles, and gallery items with validated image uploads.',
              },
              {
                label: 'Relational database schema',
                text: 'Normalized MySQL schema using associative junction tables to link artists, styles, and artworks without data redundancy.',
              },
              {
                label: 'Dynamic multi-filter gallery',
                text: 'Server-rendered public gallery with multi-criteria filtering and a maintainable CSS architecture built on custom properties.',
              },
            ],
            archNodes: [],
            command: null,
          },
        ];

  const pinkScreenshots =
    lang === 'fr'
      ? [
          {
            label: '01. Galerie publique',
            src: '/site-galerie.png',
            caption: 'Rendu côté client avec filtrage dynamique par artiste et par style depuis MySQL.',
          },
          {
            label: '02. Back-office CRUD',
            src: '/site-admin.png',
            caption: "Interface d'administration sécurisée pour l'ajout d'œuvres, d'artistes et de styles.",
          },
          {
            label: '03. Structure du code',
            src: '/vscode-architecture.png',
            caption: 'Séparation modulaire des scripts de traitement PHP et variables CSS globales.',
          },
          {
            label: '04. Schéma relationnel',
            src: '/phpmyadmin.png',
            caption: 'Modélisation MySQL incluant les tables entités et la table associative pivot.',
          },
        ]
      : [
          {
            label: '01. Public Gallery',
            src: '/site-galerie.png',
            caption: 'Public gallery view featuring dynamic multi-criteria filtering powered by MySQL.',
          },
          {
            label: '02. Admin CRUD',
            src: '/site-admin.png',
            caption: 'Authenticated administration dashboard for managing artworks, artists, and styles.',
          },
          {
            label: '03. Code Structure',
            src: '/vscode-architecture.png',
            caption: 'Modular separation of PHP processing scripts and global CSS custom properties.',
          },
          {
            label: '04. Relational Schema',
            src: '/phpmyadmin.png',
            caption: 'Normalized MySQL database schema showing entity tables and associative junction table.',
          },
        ];

  const mmorpgScreenshots =
    lang === 'fr'
      ? [
          {
            label: '01. Cité de l’Agora',
            src: '/mmorpg-agora.jpg',
            caption: 'Place centrale de l’Agora avec mini-carte temps réel, suivi des quêtes et barre de compétences PixiJS.',
          },
          {
            label: '02. Quartier & Taverne',
            src: '/mmorpg-taverne.jpg',
            caption: 'Exploration en vue de dessus avec transitions de zones, PNJ interactifs et bâtiments accessibles.',
          },
          {
            label: '03. Port & Infirmerie',
            src: '/mmorpg-port.jpg',
            caption: 'Zone portuaire et quêtes locales rendues en 2D WebGL avec synchronisation WebSocket multijoueur.',
          },
        ]
      : [
          {
            label: '01. Agora Square',
            src: '/mmorpg-agora.jpg',
            caption: 'Central Agora plaza featuring real-time minimap, quest tracker, and PixiJS skill bar HUD.',
          },
          {
            label: '02. Tavern District',
            src: '/mmorpg-taverne.jpg',
            caption: 'Top-down world exploration with zone transitions, interactive NPCs, and enterable interiors.',
          },
          {
            label: '03. Harbor & Infirmary',
            src: '/mmorpg-port.jpg',
            caption: 'Harbor district rendered in 2D WebGL with real-time multiplayer WebSocket synchronization.',
          },
        ];

  const bombermanScreenshots =
    lang === 'fr'
      ? [
          {
            label: '01. Client Electron',
            src: '/bomberman-lobby.png',
            caption: 'Application de bureau Electron connectée en temps réel au serveur Socket.io conteneurisé sous Docker.',
          },
        ]
      : [
          {
            label: '01. Electron Client',
            src: '/bomberman-lobby.png',
            caption: 'Cross-platform Electron desktop client connected in real time to the Dockerized Socket.io server.',
          },
        ];

  const taskflowScreenshots =
    lang === 'fr'
      ? [
          {
            label: '01. Tableau Kanban',
            src: '/taskflow-kanban.png',
            caption: 'Tableau Kanban Vue 3 avec filtrage par assigné, priorité, sous-tâches et glisser-déposer.',
          },
          {
            label: '02. Connexion Multi-Tenant',
            src: '/taskflow-login.png',
            caption: 'Authentification JWT avec bascule rapide entre organisations isolées (Acme Corp, Globex) et rôles RBAC.',
          },
        ]
      : [
          {
            label: '01. Kanban Board',
            src: '/taskflow-kanban.png',
            caption: 'Vue 3 Kanban board featuring assignee and priority filters, subtask tracking, and drag-and-drop.',
          },
          {
            label: '02. Multi-Tenant Login',
            src: '/taskflow-login.png',
            caption: 'JWT authentication with isolated tenant organizations (Acme Corp, Globex) and RBAC role separation.',
          },
        ];

  const currentProject = projects[activeProject];

  return (
    <div className="relative min-h-screen bg-[#0b1120] text-slate-100">
      {/* Dégradé atmosphérique bleu nuit ardoise en fond */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,58,138,0.22),_transparent_55%)]" />

      {/* Halo discret qui suit le curseur */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.06), transparent 45%)`,
        }}
      />

      {/* Barre supérieure minimaliste */}
      <Navbar activeSection={activeSection} onSelectSection={scrollToSection} sections={sections} />

      {/* Rail vertical de navigation à droite */}
      <aside className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3">
        {sections.map((sec, idx) => {
          const isActive = activeSection === idx;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => scrollToSection(idx)}
              className="group flex items-center gap-3 py-1 focus:outline-none"
              aria-label={sec.label}
            >
              <span
                className={`text-[11px] font-mono transition-all duration-200 ${
                  isActive
                    ? 'opacity-100 text-slate-200 translate-x-0'
                    : 'opacity-0 group-hover:opacity-100 text-slate-400 translate-x-2 group-hover:translate-x-0'
                }`}
              >
                {sec.num} · {sec.label}
              </span>
              <span
                className={`block transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-2 h-6 bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]'
                    : 'w-1.5 h-1.5 bg-slate-700 group-hover:bg-slate-400'
                }`}
              />
            </button>
          );
        })}
      </aside>

      {/* ===================================================================
          ÉCRAN 01 : INTRODUCTION
         =================================================================== */}
      <section
        id="intro"
        data-index={0}
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        className="relative z-20 min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 pt-20 pb-24 border-b border-slate-800/70"
      >
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
          {/* Colonne Texte */}
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-200 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider">
                {lang === 'fr' ? 'Stage 2027' : '2027 Internship'}
              </span>
              <span className="text-slate-700">|</span>
              <span>
                {lang === 'fr'
                  ? 'Disponible du 1er mars au 4 juin 2027 · Pologne, Portugal (Erasmus+) & France'
                  : 'Available March 1 – June 4, 2027 · Poland, Portugal (Erasmus+) & France'}
              </span>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-widest text-sky-400/90">
                {lang === 'fr'
                  ? '01 / Introduction — BUT 3 Informatique · IUT d’Amiens'
                  : '01 / Overview — 3rd-Year B.Sc. in Computer Science · France'}
              </p>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                Côme Vermeulen
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 font-normal max-w-2xl leading-snug">
                {lang === 'fr'
                  ? 'Développeur Full-Stack & Logiciel, spécialisé dans les architectures TypeScript, les systèmes temps réel et la conteneurisation Docker.'
                  : 'Full-Stack & Software Developer specializing in TypeScript architectures, real-time networked systems, and Dockerized environments.'}
              </p>
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {lang === 'fr'
                ? "Étudiant en troisième année de BUT Informatique (parcours Réalisation d'Applications), je conçois des applications web et logicielles structurées : monorepos TypeScript, serveurs WebSocket autoritaires, plateformes SaaS multi-entreprises et déploiements reproductibles sous Docker."
                : 'Final-year Computer Science undergraduate focusing on Application Development. I build structured web and desktop software: TypeScript monorepos, authoritative WebSocket servers, multi-tenant SaaS platforms, and reproducible multi-container Docker deployments.'}
            </p>

            {/* Actions rapides */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollToSection(1)}
                className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs sm:text-sm px-5 py-3 rounded-md transition-colors shadow-lg shadow-sky-500/15"
              >
                {lang === 'fr' ? 'Explorer mes réalisations' : 'Explore selected work'}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection(4)}
                className="bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-medium text-xs sm:text-sm px-5 py-3 rounded-md border border-slate-700/80 transition-colors"
              >
                {lang === 'fr' ? 'Me contacter pour un stage' : 'Contact for internship'}
              </button>
              <a
                href="https://github.com/Meqle"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-slate-400 hover:text-sky-400 px-3 py-3 transition-colors"
              >
                github.com/Meqle ↗
              </a>
            </div>

            {/* Repères synthétiques */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <div className="font-mono text-xs text-slate-400">
                  {lang === 'fr' ? 'Formation' : 'Degree'}
                </div>
                <div className="text-sm font-medium text-slate-100 mt-1">
                  {lang === 'fr' ? 'BUT 3 Informatique' : 'B.Sc. Computer Science'}
                </div>
              </div>
              <div>
                <div className="font-mono text-xs text-slate-400">
                  {lang === 'fr' ? 'Dominante' : 'Focus'}
                </div>
                <div className="text-sm font-medium text-slate-100 mt-1">Full-Stack & Temps Réel</div>
              </div>
              <div>
                <div className="font-mono text-xs text-slate-400">
                  {lang === 'fr' ? 'Mobilité 2027' : '2027 Mobility'}
                </div>
                <div className="text-sm font-medium text-slate-100 mt-1">
                  {lang === 'fr' ? 'Pologne · Portugal · France' : 'Poland · Portugal · France'}
                </div>
              </div>
              <div>
                <div className="font-mono text-xs text-slate-400">
                  {lang === 'fr' ? 'Durée de stage' : 'Internship Window'}
                </div>
                <div className="text-sm font-medium text-slate-100 mt-1">
                  {lang === 'fr' ? '13 semaines (Mars – Juin)' : '13 weeks (Mar – Jun)'}
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Portrait */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl shadow-slate-950/60">
              <Image
                src="/come-photo.jpg"
                alt="Côme Vermeulen"
                fill
                sizes="(max-width: 768px) 224px, 256px"
                priority
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1120]/95 via-[#0b1120]/45 to-transparent p-4">
                <p className="font-mono text-[11px] text-slate-100">Côme Vermeulen</p>
                <p className="font-mono text-[10px] text-slate-400">Amiens, France</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          ÉCRAN 02 : RÉALISATIONS (WORKBENCH INTERACTIF)
         =================================================================== */}
      <section
        id="projets"
        data-index={1}
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        className="relative z-20 min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-20 border-b border-slate-800/70"
      >
        <div className="max-w-6xl mx-auto w-full space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800/80 pb-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-sky-400/90">
                {lang === 'fr' ? '02 / Réalisations sélectionnées' : '02 / Selected Work'}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {lang === 'fr' ? 'Projets & Architectures' : 'Projects & System Architectures'}
              </h2>
            </div>
            <p className="text-xs font-mono text-slate-400">
              {lang === 'fr'
                ? 'Survolez ou cliquez sur un projet pour inspecter son architecture'
                : 'Hover or click a project to inspect its architecture'}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Liste des 4 projets à gauche */}
            <div className="lg:col-span-4 flex flex-col gap-2.5">
              {projects.map((proj, idx) => {
                const isSelected = activeProject === idx;
                return (
                  <button
                    key={proj.num}
                    type="button"
                    onMouseEnter={() => setActiveProject(idx)}
                    onClick={() => setActiveProject(idx)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                      isSelected
                        ? 'bg-slate-800/75 border-sky-500/50 shadow-lg shadow-slate-950/50'
                        : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={isSelected ? 'text-sky-400 font-semibold' : 'text-slate-500'}>
                        {proj.num}
                      </span>
                      <span className="text-slate-400">{proj.context}</span>
                    </div>
                    <h3
                      className={`text-base font-semibold mt-1.5 transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-300'
                      }`}
                    >
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">{proj.subtitle}</p>
                  </button>
                );
              })}
            </div>

            {/* Panneau de détail interactif à droite */}
            <div className="lg:col-span-8 bg-slate-900/60 border border-slate-800/90 rounded-xl p-6 sm:p-8 space-y-6 shadow-xl shadow-slate-950/40">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-800/80 pb-5">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-sky-400">
                    <span>{currentProject.num}</span>
                    <span>/</span>
                    <span>{currentProject.context}</span>
                    <span>·</span>
                    <span>{currentProject.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-1">{currentProject.title}</h3>
                  <p className="text-sm text-slate-400 mt-0.5">{currentProject.subtitle}</p>
                </div>

                {currentProject.repo && (
                  <a
                    href={currentProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs px-4 py-2.5 rounded-md transition-colors"
                  >
                    <span>{lang === 'fr' ? 'Dépôt GitHub' : 'GitHub Repository'}</span>
                    <span>↗</span>
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {currentProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] bg-slate-950/80 text-slate-200 px-2.5 py-1 rounded border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">{currentProject.summary}</p>

              <div className="grid sm:grid-cols-3 gap-4">
                {currentProject.points.map((pt) => (
                  <div key={pt.label} className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-4 space-y-1.5">
                    <h4 className="text-xs font-semibold text-slate-100">{pt.label}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{pt.text}</p>
                  </div>
                ))}
              </div>

              {activeProject === 0 ? (
                <div className="bg-[#0b1120]/90 border border-slate-800 rounded-lg p-4 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                      {lang === 'fr' ? 'Captures en jeu & Architecture' : 'In-Game Screenshots & Architecture'}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {mmorpgScreenshots.map((shot, sIdx) => (
                        <button
                          key={shot.label}
                          type="button"
                          onClick={() => setActiveMmorpgTab(sIdx)}
                          className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                            activeMmorpgTab === sIdx
                              ? 'bg-sky-500 text-slate-950 font-semibold'
                              : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {shot.label}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => setActiveMmorpgTab(3)}
                        className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                          activeMmorpgTab === 3
                            ? 'bg-sky-500 text-slate-950 font-semibold'
                            : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {lang === 'fr' ? '04. Topologie' : '04. Topology'}
                      </button>
                    </div>
                  </div>

                  {activeMmorpgTab < 3 ? (
                    <>
                      <div className="relative h-56 sm:h-64 w-full rounded border border-slate-800 bg-slate-900 overflow-hidden">
                        <Image
                          src={mmorpgScreenshots[activeMmorpgTab].src}
                          alt={mmorpgScreenshots[activeMmorpgTab].label}
                          fill
                          sizes="(max-width: 1024px) 100vw, 700px"
                          className="object-cover"
                        />
                      </div>
                      <p className="text-xs text-slate-400 font-mono">
                        {mmorpgScreenshots[activeMmorpgTab].caption}
                      </p>
                    </>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex justify-end">
                        <code className="font-mono text-[11px] text-sky-400 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
                          $ {currentProject.command}
                        </code>
                      </div>
                      <div className="grid sm:grid-cols-4 gap-2.5">
                        {currentProject.archNodes.map((node, i) => (
                          <div
                            key={node.title}
                            className="relative bg-slate-900/90 border border-slate-800 rounded-md p-3 flex flex-col justify-between"
                          >
                            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                              <span>0{i + 1}</span>
                              {i < currentProject.archNodes.length - 1 && (
                                <span className="hidden sm:inline text-sky-500/70">→</span>
                              )}
                            </div>
                            <div className="text-xs font-semibold text-slate-100">{node.title}</div>
                            <div className="text-[11px] font-mono text-slate-400 mt-1">{node.detail}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : activeProject === 1 ? (
                <div className="bg-[#0b1120]/90 border border-slate-800 rounded-lg p-4 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                      {lang === 'fr' ? 'Aperçu Client & Architecture' : 'Client Preview & Architecture'}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      <button
                        type="button"
                        onClick={() => setActiveBombermanTab(0)}
                        className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                          activeBombermanTab === 0
                            ? 'bg-sky-500 text-slate-950 font-semibold'
                            : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {bombermanScreenshots[0].label}
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveBombermanTab(1)}
                        className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                          activeBombermanTab === 1
                            ? 'bg-sky-500 text-slate-950 font-semibold'
                            : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {lang === 'fr' ? '02. Topologie & Tests' : '02. Topology & Tests'}
                      </button>
                    </div>
                  </div>

                  {activeBombermanTab === 0 ? (
                    <>
                      <div className="relative h-56 sm:h-64 w-full rounded border border-slate-800 bg-slate-900 overflow-hidden">
                        <Image
                          src={bombermanScreenshots[0].src}
                          alt={bombermanScreenshots[0].label}
                          fill
                          sizes="(max-width: 1024px) 100vw, 700px"
                          className="object-contain p-2"
                        />
                      </div>
                      <p className="text-xs text-slate-400 font-mono">{bombermanScreenshots[0].caption}</p>
                    </>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex justify-end">
                        <code className="font-mono text-[11px] text-sky-400 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
                          $ {currentProject.command}
                        </code>
                      </div>
                      <div className="grid sm:grid-cols-4 gap-2.5">
                        {currentProject.archNodes.map((node, i) => (
                          <div
                            key={node.title}
                            className="relative bg-slate-900/90 border border-slate-800 rounded-md p-3 flex flex-col justify-between"
                          >
                            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                              <span>0{i + 1}</span>
                              {i < currentProject.archNodes.length - 1 && (
                                <span className="hidden sm:inline text-sky-500/70">→</span>
                              )}
                            </div>
                            <div className="text-xs font-semibold text-slate-100">{node.title}</div>
                            <div className="text-[11px] font-mono text-slate-400 mt-1">{node.detail}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : activeProject === 2 ? (
                <div className="bg-[#0b1120]/90 border border-slate-800 rounded-lg p-4 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                      {lang === 'fr' ? 'Captures & Architecture' : 'Screenshots & Architecture'}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {taskflowScreenshots.map((shot, sIdx) => (
                        <button
                          key={shot.label}
                          type="button"
                          onClick={() => setActiveTaskflowTab(sIdx)}
                          className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                            activeTaskflowTab === sIdx
                              ? 'bg-sky-500 text-slate-950 font-semibold'
                              : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {shot.label}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => setActiveTaskflowTab(2)}
                        className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                          activeTaskflowTab === 2
                            ? 'bg-sky-500 text-slate-950 font-semibold'
                            : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {lang === 'fr' ? '03. Topologie' : '03. Topology'}
                      </button>
                    </div>
                  </div>

                  {activeTaskflowTab < 2 ? (
                    <>
                      <div className="relative h-56 sm:h-64 w-full rounded border border-slate-800 bg-slate-900 overflow-hidden">
                        <Image
                          src={taskflowScreenshots[activeTaskflowTab].src}
                          alt={taskflowScreenshots[activeTaskflowTab].label}
                          fill
                          sizes="(max-width: 1024px) 100vw, 700px"
                          className="object-contain p-2"
                        />
                      </div>
                      <p className="text-xs text-slate-400 font-mono">
                        {taskflowScreenshots[activeTaskflowTab].caption}
                      </p>
                    </>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex justify-end">
                        <code className="font-mono text-[11px] text-sky-400 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
                          $ {currentProject.command}
                        </code>
                      </div>
                      <div className="grid sm:grid-cols-4 gap-2.5">
                        {currentProject.archNodes.map((node, i) => (
                          <div
                            key={node.title}
                            className="relative bg-slate-900/90 border border-slate-800 rounded-md p-3 flex flex-col justify-between"
                          >
                            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                              <span>0{i + 1}</span>
                              {i < currentProject.archNodes.length - 1 && (
                                <span className="hidden sm:inline text-sky-500/70">→</span>
                              )}
                            </div>
                            <div className="text-xs font-semibold text-slate-100">{node.title}</div>
                            <div className="text-[11px] font-mono text-slate-400 mt-1">{node.detail}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : currentProject.archNodes.length > 0 ? (
                <div className="bg-[#0b1120]/90 border border-slate-800 rounded-lg p-4 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                      {lang === 'fr' ? 'Topologie & Flux Applicatif' : 'System Topology & Data Flow'}
                    </span>
                    {currentProject.command && (
                      <code className="font-mono text-[11px] text-sky-400 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
                        $ {currentProject.command}
                      </code>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-4 gap-2.5">
                    {currentProject.archNodes.map((node, i) => (
                      <div
                        key={node.title}
                        className="relative bg-slate-900/90 border border-slate-800 rounded-md p-3 flex flex-col justify-between"
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                          <span>0{i + 1}</span>
                          {i < currentProject.archNodes.length - 1 && (
                            <span className="hidden sm:inline text-sky-500/70">→</span>
                          )}
                        </div>
                        <div className="text-xs font-semibold text-slate-100">{node.title}</div>
                        <div className="text-[11px] font-mono text-slate-400 mt-1">{node.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-[#0b1120]/90 border border-slate-800 rounded-lg p-4 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                      {lang === 'fr' ? 'Captures du projet' : 'Project Screenshots'}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {pinkScreenshots.map((shot, sIdx) => (
                        <button
                          key={shot.label}
                          type="button"
                          onClick={() => setActivePinkTab(sIdx)}
                          className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                            activePinkTab === sIdx
                              ? 'bg-sky-500 text-slate-950 font-semibold'
                              : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {shot.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="relative h-56 sm:h-64 w-full rounded border border-slate-800 bg-slate-900 overflow-hidden">
                    <Image
                      src={pinkScreenshots[activePinkTab].src}
                      alt={pinkScreenshots[activePinkTab].label}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="text-xs text-slate-400 font-mono">{pinkScreenshots[activePinkTab].caption}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          ÉCRAN 03 : STACK & ARCHITECTURE
         =================================================================== */}
      <section
        id="architecture"
        data-index={2}
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        className="relative z-20 min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-20 border-b border-slate-800/70"
      >
        <div className="max-w-6xl mx-auto w-full space-y-10">
          <div className="border-b border-slate-800/80 pb-5">
            <p className="font-mono text-xs uppercase tracking-widest text-sky-400/90">
              {lang === 'fr' ? '03 / Compétences Techniques' : '03 / Technical Capabilities'}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {lang === 'fr' ? 'Stack Technique & Pratiques d’Ingénierie' : 'Tech Stack & Engineering Practices'}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-xl p-6 space-y-4 shadow-md">
              <div className="font-mono text-xs text-sky-400">01 / FRONTEND & CLIENTS</div>
              <h3 className="text-base font-semibold text-white">
                {lang === 'fr' ? 'Interfaces Web & Desktop' : 'Web & Desktop Interfaces'}
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
                <li className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>TypeScript / ES2024</span>
                  <span className="text-slate-400">{lang === 'fr' ? 'Principal' : 'Primary'}</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>React / Next.js</span>
                  <span className="text-slate-400">App Router</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>Vue 3</span>
                  <span className="text-slate-400">Vite · SPA</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>Electron</span>
                  <span className="text-slate-400">Desktop</span>
                </li>
                <li className="flex justify-between">
                  <span>PixiJS · Tailwind CSS</span>
                  <span className="text-slate-400">2D · UI</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/90 rounded-xl p-6 space-y-4 shadow-md">
              <div className="font-mono text-xs text-sky-400">02 / BACKEND & RÉSEAU</div>
              <h3 className="text-base font-semibold text-white">
                {lang === 'fr' ? 'Serveurs, API & Temps Réel' : 'Servers, APIs & Real-Time'}
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
                <li className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>Node.js / Express 5</span>
                  <span className="text-slate-400">REST API</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>WebSocket / Socket.io</span>
                  <span className="text-slate-400">{lang === 'fr' ? 'Temps réel' : 'Real-Time'}</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>Python</span>
                  <span className="text-slate-400">Algo · Scripts</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>C# / .NET · Java</span>
                  <span className="text-slate-400">OOP</span>
                </li>
                <li className="flex justify-between">
                  <span>PHP · C / C++</span>
                  <span className="text-slate-400">Backend · Sys</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/90 rounded-xl p-6 space-y-4 shadow-md">
              <div className="font-mono text-xs text-sky-400">03 / DONNÉES</div>
              <h3 className="text-base font-semibold text-white">
                {lang === 'fr' ? 'Bases SQL & NoSQL' : 'SQL & NoSQL Databases'}
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
                <li className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>PostgreSQL</span>
                  <span className="text-slate-400">PL/pgSQL</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>MongoDB 8</span>
                  <span className="text-slate-400">Mongoose</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>MySQL / MariaDB</span>
                  <span className="text-slate-400">Relationnel</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>Isolation Multi-Tenant</span>
                  <span className="text-slate-400">SaaS</span>
                </li>
                <li className="flex justify-between">
                  <span>JWT & Rôles RBAC</span>
                  <span className="text-slate-400">Sécurité</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/90 rounded-xl p-6 space-y-4 shadow-md">
              <div className="font-mono text-xs text-sky-400">04 / DEVOPS & QUALITÉ</div>
              <h3 className="text-base font-semibold text-white">
                {lang === 'fr' ? 'Industrialisation & Tests' : 'Containers & Testing'}
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
                <li className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>Docker & Compose</span>
                  <span className="text-slate-400">Multi-Stage</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>Monorepo Workspaces</span>
                  <span className="text-slate-400">Shared Types</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>Tests Automatisés</span>
                  <span className="text-slate-400">TDD · BDD</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span>Nginx</span>
                  <span className="text-slate-400">Reverse Proxy</span>
                </li>
                <li className="flex justify-between">
                  <span>Git / GitHub · Linux</span>
                  <span className="text-slate-400">Git Flow</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 pt-2">
            <div className="bg-slate-900/35 border border-slate-800/80 rounded-lg p-5 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400/90">
                {lang === 'fr' ? 'Environnements Reproductibles' : 'Reproducible Environments'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'fr'
                  ? 'Chaque projet récent est configuré pour démarrer en une seule commande Docker Compose, avec vérification de disponibilité des bases de données et isolation réseau des services.'
                  : 'Every recent project is configured to spin up with a single Docker Compose command, complete with database healthchecks and internal service network isolation.'}
              </p>
            </div>
            <div className="bg-slate-900/35 border border-slate-800/80 rounded-lg p-5 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400/90">
                {lang === 'fr' ? 'Contrats de Typage Stricts' : 'Strict Type Contracts'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'fr'
                  ? 'Utilisation d’architectures Monorepo permettant de partager les schémas de données et protocoles WebSocket entre le client et le serveur sans duplication.'
                  : 'Monorepo workspace structures sharing data schemas and WebSocket protocols directly between client and server packages without duplication.'}
              </p>
            </div>
            <div className="bg-slate-900/35 border border-slate-800/80 rounded-lg p-5 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400/90">
                {lang === 'fr' ? 'Algorithmique & Modélisation' : 'Algorithms & Modeling'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'fr'
                  ? 'Solide bagage en algorithmique et modélisation mathématique en Python : méthodes d’optimisation, cryptanalyse par chaînes de Markov (MCMC) et traitement du signal et de l’image.'
                  : 'Strong foundation in Python algorithmic modeling: optimization methods, Markov Chain Monte Carlo cryptanalysis, and digital image processing.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          ÉCRAN 04 : PARCOURS & EXPÉRIENCES
         =================================================================== */}
      <section
        id="parcours"
        data-index={3}
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
        className="relative z-20 min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-20 border-b border-slate-800/70"
      >
        <div className="max-w-6xl mx-auto w-full space-y-10">
          <div className="border-b border-slate-800/80 pb-5">
            <p className="font-mono text-xs uppercase tracking-widest text-sky-400/90">
              {lang === 'fr' ? '04 / Parcours & Évolution' : '04 / Background & Progression'}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {lang === 'fr' ? 'Formation & Expériences' : 'Education & Experience'}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                {lang === 'fr' ? 'Cursus Universitaire' : 'Academic Background'}
              </h3>

              <div className="space-y-6 border-l border-slate-800 pl-6">
                <div className="relative space-y-1.5">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                  <div className="font-mono text-xs text-sky-400">2024 – 2027</div>
                  <h4 className="text-base font-semibold text-white">
                    {lang === 'fr'
                      ? 'BUT Informatique — Parcours Réalisation d’Applications'
                      : 'B.Sc. in Computer Science (BUT Informatique)'}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {lang === 'fr'
                      ? 'IUT d’Amiens, Université de Picardie Jules Verne — Actuellement en 3ème année'
                      : 'IUT d’Amiens, France — Currently in 3rd and final year'}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {lang === 'fr'
                      ? 'Conception logicielle, architectures distribuées, virtualisation et conteneurisation Docker, bases de données relationnelles et NoSQL, qualité de développement et tests automatisés.'
                      : 'Software architecture, distributed systems, Docker containerization, relational and NoSQL databases, software quality engineering, and automated testing.'}
                  </p>
                </div>

                <div className="relative space-y-1.5">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <div className="font-mono text-xs text-slate-400">2023 – 2024</div>
                  <h4 className="text-base font-semibold text-slate-200">
                    {lang === 'fr'
                      ? 'Classe Préparatoire Intégrée — EPITA'
                      : 'Integrated Engineering Preparatory Class — EPITA'}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {lang === 'fr'
                      ? 'École d’Ingénieurs en Informatique — Semestre intensif'
                      : 'Graduate School of Computer Science — Intensive semester'}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {lang === 'fr'
                      ? 'Acquisition d’une forte rigueur mathématique et algorithmique, programmation fonctionnelle en OCaml et bases de l’architecture système.'
                      : 'Strong mathematical and algorithmic rigor, functional programming in OCaml, and systems fundamentals.'}
                  </p>
                </div>

                <div className="relative space-y-1.5">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <div className="font-mono text-xs text-slate-400">2023</div>
                  <h4 className="text-base font-semibold text-slate-200">
                    {lang === 'fr' ? 'Baccalauréat Général' : 'French High School Diploma'}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {lang === 'fr'
                      ? 'Spécialités Mathématiques et Numérique & Sciences Informatiques'
                      : 'Specializations in Mathematics and Computer Science'}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                {lang === 'fr' ? 'Expériences en Entreprise' : 'Professional Experience'}
              </h3>

              <div className="space-y-4">
                <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-2 shadow-md">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-sky-400">
                      {lang === 'fr' ? 'Janvier – Mars 2026 · 8 semaines' : 'Jan – Mar 2026 · 8 weeks'}
                    </span>
                    <span className="text-slate-400">Amiens, France</span>
                  </div>
                  <h4 className="text-base font-semibold text-white">
                    {lang === 'fr'
                      ? 'Développeur Web Full-Stack Stagiaire — Pink Studio'
                      : 'Full-Stack Web Developer Intern — Pink Studio'}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lang === 'fr'
                      ? "Conception et livraison en autonomie complète de la plateforme web de l'entreprise : recueil des besoins auprès du dirigeant, modélisation de la base de données MySQL, développement du back-office d'administration sécurisé et de la galerie publique."
                      : 'Designed and delivered the company web platform as sole developer: requirements gathering with the business owner, MySQL database design, secure CRUD administration back-office, and dynamic public gallery.'}
                  </p>
                </div>

                <div className="bg-slate-900/35 border border-slate-800/80 rounded-xl p-5 space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                    <span>2024 & 2026</span>
                    <span>France</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-200">
                    {lang === 'fr'
                      ? 'Expériences Saisonnières — Intermarché & McDonald’s'
                      : 'Seasonal Employment — Intermarché & McDonald’s'}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang === 'fr'
                      ? 'Travail en équipe sous cadence soutenue, rigueur d’organisation et autonomie opérationnelle.'
                      : 'Fast-paced teamwork, operational rigor, and reliability in high-demand environments.'}
                  </p>
                </div>

                <div className="bg-slate-900/40 border border-slate-800/90 rounded-xl p-5 space-y-3">
                  <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                    {lang === 'fr' ? 'Progression sur les 3 années du BUT' : '3-Year Engineering Progression'}
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="space-y-1">
                      <div className="font-mono text-slate-400">01 · BUT 1</div>
                      <div className="font-medium text-slate-300">
                        {lang === 'fr' ? 'Fondations algorithmiques & SQL' : 'Core algorithms & SQL'}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-mono text-slate-400">02 · BUT 2</div>
                      <div className="font-medium text-slate-300">
                        {lang === 'fr' ? 'Autonomie complète en stage' : 'Full-stack autonomy'}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-mono text-sky-400">03 · BUT 3</div>
                      <div className="font-medium text-white">
                        {lang === 'fr' ? 'Systèmes distribués, Docker & Tests' : 'Distributed systems & Docker'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          ÉCRAN 05 : CONTACT & STAGE 2027
         =================================================================== */}
      <section
        id="contact"
        data-index={4}
        ref={(el) => {
          sectionRefs.current[4] = el;
        }}
        className="relative z-20 min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-24 pt-20 pb-12"
      >
        <div className="max-w-6xl mx-auto w-full my-auto space-y-10">
          <div className="border-b border-slate-800/80 pb-5">
            <p className="font-mono text-xs uppercase tracking-widest text-sky-400/90">
              {lang === 'fr' ? '05 / Contact & Mobilité 2027' : '05 / Contact & 2027 Internship'}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {lang === 'fr' ? 'Échanger autour d’une opportunité de stage' : 'Discuss an Internship Opportunity'}
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-4 shadow-md">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                    {lang === 'fr'
                      ? 'Recherche de stage : 1er mars – 4 juin 2027'
                      : 'Internship search: March 1 – June 4, 2027'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {lang === 'fr'
                    ? 'Dans le cadre de la validation de ma troisième année de BUT Informatique, je recherche un stage de 13 semaines en développement Full-Stack, Backend ou Logiciel.'
                    : 'To complete my third year of B.Sc. in Computer Science, I am seeking a 13-week internship in Full-Stack, Backend, or Software Engineering.'}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-mono">
                      {lang === 'fr' ? 'Mobilité Europe' : 'European Mobility'}
                    </span>
                    <span className="text-slate-100 font-medium">
                      {lang === 'fr' ? 'Pologne · Portugal (Bourse Erasmus+)' : 'Poland · Portugal (Erasmus+ Grant)'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-mono">
                      {lang === 'fr' ? 'Mobilité France' : 'France'}
                    </span>
                    <span className="text-slate-100 font-medium">Amiens · Lille · Paris</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-mono">
                      {lang === 'fr' ? 'Langues de travail' : 'Working Languages'}
                    </span>
                    <span className="text-slate-100 font-medium">
                      {lang === 'fr' ? 'Français · Anglais' : 'English · French'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/35 border border-slate-800/80 rounded-xl p-6 space-y-4 text-xs">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <span className="font-mono text-slate-400">Email</span>
                  <a
                    href="mailto:vermeulen.come@gmail.com"
                    className="font-mono text-slate-100 hover:text-sky-400 transition-colors"
                  >
                    vermeulen.come@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <span className="font-mono text-slate-400">
                    {lang === 'fr' ? 'Téléphone' : 'Phone'}
                  </span>
                  <a
                    href="tel:+33769951415"
                    className="font-mono text-slate-100 hover:text-sky-400 transition-colors"
                  >
                    +33 7 69 95 14 15
                  </a>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <span className="font-mono text-slate-400">GitHub</span>
                  <a
                    href="https://github.com/Meqle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-slate-100 hover:text-sky-400 transition-colors"
                  >
                    github.com/Meqle ↗
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-slate-400">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/c%C3%B4me-vermeulen-4b601a38b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-slate-100 hover:text-sky-400 transition-colors"
                  >
                    linkedin.com/in/côme-vermeulen ↗
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-5 shadow-md"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-mono text-[11px] uppercase text-slate-400">
                      {lang === 'fr' ? 'Nom / Entreprise' : 'Name / Company'}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder={lang === 'fr' ? 'Votre nom ou organisation' : 'Your name or company'}
                      className="w-full bg-[#0b1120] border border-slate-700/80 rounded-md px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-mono text-[11px] uppercase text-slate-400">
                      {lang === 'fr' ? 'Adresse email' : 'Email address'}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="contact@company.com"
                      className="w-full bg-[#0b1120] border border-slate-700/80 rounded-md px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block font-mono text-[11px] uppercase text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={
                      lang === 'fr'
                        ? 'Proposition de stage, échange technique...'
                        : 'Internship opportunity, technical inquiry...'
                    }
                    className="w-full bg-[#0b1120] border border-slate-700/80 rounded-md px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs sm:text-sm px-6 py-3 rounded-md transition-colors"
                  >
                    {lang === 'fr' ? 'Envoyer le message' : 'Send message'}
                  </button>

                  {submitted && (
                    <span className="font-mono text-xs text-emerald-400">
                      {lang === 'fr' ? 'Message envoyé avec succès.' : 'Message sent successfully.'}
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        <footer className="max-w-6xl mx-auto w-full pt-12 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>Côme Vermeulen — {lang === 'fr' ? 'IUT d’Amiens' : 'Amiens, France'}</div>
          <button
            type="button"
            onClick={() => scrollToSection(0)}
            className="hover:text-sky-400 transition-colors"
          >
            {lang === 'fr' ? 'Retour en haut ↑' : 'Back to top ↑'}
          </button>
        </footer>
      </section>

      {/* ===================================================================
          CAPTEUR DE NAVIGATION EN BAS D'ÉCRAN (POINTAGE SOURIS / CLIC)
         =================================================================== */}
      {activeSection < 4 && (
        <div
          onMouseEnter={handleBottomZoneEnter}
          onMouseLeave={handleBottomZoneLeave}
          onClick={() => scrollToSection(activeSection + 1)}
          className="fixed bottom-0 inset-x-0 z-40 h-12 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/90 to-transparent cursor-pointer flex flex-col justify-end group"
        >
          <div className="max-w-7xl mx-auto w-full px-6 pb-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-slate-100 transition-colors">
            <span>
              {lang === 'fr'
                ? `Suivant : ${sections[activeSection + 1].num} — ${sections[activeSection + 1].label}`
                : `Next: ${sections[activeSection + 1].num} — ${sections[activeSection + 1].label}`}
            </span>
            <span className="flex items-center gap-2">
              <span className="hidden sm:inline">
                {lang === 'fr'
                  ? 'Pointez ici ou défilez pour continuer'
                  : 'Point here or scroll to advance'}
              </span>
              <span className="inline-block transform group-hover:translate-y-0.5 transition-transform text-sky-400">
                ↓
              </span>
            </span>
          </div>
          <div className="w-full h-0.5 bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-sky-400 transition-none"
              style={{ width: `${hoverProgress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
