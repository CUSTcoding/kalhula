"use client";

import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { useState, useTransition } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "pt" : "en";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
   <header className="h-14 items-center bg-white justify-center flex w-screen">
    <nav className="flex items-center relative  justify-between w-full max-w-7xl px-4">

      <div className="absolute inset-0 z-10 w-full h-full cursed bg-fd-background/40 backdrop-blur-xs" />

      <Link href="/" className="flex items-end justify-center gap-1">
        <Image src="/imgs/logo.png" alt="Logo da empresa" width={40} height={40} />
        <span className="text-3xl font-bold relative -mb-2">alhula</span>
      </Link>

      <ul></ul>


    </nav>
   </header>
  );
}