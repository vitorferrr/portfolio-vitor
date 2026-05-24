import styles from './page.module.css';

const timeline = [
  {
    period: '2025 — Atual',
    institution: 'Universidade Católica de Pernambuco',
    short: 'UNICAP',
    degree: 'Tecnólogo em Sistemas para Internet',
    detail: '3º Período — Recife, PE',
    status: 'Em andamento',
    tags: ['Web', 'Redes', 'BD', 'Programação'],
  },
  {
    period: '2018 — 2021',
    institution: 'CNA — Centro de Línguas',
    short: 'CNA',
    degree: 'Inglês — Nível Avançado',
    detail: 'Formado com certificação de proficiência',
    status: 'Concluído',
    tags: ['Inglês', 'Idiomas'],
  },
  {
    period: '2019 — 2021',
    institution: 'Colégio Militar de Curitiba',
    short: 'CMC',
    degree: 'Ensino Médio',
    detail: 'Curitiba, PR — Formação integral com disciplina e liderança',
    status: 'Concluído',
    tags: ['Ensino Médio', 'COLEGIO MILITAR'],
  },
];

export default function Academica() {
  return (
    <div className="page-wrapper">
      <div className="container">

        <div className={`animate-fade-up ${styles.header}`}>
          <span className="accent-line" />
          <h1 className="section-title">Experiência Acadêmica</h1>
          <p className="section-subtitle">Minha trajetória de formação e estudos.</p>
        </div>

        <div className={styles.timeline}>
          {timeline.map((item, i) => (
            <div
              key={i}
              className={`animate-fade-up ${styles.item}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Linha vertical + dot */}
              <div className={styles.connector}>
                <div className={styles.dot} />
                {i < timeline.length - 1 && <div className={styles.line} />}
              </div>

              {/* Conteúdo */}
              <div className={`card ${styles.card}`}>
                <div className={styles.cardTop}>
                  <div>
                    <span className={styles.period}>{item.period}</span>
                    <h3 className={styles.degree}>{item.degree}</h3>
                    <p className={styles.institution}>{item.institution}</p>
                    <p className={styles.detail}>{item.detail}</p>
                  </div>
                  <span className={`tag ${item.status === 'Em andamento' ? styles.tagActive : styles.tagDone}`}>
                    {item.status}
                  </span>
                </div>

                <div className={styles.tags}>
                  {item.tags.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}