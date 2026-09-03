import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-white text-black text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16">

        <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-2 pb-10 sm:pb-16">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              {t("getStartedTitle")}
            </h2>
            <div className="flex flex-col space-y-1 text-sm sm:text-base font-medium text-black">
              <Link href="#" className="hover:underline">{t("enterAsClient")}</Link>
              <Link href="#" className="hover:underline">{t("enterAsProfessional")}</Link>
              <Link href="#" className="hover:underline">{t("pricing")}</Link>
              <Link href="#" className="hover:underline">{t("howItWorks")}</Link>
              <Link href="#" className="hover:underline">{t("talkToTeam")}</Link>
            </div>
            <div className="pt-2">
              <Link
                href="#"
                className="inline-flex group relative items-center justify-center gap-2 rounded-lg bg-[var(--color-brand)]/60 px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-black transition hover:bg-[var(--color-brand)]"
              >
                <span>{t("join")}</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-black">
              {t("supportTitle")}
            </h3>
            <p className="max-w-md text-sm sm:text-base text-gray-600 leading-relaxed">
              {t("supportDesc")}
            </p>
            <div>
              <Link
                href="#"
                className="inline-flex group relative items-center justify-between gap-2 rounded-lg bg-[var(--color-brand-100)] hover:bg-[var(--color-brand)] px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-black transition"
              >
                <span>{t("contactSupport")}</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 my-6 sm:my-8" />

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-6 sm:pt-8">

          <div className="col-span-2 space-y-4 pr-0 md:pr-6">
            <Link href="/" className="flex items-end justify-start gap-1">
              <Image src="/imgs/logo.png" alt="Logo da empresa" width={32} height={32} className="sm:w-10 sm:h-10" />
              <span className="text-2xl sm:text-3xl font-bold relative -mb-1 sm:-mb-2">alhula</span>
            </Link>
            <p className="max-w-sm text-xs sm:text-sm text-gray-600 leading-relaxed">
              {t("brandDesc")}
            </p>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-bold text-black mb-3 sm:mb-4">
              {t("forUsersTitle")}
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-600">
              <li><Link href="#" className="hover:text-black">{t("findProfessionals")}</Link></li>
              <li><Link href="#" className="hover:text-black">{t("howItWorks")}</Link></li>
              <li><Link href="#" className="hover:text-black">{t("reviews")}</Link></li>
              <li><Link href="#" className="hover:text-black">{t("security")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-bold text-black mb-3 sm:mb-4">
              {t("forProfessionalsTitle")}
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-600">
              <li><Link href="#" className="hover:text-black">{t("createProfile")}</Link></li>
              <li><Link href="#" className="hover:text-black">{t("findClients")}</Link></li>
              <li><Link href="#" className="hover:text-black">{t("growOnKalhula")}</Link></li>
              <li><Link href="#" className="hover:text-black">{t("proPlans")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm sm:text-base font-bold text-black mb-3 sm:mb-4">
              {t("companyTitle")}
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-600">
              <li><Link href="#" className="hover:text-black">{t("recruitment")}</Link></li>
              <li><Link href="#" className="hover:text-black">{t("jobBoard")}</Link></li>
              <li><Link href="#" className="hover:text-black">{t("aboutUs")}</Link></li>
              <li><Link href="#" className="hover:text-black">{t("contact")}</Link></li>
              <li><Link href="#" className="hover:text-black">{t("privacy")}</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-10 sm:mt-16 border-t border-gray-200 pt-6 sm:pt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:flex-row md:justify-between text-xs text-gray-500 text-center md:text-left">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 items-center order-2 md:order-1">
            <Link href="#" className="hover:text-black font-medium">LinkedIn</Link>
            <Link href="#" className="hover:text-black font-medium">Instagram</Link>
            <Link href="#" className="hover:text-black font-medium">Nostr</Link>
            <Link href="#" className="hover:text-black font-medium">X</Link>
          </div>

          <p className="order-1 md:order-2 w-full md:w-auto">
            © {new Date().getFullYear()} Kalhula. {t("rights")}{" "}
            <a href="#" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-black">
              CST
            </a>.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 order-3">
            <Link href="#" className="hover:text-black">{t("terms")}</Link>
            <Link href="#" className="hover:text-black">{t("privacy")}</Link>
            <Link href="#" className="hover:text-black">{t("cookies")}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}