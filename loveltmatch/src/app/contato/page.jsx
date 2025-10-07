"use client";
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../contato/Contato.module.css';
import React, { useState } from 'react';

export default function Contato() {
    const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Mensagem enviada!');
        setForm({ nome: '', email: '', mensagem: '' });
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <h1 className={styles.title}>Contato</h1>
            </div>
            <p className={styles.description}>Tem alguma dúvida ou sugestão? Entre em contato conosco e teremos prazer em ajudar!</p>
            <div className={styles.containerForm}>
                <div className={styles.content2}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input
                            name="nome"
                            placeholder="Nome"
                            value={form.nome}
                            onChange={handleChange}
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        <textarea
                            name="mensagem"
                            placeholder="Mensagem"
                            value={form.mensagem}
                            onChange={handleChange}
                        />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
            );
}