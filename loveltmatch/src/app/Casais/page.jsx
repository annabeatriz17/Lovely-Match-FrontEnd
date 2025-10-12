import Link from "next/link";
import styles from "./Casais.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

async function getCasais() {
	try {
		const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
		const res = await fetch(`${base}/api/couples`, { 
			cache: "no-store",
			headers: { "Content-Type": "application/json" }
		});
		
		if (!res.ok) throw new Error(`Erro ${res.status}: ${res.statusText}`);
		
		const data = await res.json();
		
		return data.map(casal => {
			const nomes = casal.name ? casal.name.split(' e ') : ['', ''];
			
			return {
				id: casal.id,
				pessoa1: {
					nome: nomes[0]?.trim() || "—",
					idade: null,
					cidade: null,
				},
				pessoa2: {
					nome: nomes[1]?.trim() || "—",
					idade: null,
					cidade: null,
				},
				dataMatch: casal.createdAt || casal.created_at || null,
				descricao: casal.description || "—",
				foto: `/images/casal${casal.id}.png`
			};
		});
	} catch (err) {
		console.error("Erro ao buscar casais:", err);
		return [];
	}
}

export default async function Page() {
	const casais = await getCasais();

	return (
		<>
			<Header />
			<main className={styles.container}>
				<div className={styles.header}>
					<h1 className={styles.title}>Casais Formados</h1>
					<p className={styles.subtitle}>Histórias de amor que começaram aqui</p>
				</div>

				{!casais || casais.length === 0 ? (
					<div className={styles.empty}>
						<p>Nenhum casal encontrado ainda.</p>
						<Link href="/Listagem" className={styles.link}>Ver perfis disponíveis</Link>
					</div>
				) : (
					<div className={styles.grid}>
						{casais.map((casal) => (
							<div key={casal.id} className={styles.card}>
								<div className={styles.photoWrapper}>
									{casal.foto ? (
										// eslint-disable-next-line @next/next/no-img-element
										<img
											src={casal.foto}
											alt={`${casal.pessoa1?.nome} e ${casal.pessoa2?.nome}`}
											className={styles.coupleImg}
										/>
									) : (
										<div className={styles.photoPlaceholder}>
											<span>❤️</span>
										</div>
									)}
								</div>

								<div className={styles.info}>
									<h3 className={styles.names}>
										{casal.pessoa1?.nome || "—"} & {casal.pessoa2?.nome || "—"}
									</h3>
									
									<div className={styles.details}>
										<div className={styles.person}>
											<p className={styles.label}>Pessoa 1:</p>
											<p>{casal.pessoa1?.nome || "—"}</p>
											{(casal.pessoa1?.idade || casal.pessoa1?.cidade) && (
												<p className={styles.meta}>
													{casal.pessoa1?.idade ? `${casal.pessoa1.idade} anos` : ""}
													{casal.pessoa1?.cidade && ` • ${casal.pessoa1.cidade}`}
												</p>
											)}
										</div>

										<div className={styles.person}>
											<p className={styles.label}>Pessoa 2:</p>
											<p>{casal.pessoa2?.nome || "—"}</p>
											{(casal.pessoa2?.idade || casal.pessoa2?.cidade) && (
												<p className={styles.meta}>
													{casal.pessoa2?.idade ? `${casal.pessoa2.idade} anos` : ""}
													{casal.pessoa2?.cidade && ` • ${casal.pessoa2.cidade}`}
												</p>
											)}
										</div>
									</div>

									{casal.dataMatch && (
										<p className={styles.date}>
											Match em: 10/10/2023
										</p>
									)}

									{casal.descricao && (
										<p className={styles.description}>{casal.descricao}</p>
									)}
								</div>
							</div>
						))}
					</div>
				)}
			</main>
			<Footer />
		</>
	);
}