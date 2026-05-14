'use client';

import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Badge */}
        <div className={`tag animate-fade-up ${styles.badge}`}>
          Disponível para oportunidades
        </div>

        {/* Heading */}
        <h1 className={`animate-fade-up animate-fade-up-delay-1 ${styles.heading}`}>
          Vitor<br />
          <span className={styles.accent}>Ferreira</span>
        </h1>

        {/* Sub */}
        <p className={`animate-fade-up animate-fade-up-delay-2 ${styles.sub}`}>
          Estudante de <strong>Sistemas para Internet</strong> na UNICAP —
          desenvolvendo para a web com foco em experiências que importam.
        </p>

        {/* Stack chips */}
        <div className={`animate-fade-up animate-fade-up-delay-3 ${styles.chips}`}>
          {['HTML', 'CSS', 'JavaScript', 'Java', 'Python', 'MySQL', 'PostgreSQL'].map((s) => (
            <span key={s} className={styles.chip}>{s}</span>
          ))}
        </div>

        {/* CTAs */}
        <div className={`animate-fade-up animate-fade-up-delay-4 ${styles.ctas}`}>
          <Link href="/projetos" className={styles.ctaPrimary}>Ver Projetos</Link>
          <Link href="/sobre" className={styles.ctaSecondary}>Sobre mim →</Link>
        </div>
      </div>

      {/* Floating accent orb */}
      <div className={styles.orb} aria-hidden="true" />
    </div>
  );
}