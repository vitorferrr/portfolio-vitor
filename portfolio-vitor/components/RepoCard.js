import styles from './RepoCard.module.css';

export default function RepoCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={`card ${styles.card}`}
    >
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.icon}>⬡</span>
        <div className={styles.links}>
          {repo.homepage && (
            <span className={styles.liveBadge} title="Tem deploy">↗ Live</span>
          )}
        </div>
      </div>

      {/* Name */}
      <h3 className={styles.name}>{repo.name}</h3>

      {/* Description */}
      <p className={styles.desc}>
        {repo.description || 'Sem descrição disponível.'}
      </p>

      {/* Footer */}
      <div className={styles.footer}>
        {repo.language && (
          <span className={styles.lang}>
            <span className={styles.langDot} />
            {repo.language}
          </span>
        )}
        <span className={styles.stat}>★ {repo.stargazers_count}</span>
        <span className={styles.stat}>⑂ {repo.forks_count}</span>
      </div>
    </a>
  );
}