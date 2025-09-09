"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./Criacao.module.css";

export default function CriacaoCasal() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [casalCriado, setCasalCriado] = useState(null);
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        setMensagem("");
        try {
            const res = await axios.post("http://localhost:3000/api/couples", {
                name,
                description,
                photo,
            });
            if (res.status === 201 || res.status === 200) {
                setMensagem("Casal criado com sucesso!");
                setCasalCriado({ name, description, photo });
                setName("");
                setDescription("");
                setPhoto("");
                setTimeout(() => {
                    router.push("/listagem");
                }, 2000);
            } else {
                setMensagem("Erro ao criar casal.");
            }
        } catch (err) {
            setMensagem("Erro de conexão com o servidor.");
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Criar Novo Casal</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Nome do Casal:
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Descrição:
                    <input
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Foto (URL):
                    <input
                        type="text"
                        value={photo}
                        onChange={e => setPhoto(e.target.value)}
                        placeholder="https://..."
                        required
                    />
                </label>
                <div className={styles.button}>
                    <button type="submit">Criar Casal</button>
                </div>
            </form>
            <div className={styles.button}>
                <button type="button" onClick={() => router.push('/listagem')} className={styles.button}>
                    ← Voltar para Listagem
                </button>
            </div>
            {mensagem && <p className={styles.p}>{mensagem}</p>}
            {casalCriado && (
                <div className={styles.cardSorvete}>
                    <div className={styles.cardTitle}>{casalCriado.name}</div>
                    <div className={styles.cardInfo}>Descrição: {casalCriado.description}</div>
                    {casalCriado.photo && (
                        <img src={casalCriado.photo} alt={casalCriado.name} style={{ maxWidth: '180px', borderRadius: '16px', marginTop: '12px' }} />
                    )}
                </div>
            )}
        </div>
    );
}
