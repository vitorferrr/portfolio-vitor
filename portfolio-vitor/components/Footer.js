import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {year} <span>Vitor Ferreira</span> — Feito com Next.js
        </p>
        <div className={styles.links}>
          <a href="https://github.com/vitorferrr" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/vitor-dos-santos-ferreira-1b7990252/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}