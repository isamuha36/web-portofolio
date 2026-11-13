import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Isa Muhammad | Portfolio - Fullstack Engineer & System Analyst',
  description: 'Portofolio interaktif Isa Muhammad - Mahasiswa D4 Teknologi Rekayasa Perangkat Lunak UGM (IPK 3.82). Spesialis Fullstack Development, System Analysis & PRD, dan AI Automation.',
  keywords: [
    'Isa Muhammad',
    'UGM',
    'Software Engineering',
    'Fullstack Engineer',
    'System Analyst',
    'AI Automation',
    'Laravel',
    'Next.js',
    'ASP.NET',
    'Purworejo',
    'GSE Management'
  ],
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
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
