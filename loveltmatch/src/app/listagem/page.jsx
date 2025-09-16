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

	async function buscarCasaisESabores() {
		setLoading(true);
		try {
			const casaisRes = await axios.get("http://localhost:3000/api/couples");
			const saboresRes = await axios.get("http://localhost:3000/api/flavors");
			setCasais(casaisRes.data);
			setSabores(saboresRes.data);
		} catch (e) {
			alert("Erro ao buscar dados");
		}
		setLoading(false);
	}

	return (
			<div className={styles.container}>
				<h2 className={styles.titulo}>Casais/Sorvetes</h2>
				<div className={styles.botoes}>
					<button onClick={buscarCasaisESabores} disabled={loading}>
						{loading ? "Carregando..." : "Buscar"}
					</button>
					<button onClick={() => router.push('/criacao')}>Criar Casal</button>
				</div>
				<hr />
				{casais.map(casal => (
					<div key={casal.id} className={styles.casal}>
						<h3>{casal.name}</h3>
						<p><b>Descrição:</b> {casal.description}</p>
						<p><b>Foto:</b> {casal.photo}</p>
						<p><b>Data de criação:</b> {casal.created_at}</p>
						<div className={styles.sabores}>
							<b>Sabores Inspirados:</b>
							{sabores.filter(sabor => sabor.couple_inspiration === casal.name).map(sabor => (
								<div key={sabor.id} className={styles.sabor}>
									<p><b>Nome:</b> {sabor.name}</p>
									<p><b>Descrição:</b> {sabor.description}</p>
									<p><b>Data de criação:</b> {sabor.created_at}</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
	);
}