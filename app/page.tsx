'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './context/LanguageContext';

export default function Home() {
  const { lang } = useLanguage();

  const techBadges = [
    'TypeScript',
    'React / Next.js',
    'Vue 3',
    'Node.js (Express / Socket.io)',
    'Docker & Compose',
    'PostgreSQL / MongoDB',
    'Electron / PixiJS',
    'PHP / MySQL',
    'Python / C#',
    'Git / TDD',
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-900 text-white flex flex-col items-center justify-center px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 my-auto animate-fade-in w-full">
        {/* BLOC GAUCHE : Photo de Profil */}
        <div className="flex-shrink-0 relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
          <div className="absolute -inset-2 bg-cyan-500 rounded-full blur opacity-25 animate-pulse"></div>

          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 bg-slate-950 shadow-2xl">
            <Image
              src="/come-photo.jpg"
              alt="Photo de Côme Vermeulen"
              layout="fill"
              objectFit="cover"
              priority
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* BLOC DROITE : Textes, Disponibilité Stage 2027 et Actions */}
        <div className="flex-grow space-y-6 text-center md:text-left max-w-2xl">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="inline-block text-cyan-400 font-semibold tracking-wider text-xs uppercase bg-cyan-950/50 px-3.5 py-1.5 rounded-full border border-cyan-800/40">
                {lang === 'fr' ? 'BUT 3 Informatique • Parcours RACA' : '3rd-Year B.Sc. in Computer Science'}
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 font-medium text-xs bg-emerald-950/60 hover:bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-700/40 transition-colors"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                {lang === 'fr'
                  ? 'Stage : 1er mars – 4 juin 2027 (Pologne, Portugal, France)'
                  : 'Internship: March 1 – June 4, 2027 (Poland, Portugal, France • Erasmus+)'}
              </Link>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent pt-1">
              Côme Vermeulen
            </h1>
            <p className="text-xl md:text-2xl font-medium text-cyan-400">
              {lang === 'fr'
                ? 'Développeur Full-Stack, Backend & Architectures Temps Réel'
                : 'Full-Stack, Backend & Real-Time Systems Developer'}
            </p>
          </div>

          {lang === 'fr' ? (
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Étudiant en <strong className="text-white font-semibold">3ème année de BUT Informatique</strong> à
              l&apos;IUT d&apos;Amiens (spécialité Réalisation d&apos;Applications). Je conçois et déploie des
              applications complètes — architectures{' '}
              <strong className="text-slate-200">Monorepo TypeScript</strong>, serveurs temps réel{' '}
              <strong className="text-slate-200">WebSocket / Node.js</strong>, plateformes{' '}
              <strong className="text-slate-200">SaaS multi-tenant</strong> et environnements conteneurisés sous{' '}
              <strong className="text-slate-200">Docker</strong> — avec une exigence constante de{' '}
              <em>clean code</em> et de tests automatisés.
            </p>
          ) : (
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Final-year <strong className="text-white font-semibold">Computer Science undergraduate (B.Sc.)</strong>{' '}
              at IUT d&apos;Amiens, France, specializing in Software & Application Development. I design, test, and
              deploy full-stack applications —{' '}
              <strong className="text-slate-200">TypeScript Monorepos</strong>, real-time{' '}
              <strong className="text-slate-200">WebSocket / Node.js</strong> servers,{' '}
              <strong className="text-slate-200">multi-tenant SaaS</strong> platforms, and{' '}
              <strong className="text-slate-200">Dockerized</strong> multi-service environments — with a strong focus
              on <em>clean code</em> and software quality.
            </p>
          )}

          {/* Encart synthétique Stage 2027 */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-4 text-left space-y-1.5 shadow-lg">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <span>🌍</span>
              {lang === 'fr'
                ? 'Disponibilité Stage de Fin de BUT — Printemps 2027 (13 semaines)'
                : 'Final-Year Internship Availability — Spring 2027 (13 weeks)'}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'fr' ? (
                <>
                  Disponible du <strong className="text-white">1er mars au 4 juin 2027</strong> pour un stage en
                  développement Full-Stack, Backend ou Logiciel. Mobilité internationale prioritaire en{' '}
                  <strong className="text-cyan-300">Pologne</strong> (Varsovie, Cracovie, Wrocław, Gdańsk) et au{' '}
                  <strong className="text-cyan-300">Portugal</strong> (Lisbonne, Porto) —{' '}
                  <span className="text-emerald-400 font-medium">éligible bourse Erasmus+</span> — ainsi qu&apos;en{' '}
                  <strong className="text-white">France</strong>.
                </>
              ) : (
                <>
                  Available from <strong className="text-white">March 1 to June 4, 2027</strong> for a Full-Stack,
                  Backend, or Software Engineering internship. Prioritizing international mobility in{' '}
                  <strong className="text-cyan-300">Poland</strong> (Warsaw, Kraków, Wrocław, Gdańsk) and{' '}
                  <strong className="text-cyan-300">Portugal</strong> (Lisbon, Porto) —{' '}
                  <span className="text-emerald-400 font-medium">Erasmus+ grant eligible (zero visa required)</span> —
                  as well as opportunities in <strong className="text-white">France</strong>.
                </>
              )}
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1">
            <Link
              href="/projets"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/20 text-sm"
            >
              {lang === 'fr' ? 'Découvrir mes projets (BUT 3 & Stage)' : 'Explore my projects'}
            </Link>
            <Link
              href="/contact"
              className="bg-slate-950 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-3 rounded-lg border border-slate-800 transition-all text-sm"
            >
              {lang === 'fr' ? 'Me contacter / Proposer un stage' : 'Contact me'}
            </Link>
            <a
              href="https://github.com/Meqle"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 font-medium px-4 py-3 rounded-lg border border-slate-800 transition-all text-sm flex items-center gap-2"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Compétences de prédilection */}
          <div className="pt-6 border-t border-slate-800/60 w-full">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3">
              {lang === 'fr' ? 'Stack Technique Principale' : 'Core Tech Stack'}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs text-slate-300">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-950 px-3 py-1.5 rounded-md border border-slate-800/80 hover:border-cyan-800/60 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
