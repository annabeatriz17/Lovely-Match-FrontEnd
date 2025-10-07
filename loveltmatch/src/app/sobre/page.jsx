"use client";
import styles from "./Sobre.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaInfoCircle, FaBullseye, FaGem, FaFlag, FaUserPlus } from "react-icons/fa";

export default function Sobre() {
    return (
        <main className={styles.container}>
            <Header />
            <section className={styles.content}>
                <main className={styles.cards}>
                    <div className={styles.card1}>
                        <h1 className={styles.title}>
                            <FaInfoCircle className={styles.icon} />
                            Sobre a LovelyMatch
                        </h1>
                        <p className={styles.subtitle}>
                            A <span className={styles.iceCreamFont}>LovelyMatch</span> nasceu da ideia de
                            transformar conexões digitais em experiências reais, leves e sinceras.
                            Somos mais do que um aplicativo: somos um espaço onde o amor, a amizade e o respeito
                            se encontram de forma autêntica.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.title}>
                            <FaBullseye className={styles.icon} />
                            Nosso Propósito
                        </h2>
                        <p className={styles.subtitle}>
                            Em um mundo acelerado, acreditamos que conexões reais ainda são possíveis — e
                            merecem ser vividas com verdade. A LovelyMatch foi criada para aproximar pessoas
                            que compartilham valores, sonhos e formas únicas de amar. Cada encontro começa com
                            um simples “oi”, mas pode se tornar o início de algo incrível.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.title}>
                            <FaGem className={styles.icon} />
                            Por que escolher a LovelyMatch?
                        </h2>
                        <p className={styles.subtitle}>
                            Nosso diferencial está no cuidado com cada detalhe. Desde o design acolhedor até
                            os recursos que priorizam segurança e conforto, tudo foi pensado para que você viva
                            boas experiências, sem pressa e sem pressão. Aqui, você é livre para ser quem é —
                            e encontrar quem combina com você.
                        </p>
                        <p className={styles.subtitle}>
                            A LovelyMatch utiliza tecnologia inteligente para ajudar você a encontrar pessoas
                            compatíveis de maneira natural e segura, sem perder o toque humano. Afinal, o amor
                            é feito de algoritmos... e de sentimentos também.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.title}>
                            <FaFlag className={styles.icon} />
                            Nossa Missão
                        </h2>
                        <p className={styles.subtitle}>
                            Queremos construir uma comunidade positiva, empática e divertida. Um lugar onde as
                            pessoas se sintam confortáveis para se expressar, conhecer novas histórias e, quem
                            sabe, viver o início de uma delas. A LovelyMatch acredita que toda conexão tem um
                            propósito — e que o amor certo chega quando estamos abertos a sentir.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2 className={styles.title}>
                            <FaUserPlus className={styles.icon} />
                            Junte-se a nós
                        </h2>
                        <p className={styles.subtitle}>
                            Faça parte da LovelyMatch e descubra um novo jeito de se conectar. Baixe o app,
                            crie seu perfil e deixe o destino fazer o resto. Pode ser o começo da sua melhor
                            história de amor.
                        </p>
                    </div>
                </main>
            </section>
            <div className={styles.botoes}>
                <a href="/Contato" className={styles.botao3}>
                    Fale Conosco
                </a>
            </div>
            <Footer />
        </main>
    );
}
