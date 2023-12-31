import styles from './Main.module.css';

export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <main className={styles.Main}>
            {children}
        </main>
    )
}
