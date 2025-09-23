import "./globals.css";

export const metadata = {
    title: "LovelyMatch - Sorveteria Artesanal",
    description: "A melhor sorveteria artesanal da cidade. Sabores únicos e especiais.",
    icons: {
        icon: "/icons/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
