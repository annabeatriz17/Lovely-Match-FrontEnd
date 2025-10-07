"use client";
import Link from "next/link";
import styles from "./Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.content}>
                <section className={styles.card}>
                    <h1 className={styles.title}>Sorveteria LovelyMatch</h1>
                    <p className={styles.subtitle}>
                        Os melhores sabores, combinados com você. Explore nosso cardápio e
                        descubra novidades geladas!
                    </p>
                    <div className={styles.links}>
                        <div className={styles.botoes}>
                            <Link href="/listagem" className={styles.botao1}>
                                Ver Sabores
                            </Link>
                            <Link href="/sobre" className={styles.botao2}>
                                Sobre Nós
                            </Link>
                            <Link href="/contato" className={styles.botao3}>
                                Contato
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}