"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Listagem.module.css";
import Image from "next/image";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export default function Listagem() {
    const [sabores, setSabores] = useState([]);
    const [erro, setErro] = useState("");

    useEffect(() => {
        if (!API_BASE) {
            setErro("API_BASE não está definida. Verifique seu arquivo .env.local.");
            return;
        }
        async function fetchSabores() {
            try {
                const response = await axios.get(`${API_BASE}/api/flavors`);
                setSabores(response.data);
            } catch (error) {
                setErro("Erro ao buscar os sabores. Verifique se a API está rodando.");
                console.error("Erro ao buscar os sabores:", error);
            }
        }
        fetchSabores();
    }, []);

    if (erro) {
        return <div className={styles.container}><p style={{color: "red"}}>{erro}</p></div>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Sabores Cadastrados</h2>
            <div className={styles.casal}>
                {sabores.length === 0 && <p>Nenhum sabor cadastrado.</p>}
                {sabores.map((sabor) => (
                    <div key={sabor.id} className={styles.sabor}>
                        {sabor.photo && (
                            <Image
                                src={`${API_BASE}/uploads/${sabor.photo}`}
                                alt={sabor.name}
                                width={300}
                                height={300}
                                className={styles.saborImage}
                                unoptimized
                            />
                        )}
                        <h3 className={styles.saborName}>{sabor.name}</h3>
                        <p className={styles.saborDescription}>{sabor.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}