"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./Criacao.module.css";
import Header from "../components/Header";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function CriacaoCasal() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");
    const [mensagem, setMensagem] = useState("");
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        setMensagem("");
        try {
            await axios.post(`${API_BASE}/couples`, { name, description, photo });
            setMensagem("Sabor do casal criado!");
            setName("");
            setDescription("");
            setPhoto("");
        } catch {
            setMensagem("Erro ao criar sabor do casal.");
        }
    }

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.content}>
                <h2 className={styles.title}>Criar Sabor do Casal</h2>
                <p className={styles.helper}>Cadastre um novo sabor que representa a combinação (casal) desejada.</p>
                <div className={styles.campocreate}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Nome do sabor"
                        required
                    />
                    <input
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Descrição do sabor"
                        required
                    />
                    <input
                        type="text"
                        value={photo}
                        onChange={e => setPhoto(e.target.value)}
                        placeholder="URL da imagem"
                        required
                    />
                    <button type="submit">Criar</button>
                </form>
                <div className={styles.actions}>
                    <button
                        type="button"
                        className={styles.backButton}
                        onClick={() => router.push('/listagem')}
                    >
                        Voltar
                    </button>
                </div>
                {mensagem && <p className={styles.message}>{mensagem}</p>}
                </div>
            </main>
        </div>
    );
}
