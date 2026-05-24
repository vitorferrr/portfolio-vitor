'use client';

import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={`tag animate-fade-up ${styles.badge}`}>
          Disponível para oportunidades
        </div>

        <h1 className={`animate-fade-up animate-fade-up-delay-1 ${styles.heading}`}>
          Vitor<br />
          <span className={styles.accent}>Ferreira</span>
        </h1>

        <p className={`animate-fade-up animate-fade-up-delay-2 ${styles.sub}`}>
          Estudante de <strong>Sistemas para Internet</strong> na UNICAP —
          desenvolvendo para a web com foco em experiências que importam.
        </p>

        <div className={`animate-fade-up animate-fade-up-delay-3 ${styles.chips}`}>
          {['Java', 'MySQL', 'PostgreSQL', 'React', 'Next.js', 'CSS'].map((s) => (
            <span key={s} className={styles.chip}>{s}</span>
          ))}
        </div>

        <div className={`animate-fade-up animate-fade-up-delay-4 ${styles.ctas}`}>
          <Link href="/projetos" className={styles.ctaPrimary}>Ver Projetos</Link>
          <Link href="/sobre" className={styles.ctaSecondary}>Sobre mim →</Link>
        </div>
      </div>

      <div className={styles.orb} aria-hidden="true" />
    </div>
  );
}