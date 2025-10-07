"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./Listagem.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;
const SERVER_BASE = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

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
                const response = await axios.get(`${API_BASE}/flavors`);
                setSabores(response.data);
                console.log("Sabores carregados:", response.data);
                console.log("SERVER_BASE:", SERVER_BASE);
            } catch (error) {
                setErro("Erro ao buscar os sabores. Verifique se a API está rodando.");
                console.error("Erro ao buscar os sabores:", error);
            }
        }
        fetchSabores();
    }, []);

    if (erro) {
        return <div className={styles.container}><p style={{ color: "red" }}>{erro}</p></div>;
    }

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.content}>
                <h1 className={styles.title}>Sabores de Sorvetes</h1>
                <div className={styles.casal}>
                    {sabores.length === 0 && <p>Nenhum sabor cadastrado.</p>}
                    {sabores.map((sabor) => (
                        <div key={sabor.id} className={styles.sabor}>
                            {sabor.photo && (
                                <Image
                                    src={`${SERVER_BASE}/uploads/${sabor.photo}`}
                                    alt={sabor.name}
                                    width={300}
                                    height={300}
                                    className={styles.saborImage}
                                    unoptimized
                                />
                            )}
                            <h3 className={styles.namesabor}>Nome: {sabor.name}</h3>
                            <p className={styles.descriptionsabor}>Descrição: {sabor.description}</p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}