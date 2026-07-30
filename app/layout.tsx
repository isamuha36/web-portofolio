import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Isa Muhammad | Portfolio - Fullstack Developer & System Analyst',
  description: 'Portofolio interaktif Isa Muhammad - Mahasiswa Teknologi Rekayasa Perangkat Lunak UGM. Spesialis Fullstack Development, System Architecture, Data Mining, dan AI Automation.',
  keywords: ['Isa Muhammad', 'UGM', 'Software Engineering', 'Fullstack Developer', 'System Analyst', 'AI Automation', 'Laravel', 'Next.js', 'ASP.NET'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
