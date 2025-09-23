"use client";
import Link from "next/link";
import styles from "./Home.module.css";
import Header from "../components/Header";


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
                        <Link href="/listagem" className={styles.botao1}>
                            Ver Sabores
                        </Link>
                        <Link href="/" className={styles.botao2}>
                            Promoções
                        </Link>
                        <Link href="/" className={styles.botao3}>
                            Contato
                        </Link>
                    </div>
                </section>
                <section className={styles.cards}>
                    <div className={styles.card1}>
                        🍦 Clássicos Cremosos
                        <span>Chocolate, Baunilha, Morango</span>
                    </div>
                    <div className={styles.card2}>
                        🧇 Acompanhamentos
                        <span>Coberturas, castanhas e caldas</span>
                    </div>
                    <div className={styles.card3}>
                        🥭 Sabores do Dia
                        <span>Rotativo e fresquinho</span>
                    </div>
                </section>
            </main>
        </div>
    );
}