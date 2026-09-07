import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adith Abhilash | AI & Data Science Engineer',
  description: 'Portfolio of Adith Abhilash, AI & Data Science Engineer specializing in AI agents, RAG architectures with source citations, NLP engines, and computer vision on edge companion computers.',
  keywords: ['Adith Abhilash', 'AI Engineer', 'Data Science Engineer', 'LLM', 'RAG', 'Computer Vision', 'Jetson Nano', 'LangChain', 'Python'],
  authors: [{ name: 'Adith Abhilash' }],
  openGraph: {
    title: 'Adith Abhilash | AI & Data Science Engineer',
    description: 'Specializing in AI Agents, RAG Architectures, NLP & Edge Computer Vision.',
    type: 'website',
    url: 'https://github.com/adith005',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased selection:bg-[#D4AF37]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
