'use client';

import { useQuery } from '@tanstack/react-query';
import { getRepos } from '../../api/github';
import RepoCard from '../../components/RepoCard';
import styles from './page.module.css';

const featured = [
  {
    title: 'ConnectTEA',
    description:
      'EMBARQUE DIGITAL: Aplicação para intermediar o cuidado de crianças com autismo no ambiente escolar, utilizando Inteligência Artificial.',
    tags: ['IA', 'TypeScript', 'React', 'Supabase'],
    partners: 'Beyond Co & Porto Digital',
    emoji: '🧩',
    link: 'https://github.com/vitorferrr/App-connect-TEA',
  },
  /* {
    title: 'Evoluo TEA',
    description:
      'EMBARQUE DIGITAL: Aplicação para auxiliar o tratamento de pessoas com TEA (Transtorno do Espectro Autista).',
    tags: ['',],
    partners: 'Embarque Digital',
    emoji: '🚀',
    link: null, // tentar achar repositório depois, por algum motivo não está mais no GitHub
  }, */
  {
    title: 'MedConnect',
    description:
      'EMBARQUE DIGITAL: Projeto em Salesforce com interface em inglês para tracking de eventos médicos, gerenciamento de pacientes e histórico clínico.',
    tags: ['Salesforce - CRM', 'APEX', 'Automação'],
    partners: 'Projeto Acadêmico',
    emoji: '🏥',
    link: 'https://github.com/vitorferrr/MedConnect',
  },
  {
    title: 'Jogo de dados',
    description:
      'Aplicativo web com autenticação via Firebase, sistema de placar persistente e partidas em tempo real.',
    tags: ['React', 'Next.js', 'Game'],
    partners: 'Projeto Pessoal',
    emoji: '🎮',
    link: 'https://github.com/vitorferrr/Jogo-de-dados',
  },
];

function FeaturedCard({ project }) {
  return (
    <div className={`card ${styles.featuredCard}`}>
      <div className={styles.featuredEmoji}>{project.emoji}</div>
      <div className={styles.featuredContent}>
        <div className={styles.featuredTop}>
          <h3 className={styles.featuredTitle}>{project.title}</h3>
          <span className={styles.partner}>{project.partners}</span>
        </div>
        <p className={styles.featuredDesc}>{project.description}</p>
        <div className={styles.featuredTags}>
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReposSection() {
  const { data: repos, isLoading, isError, error } = useQuery({
    queryKey: ['github-repos'],
    queryFn: getRepos,
  });

  if (isLoading) {
    return (
      <div className={styles.loadingGrid}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={`card ${styles.skeleton}`} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className={`card ${styles.errorBox}`}>
        <p>⚠️ Não foi possível carregar os repositórios.</p>
        <span>{error?.message}</span>
      </div>
    );
  }

  return (
    <div className={styles.reposGrid}>
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

export default function Projetos() {
  return (
    <div className="page-wrapper">
      <div className="container">

        {/* Header */}
        <div className={`animate-fade-up ${styles.header}`}>
          <span className="accent-line" />
          <h1 className="section-title">Projetos Desenvolvidos</h1>
          <p className="section-subtitle">
            Projetos de destaque e repositórios públicos do GitHub.
          </p>
        </div>

        {/* Featured */}
        <section className={`animate-fade-up animate-fade-up-delay-1 ${styles.section}`}>
          <div className={styles.sectionLabel}>
            <span>⬡</span> Projetos de Destaque
          </div>
          <div className={styles.featuredGrid}>
            {featured.map((p) => (
              <FeaturedCard key={p.title} project={p} />
            ))}
          </div>
        </section>

        {/* GitHub Repos */}
        <section className={`animate-fade-up animate-fade-up-delay-2 ${styles.section}`}>
          <div className={styles.sectionLabel}>
            <span>⬡</span> Repositórios no GitHub
          </div>
          <ReposSection />
        </section>

      </div>
    </div>
  );
}