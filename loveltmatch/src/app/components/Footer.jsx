import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {new Date().getFullYear()} LovelyMatch. Todos os direitos reservados.</p>
            </div>
        </div>
            );
}