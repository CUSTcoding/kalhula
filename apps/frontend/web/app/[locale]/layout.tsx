import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kalhula — Encontre profissionais de qualificados perto de si",
    template: "%s | Kalhula",
  },
  description:
    "Kalhula liga-o a electricistas, canalizadores, diaristas e outros profissionais informais em Maputo e Matola. Contratação rápida, avaliações reais e mais confiança para o seu biscate.",
  keywords: [
    "Kalhula",
    "profissionais Maputo",
    "electricista Maputo",
    "canalizador Maputo",
    "diarista Matola",
    "biscate Moçambique",
    "encontrar profissionais perto de mim",
    "serviços domésticos Maputo",
    "app de biscates Moçambique",
  ],
  authors: [{ name: "Kalhula" }],
  metadataBase: new URL("https://kalhula.vercel.app/"),

  openGraph: {
    title: "Kalhula — Profissionais de qualificados, a um toque de distância",
    description:
      "Localize, avalie e contrate profissionais informais em Maputo e Matola de forma rápida e segura.",
    url: "https://kalhula.vercel.app/",
    siteName: "Kalhula",
    images: [
      {
        url: "/og-image.png", // 1200x630px
        width: 1200,
        height: 630,
        alt: "Kalhula — profissionais perto de si",
      },
    ],
    locale: "pt_MZ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kalhula — Profissionais de confiança, a um toque de distância",
    description:
      "Encontre e contrate profissionais informais perto de si em Maputo e Matola.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
