"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./Criacao.module.css";

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
            setMensagem("Casal criado!");
            setName("");
            setDescription("");
            setPhoto("");
        } catch {
            setMensagem("Erro ao criar casal.");
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Criar Casal</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome" required />
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" required />
                <input type="text" value={photo} onChange={e => setPhoto(e.target.value)} placeholder="Foto (URL)" required />
                <button type="submit">Criar</button>
            </form>
            <button type="button" onClick={() => router.push('/listagem')}>Voltar</button>
            {mensagem && <p>{mensagem}</p>}
        </div>
    );
}
