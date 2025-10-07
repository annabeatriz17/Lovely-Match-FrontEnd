import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <Image
                    src="/Logo-lovelymatch.png"
                    alt="Logo LovelyMatch"
                    width={100}
                    height={50}
                />
                <Link href="/Home" className={styles.title} aria-label="Ir para a página inicial">
                    LovelyMatch
                </Link>
                <nav className={styles.nav}>
                    <Link href="/Home" className={styles.navLink}>Início</Link>
                    <Link href="/Listagem" className={styles.navLink}>Sabores</Link>
                    <Link href="/Sobre" className={styles.navLink}>Sobre Nós</Link>
                    <Link href="/Contato" className={styles.navLink}>Contato</Link>
                    <Link href="/Criacao" className={styles.ctaLink}>Criar Sabor</Link>
                </nav>
            </div>
        </div>
    );
}