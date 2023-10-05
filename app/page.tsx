import type { CSSProperties } from 'react';
import Image from 'next/image';
import fonts from '@/styles/fonts';
import styles from './page.module.css';

export default function Home() {
  const styleH1: CSSProperties = {
    ...fonts.zapfCalligraphic.style,
    fontSize: '72px',
  }

  const styleH2: CSSProperties = {
    ...fonts.optimaNova.style,
    fontSize: '36px',
  }

  const content = {
    title: `Hi, I'm Becca.`,
    subtitle: `I'm a full stack developer. I'm also in the process of building this site.`,

    paragraphs: [
      `You can check out what's here so far. I'm focusing on bare-bones stuff and documenting my recently new or in-progress projects for now.`,
      `You can also click the Github icon to get to know me and my code better.`,
      `I'd be pretty stoked if you checked out the resume link up there too. It's actually a webpage I built, designed for print-to-PDF. Much better than the word-processing experience!`,
    ]
  }

  return (
    <main className={styles.main}>
      <h1 style={styleH1}>{content.title}</h1>
      <h2 style={styleH2}>{content.subtitle}</h2>
      <div className={styles.paragraphs}>
        {
          content.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))
        }
      </div>
    </main>
  )
}
