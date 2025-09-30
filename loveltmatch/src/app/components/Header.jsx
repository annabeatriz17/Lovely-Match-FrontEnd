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
                    width={200}
                    height={100}
                />
                <nav className={styles.nav}>
                    <Link href="/Home" className={styles.navLink}>Início</Link>
                    <Link href="/listagem" className={styles.navLink}>Sabores</Link>
                    <Link href="/sobre" className={styles.navLink}>Sobre Nós</Link>
                    <Link href="/contato" className={styles.navLink}>Contato</Link>
                    <Link href="/criacao" className={styles.ctaLink}>Criar Sabor</Link>
                </nav>
            </div>
        </div>
    );
}