"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headercontainer}>
                        <Image
                            src="/Logo-lovelymatch.png"
                            alt="Logo LovelyMatch"
                            width={200}
                            height={150}
                            className={styles.logoImg}
                            priority
                        />
                    <nav className={styles.nav}>
                        <Link href="/" className={styles.navLink}>Início</Link>
                        <Link href="/listagem" className={styles.navLink}>Sabores</Link>
                        <Link href="/sobre" className={styles.navLink}>Sobre</Link>
                        <Link href="/criacao" className={styles.ctaLink}>Criar Sabor</Link>
                    </nav>
                </div>
            </header>
            <main className={styles.container}>
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