"use client";
import { useState } from "react";
import axios from "axios";
import styles from "./Listagem.module.css";
import { useRouter } from "next/navigation";

export default function Listagem() {
	const [casais, setCasais] = useState([]);
	const [sabores, setSabores] = useState([]);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const buscarCasaisESabores = async () => {
		setLoading(true);
		try {
			const [casaisRes, saboresRes] = await Promise.all([
				axios.get("http://localhost:3000/api/couples"),
				axios.get("http://localhost:3000/api/flavors")
			]);
			setCasais(casaisRes.data);
			setSabores(saboresRes.data);
		} catch (error) {
			console.error("Erro ao buscar casais/sabores:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleCardClick = (id) => {
		router.push(`/detalhes/${id}`);
	};

	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				<h1 className={styles.title}>Casais/Sorvetes Cadastrados</h1>
				<div className={styles.button}>
					<button onClick={buscarCasaisESabores} disabled={loading} className={styles.button}>
						{loading ? "Carregando..." : "🔍Buscar Casais e Sabores"}
					</button>
				</div>
			</div>
			<div className={styles.cardss}>
				{casais.map((casal) => (
					<div
						key={casal.id}
						className={styles.cardSorvete}
						onClick={() => handleCardClick(casal.id)}
					>
						<h3 className={styles.cardTitle}>{casal.name}</h3>
						<div className={styles.cardText}>
							<p className={styles.cardInfo}><strong>Descrição:</strong> {casal.description}</p>
							<p className={styles.cardInfo}><strong>Foto:</strong> {casal.photo}</p>
							<p className={styles.cardInfo}><strong>Data de criação:</strong> {casal.created_at}</p>
						</div>
						<div className={styles.cardText}>
							<h4>Sabores Inspirados:</h4>
							{sabores.filter(sabor => sabor.couple_inspiration === casal.name).map(sabor => (
								<div key={sabor.id} className={styles.saborInfo}>
									<p><strong>Nome:</strong> {sabor.name}</p>
									<p><strong>Descrição:</strong> {sabor.description}</p>
									<p><strong>Data de criação:</strong> {sabor.created_at}</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}