import styles from './page.module.css';

const techs = [
  {
    category: 'Framework & Runtime',
    items: [
      { name: 'Next.js (App Router)', desc: 'Framework React com roteamento baseado em arquivos, SSR e SSG.' },
      { name: 'React 18', desc: 'Biblioteca de UI com componentes funcionais e hooks.' },
    ],
  },
  {
    category: 'Estilização',
    items: [
      { name: 'CSS Modules', desc: 'Estilos com escopo local por componente, sem conflitos.' },
      { name: 'CSS Variables', desc: 'Sistema de design tokens para tema dark/light consistente.' },
      { name: 'Google Fonts', desc: 'Bebas Neue (display) + DM Sans (corpo) para identidade tipográfica.' },
    ],
  },
  {
    category: 'Gerenciamento de Estado',
    items: [
      { name: 'Zustand', desc: 'Store minimalista para gerenciar o tema da aplicação (dark/light mode).' },
    ],
  },
  {
    category: 'Data Fetching',
    items: [
      { name: 'TanStack Query (React Query)', desc: 'Cache, loading states e refetch automático de dados assíncronos.' },
      { name: 'Axios', desc: 'Cliente HTTP para chamadas à API do GitHub.' },
    ],
  },
  {
    category: 'Integração de API',
    items: [
      { name: 'GitHub REST API', desc: 'Listagem dinâmica de repositórios públicos em tempo real.' },
    ],
  },
];

export default function Sobre() {
  return (
    <div className="page-wrapper">
      <div className="container">

        {/* Header */}
        <div className={`animate-fade-up ${styles.header}`}>
          <span className="accent-line" />
          <h1 className="section-title">Sobre mim</h1>
          <p className={styles.lead}>
            Olá! Sou <strong>Vitor Ferreira</strong>, estudante de{' '}
            <strong>Sistemas para Internet</strong> na Universidade Católica de
            Pernambuco (UNICAP), cursando o 3º período. Tenho paixão por
            desenvolver soluções web que resolvem problemas reais — da interface
            ao banco de dados.
          </p>
          <p className={styles.lead} style={{ marginTop: '1rem' }}>
            Atualmente participo da <strong>Residência Tecnológica do Porto Digital</strong>,
            onde desenvolvo projetos de impacto social com foco em acessibilidade
            e inclusão digital. Acredito que tecnologia bem feita transforma vidas.
          </p>
        </div>

        {/* Hard Skills */}
        <div className={`animate-fade-up animate-fade-up-delay-1 ${styles.skills}`}>
          <h2 className={styles.skillsTitle}>Hard Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillGroup}>
              <span className="tag">Front-end</span>
              <div className={styles.skillTags}>
                {['React', 'CSS3', 'Next.js'].map(s => (
                  <span key={s} className={styles.skillTag}>{s}</span>
                ))}
              </div>
            </div>
            <div className={styles.skillGroup}>
              <span className="tag">Back-end</span>
              <div className={styles.skillTags}>
                {['Java', 'Springboot'].map(s => (
                  <span key={s} className={styles.skillTag}>{s}</span>
                ))}
              </div>
            </div>
            <div className={styles.skillGroup}>
              <span className="tag">Banco de Dados</span>
              <div className={styles.skillTags}>
                {['MySQL', 'PostgreSQL'].map(s => (
                  <span key={s} className={styles.skillTag}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack do app */}
        <div className={`animate-fade-up animate-fade-up-delay-2 ${styles.stack}`}>
          <span className="accent-line" />
          <h2 className="section-title">Tecnologias usadas neste app</h2>
          <p className="section-subtitle">
            O que foi utilizado para construir este portfólio.
          </p>

          {techs.map((group) => (
            <div key={group.category} className={styles.techGroup}>
              <h3 className={styles.techCategory}>{group.category}</h3>
              <div className={styles.techList}>
                {group.items.map((item) => (
                  <div key={item.name} className={`card ${styles.techCard}`}>
                    <strong className={styles.techName}>{item.name}</strong>
                    <p className={styles.techDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}