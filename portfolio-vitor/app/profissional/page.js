import styles from './page.module.css';

const experiences = [
  {
    period: 'Mar 2026 — Atual',
    role: 'Desenvolvedor Salesforce (MedConnect)',
    company: 'Projeto Independente',
    program: 'Desenvolvimento em Nuvem',
    location: 'Recife, PE',
    description:
      'Configuração de objetos personalizados (Medical Event, Speaker), implementação de lógica via Apex e arquitetura de plataforma Salesforce para gestão clínica.',
    tags: ['Salesforce', 'Apex', 'CRM', 'Cloud'],
    highlight: true,
  },
  {
    period: 'Ago 2025 — Dez 2025',
    role: 'Desenvolvedor Full-Stack (Beyond Co)',
    company: 'Porto Digital',
    program: 'Beyond Co / Squad 17',
    location: 'Recife, PE',
    description:
      'Desenvolvimento de aplicações de impacto social (Evoluo e ConnectTEA) para suporte à comunicação entre famílias e profissionais, premiado com Student Highlight.',
    tags: ['React', 'TypeScript', 'UI/UX', 'Supabase', 'Aluno Destaque — RiseUp (Beyond Co)'],
    highlight: true,
  },
  {
    period: 'Fev 2025 — Jul 2025',
    role: 'Residente Tecnológico',
    company: 'Porto Digital',
    program: 'Residência Tecnológica',
    location: 'Recife, PE',
    description:
      'Participação no programa de residência tecnológica, focando em metodologias ágeis (Scrum) e entrega de software com foco em acessibilidade e inovação.',
    tags: ['Figma', 'UI/UX', 'Design Thinking', 'Scrum'],
    highlight: false,
  },
];

export default function Profissional() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <div className={`animate-fade-up ${styles.header}`}>
          <span className="accent-line" />
          <h1 className="section-title">Experiência Profissional</h1>
          <p className="section-subtitle">Minha trajetória no mercado de tecnologia.</p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={`animate-fade-up ${styles.item}`} style={{ animationDelay: `${i * 0.12}s` }}>
              <div className={styles.connector}>
                <div className={`${styles.dot} ${exp.highlight ? styles.dotHighlight : ''}`} />
                {i < experiences.length - 1 && <div className={styles.line} />}
              </div>

              <div className={`card ${styles.card} ${exp.highlight ? styles.cardHighlight : ''}`}>
                <div className={styles.cardTop}>
                  <div>
                    <span className={styles.period}>{exp.period}</span>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                    <p className={styles.program}>{exp.program} — {exp.location}</p>
                  </div>
                </div>

                <p className={styles.desc}>{exp.description}</p>

                <div className={styles.tags}>
                  {exp.tags.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`animate-fade-up animate-fade-up-delay-2 ${styles.cta}`}>
          <div className="card">
            <p className={styles.ctaText}>
              Aberto a novas oportunidades, estágios e projetos freelance.
            </p>
            
            <a 
              href="mailto:vitorferr1412@gmail.com"
              className={styles.ctaBtn}
            >
              Entre em contato →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}