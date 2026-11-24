'use client';

import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 md:p-24 flex flex-col items-center">
      <div className="max-w-3xl w-full space-y-12">
        {/* Titre de la page */}
        <section className="border-b border-slate-800 pb-6">
          <h2 className="text-3xl font-bold text-cyan-400">
            {lang === 'fr' ? 'À propos de moi' : 'About Me'}
          </h2>
          <p className="text-slate-400 mt-2">
            {lang === 'fr'
              ? "Découvrez mon parcours, mes valeurs d'ingénierie logicielle et mes objectifs internationaux."
              : 'Discover my academic background, software engineering values, and international career goals.'}
          </p>
        </section>

        {/* Section Pro & Académique */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-200">
            {lang === 'fr' ? 'Mon Parcours & Mes Valeurs' : 'My Journey & Engineering Values'}
          </h3>
          {lang === 'fr' ? (
            <>
              <p className="text-slate-300 leading-relaxed">
                Mon intérêt pour l&apos;informatique a débuté dès le lycée à travers les spécialités Mathématiques et
                NSI. Après une première expérience formatrice de 6 mois en classe préparatoire intégrée à
                l&apos;EPITA, j&apos;ai choisi de rejoindre le <strong>BUT Informatique à l&apos;IUT d&apos;Amiens</strong>{' '}
                (parcours Réalisation d&apos;Applications — RACA). Aujourd&apos;hui en <strong>3ème année (BUT 3)</strong>,
                ce cursus m&apos;a permis d&apos;allier une solide rigueur algorithmique à la conception concrète
                d&apos;architectures logicielles modernes (applications temps réel, SaaS multi-entreprises,
                conteneurisation Docker).
              </p>
              <p className="text-slate-300 leading-relaxed">
                Dans mon travail quotidien, j&apos;accorde une importance centrale à la{' '}
                <span className="text-cyan-400 font-semibold">qualité logicielle</span> (typage strict TypeScript,
                tests unitaires et d&apos;intégration, séparation des responsabilités), à la{' '}
                <span className="text-cyan-400 font-semibold">curiosité technique</span> et à l&apos;
                <span className="text-cyan-400 font-semibold">esprit d&apos;équipe</span>. J&apos;aime concevoir des
                systèmes fiables, reproductibles et faciles à déployer.
              </p>
            </>
          ) : (
            <>
              <p className="text-slate-300 leading-relaxed">
                My passion for computer science started in high school with Mathematics and Computer Science
                specializations. After an intensive 6-month integrated preparatory program at EPITA (Graduate School
                of Computer Science), I joined the <strong>3-year Bachelor of Technology in Computer Science (BUT)</strong>{' '}
                at IUT d&apos;Amiens, specializing in Application Development (RACA). Now in my{' '}
                <strong>3rd and final year</strong>, this curriculum has enabled me to combine strong algorithmic
                foundations with hands-on software architecture (real-time networked systems, multi-tenant SaaS, Docker
                containerization).
              </p>
              <p className="text-slate-300 leading-relaxed">
                In my engineering practice, I place strong emphasis on{' '}
                <span className="text-cyan-400 font-semibold">software quality</span> (strict TypeScript typing,
                automated unit & integration testing, clean architecture),{' '}
                <span className="text-cyan-400 font-semibold">technical curiosity</span>, and{' '}
                <span className="text-cyan-400 font-semibold">team collaboration</span>. I enjoy building reliable,
                reproducible systems that deploy seamlessly.
              </p>
            </>
          )}
        </section>

        {/* Section Équilibre : Forces & Souci du détail */}
        <section className="bg-slate-950 p-6 rounded-xl border border-slate-800 grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-emerald-400 font-semibold mb-2">
              {lang === 'fr' ? 'Mes forces' : 'Key Strengths'}
            </h4>
            {lang === 'fr' ? (
              <ul className="list-disc list-inside text-slate-300 space-y-1.5 text-sm">
                <li>Autonomie complète du schéma de base de données au déploiement Docker</li>
                <li>Maîtrise des workflows collaboratifs (Monorepo, Git Flow, revues de code)</li>
                <li>Capacité d&apos;adaptation rapide à de nouvelles stacks et environnements</li>
              </ul>
            ) : (
              <ul className="list-disc list-inside text-slate-300 space-y-1.5 text-sm">
                <li>End-to-end autonomy from database modeling to Docker deployment</li>
                <li>Proficiency in collaborative workflows (Monorepos, Git Flow, code reviews)</li>
                <li>Fast adaptation to new tech stacks and international environments</li>
              </ul>
            )}
          </div>
          <div>
            <h4 className="text-amber-400 font-semibold mb-2">
              {lang === 'fr' ? 'Mon exigence de conception' : 'My Engineering Obsession'}
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {lang === 'fr' ? (
                <>
                  J&apos;ai une véritable obsession pour le <span className="italic text-slate-200">clean code</span>,
                  l&apos;isolation des responsabilités et la reproductibilité des environnements. Tant qu&apos;un
                  projet ne démarre pas proprement via un contrat d&apos;interface clair ou un{' '}
                  <code>docker compose up</code> sans friction, je continue d&apos;affiner l&apos;architecture.
                </>
              ) : (
                <>
                  I have a strong commitment to <span className="italic text-slate-200">clean code</span>, separation
                  of concerns, and environment reproducibility. Until a project runs cleanly through well-defined shared
                  interfaces and a frictionless <code>docker compose up</code>, I keep refining its architecture.
                </>
              )}
            </p>
          </div>
        </section>

        {/* Section Objectif International 2027 */}
        <section className="bg-cyan-950/20 p-6 rounded-xl border border-cyan-800/40 space-y-3">
          <h3 className="text-lg font-semibold text-cyan-400 flex items-center gap-2">
            <span>🌍</span>
            {lang === 'fr'
              ? 'Projet de Mobilité Internationale — Stage Mars à Juin 2027'
              : 'International Mobility Goal — March to June 2027 Internship'}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            {lang === 'fr' ? (
              <>
                Pour clôturer ma troisième année de BUT Informatique, je recherche un{' '}
                <strong>stage de 13 semaines (du 1er mars au 4 juin 2027)</strong> au sein d&apos;une équipe technique
                anglophone ou francophone. Je cible en priorité les écosystèmes tech dynamiques de{' '}
                <strong>Pologne</strong> (Varsovie, Cracovie, Wrocław, Gdańsk) et du <strong>Portugal</strong>{' '}
                (Lisbonne, Porto) avec le soutien de la bourse européenne <strong>Erasmus+</strong>, tout en restant
                ouvert aux opportunités stimulantes en <strong>France</strong>.
              </>
            ) : (
              <>
                To complete my 3rd year of Computer Science, I am seeking a{' '}
                <strong>13-week internship (March 1 – June 4, 2027)</strong> within an English- or French-speaking
                engineering team. I am actively targeting fast-growing tech hubs in <strong>Poland</strong> (Warsaw,
                Kraków, Wrocław, Gdańsk) and <strong>Portugal</strong> (Lisbon, Porto) supported by{' '}
                <strong>Erasmus+ mobility funding</strong>, while also considering software engineering opportunities
                in <strong>France</strong>.
              </>
            )}
          </p>
        </section>

        {/* Section Passions et Intérêts */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-200">
            {lang === 'fr' ? 'Mes Passions & Intérêts' : 'Interests Beyond Code'}
          </h3>
          <p className="text-slate-300 leading-relaxed">
            {lang === 'fr' ? (
              <>
                En dehors du développement logiciel, je m&apos;intéresse de près à l&apos;architecture des{' '}
                <span className="text-cyan-400 font-semibold">jeux vidéo multijoueurs</span> et du{' '}
                <span className="text-cyan-400 font-semibold">streaming temps réel</span> — des domaines qui m&apos;ont
                directement inspiré lors de la création de nos projets de moteurs 2D en réseau (MMORPG PixiJS et
                Bomberman Arena). La <span className="text-cyan-400 font-semibold">musique</span> m&apos;accompagne
                également au quotidien dans toutes mes sessions de conception.
              </>
            ) : (
              <>
                Outside of software engineering, I am deeply interested in the technical architecture of{' '}
                <span className="text-cyan-400 font-semibold">multiplayer video games</span> and{' '}
                <span className="text-cyan-400 font-semibold">real-time streaming</span> — areas that directly inspired
                my work on networked 2D game engines (PixiJS MMORPG and Bomberman Arena).{' '}
                <span className="text-cyan-400 font-semibold">Music</span> is also a constant companion during my
                coding and design sessions.
              </>
            )}
          </p>
        </section>
      </div>
    </main>
  );
}
