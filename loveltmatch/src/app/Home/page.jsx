"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";
import Header from "../components/Header";


export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            src: "/sorvete2.jpg",
            alt: "Sorvetes Artesanais",
            title: "Sabores Únicos",
            description: "Descubra nossa coleção exclusiva de sorvetes artesanais feitos com ingredientes selecionados."
        },
        {
            src: "/slide2.jpg", 
            alt: "Ambiente Acolhedor",
            title: "Ambiente Acolhedor",
            description: "Desfrute de nosso espaço confortável e aconchegante, perfeito para toda a família."
        },
        {
            src: "/slide3.jpg",
            alt: "Qualidade Premium",
            title: "Qualidade Premium",
            description: "Utilizamos apenas os melhores ingredientes para criar experiências inesquecíveis."
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

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

                {/* Carrossel */}
                <section className={styles.carousel}>
                    <div className={styles.carouselContainer}>
                        <div className={styles.carouselIndicators}>
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`${styles.indicator} ${currentSlide === index ? styles.active : ''}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        
                        <div className={styles.carouselInner}>
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`${styles.carouselItem} ${currentSlide === index ? styles.active : ''}`}
                                >
                                    <Image
                                        src={slide.src}
                                        alt={slide.alt}
                                        width={800}
                                        height={400}
                                        className={styles.carouselImage}
                                    />
                                    <div className={styles.carouselCaption}>
                                        <h5 className={styles.carouselTitle}>{slide.title}</h5>
                                        <p className={styles.carouselDescription}>{slide.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button 
                            className={styles.carouselControlPrev} 
                            type="button" 
                            onClick={prevSlide}
                        >
                            <span className={styles.carouselControlIcon}>‹</span>
                            <span className={styles.visuallyHidden}>Anterior</span>
                        </button>
                        
                        <button 
                            className={styles.carouselControlNext} 
                            type="button" 
                            onClick={nextSlide}
                        >
                            <span className={styles.carouselControlIcon}>›</span>
                            <span className={styles.visuallyHidden}>Próximo</span>
                        </button>
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