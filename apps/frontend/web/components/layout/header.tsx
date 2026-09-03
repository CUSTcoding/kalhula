"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useTransition } from "react";
import { useTranslations, useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";


export default function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const openAuth = (type: 'client' | 'professional') => {
    router.push(`/auth?type=${type}`);
  };
  const pathname = usePathname();

  const [aboutOpen, setAboutOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "pt" : "en";

    startTransition(() => {
      router.replace(pathname, {
        locale: nextLocale,
      });
    });

    setMobileOpen(false);
  };

  const closeMenus = () => {
    setAboutOpen(false);
    setLoginOpen(false);
    setMobileOpen(false);
    setMobileAboutOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full !text-background">
      {/* Header background */}
      <div className="absolute inset-0 border-b border-black/5 bg-white/80 backdrop-blur-xl" />

      <nav className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
        {/* ================= LOGO ================= */}

        <Link
          href="/"
          onClick={closeMenus}
          className="relative z-50 flex items-end gap-1"
        >
          <Image
            src="/imgs/logo.png"
            alt="Kalhula"
            width={40}
            height={40}
            priority
          />

          <span className="relative -mb-2 text-3xl font-bold tracking-tight">
            alhula
          </span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}

        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-8">

            {/* ABOUT */}
            <div
              className="relative"
              onMouseEnter={() => {
                setAboutOpen(true);
                setLoginOpen(false);
              }}
            >
              <button
                type="button"
                onClick={() => setAboutOpen((value) => !value)}
                className="
                  flex items-center gap-1.5
                  py-5 text-sm font-medium
                  transition-opacity
                  hover:opacity-60
                "
              >
                {t("about")}

                <motion.span
                  animate={{
                    rotate: aboutOpen ? 180 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="text-xs"
                >
                 <ChevronDown />
                </motion.span>
              </button>

              {/* MEGA MENU */}
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 12,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 12,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    onMouseLeave={() => setAboutOpen(false)}
                    className="
                      absolute left-1/2 top-full
                      w-[780px]
                      -translate-x-1/2
                      rounded-2xl
                      border border-black/5
                      bg-white
                      p-6
                      shadow-2xl
                    "
                  >
                    <div className="grid grid-cols-4 gap-6">

                      {/* SOBRE NÓS */}
                      <MegaMenuColumn
                        title={t("aboutSection.title")}
                      >
                        <MegaMenuLink
                          href="/about"
                          label={t("aboutSection.description")}
                          onClick={closeMenus}
                        />
                      </MegaMenuColumn>

                      {/* PARA USUÁRIOS */}
                      <MegaMenuColumn
                        title={t("forUsers.title")}
                      >
                        <MegaMenuLink
                          href="/find-professionals"
                          label={t("forUsers.findProfessionals")}
                          onClick={closeMenus}
                        />

                        <MegaMenuLink
                          href="/how-it-works"
                          label={t("forUsers.howItWorks")}
                          onClick={closeMenus}
                        />

                        <MegaMenuLink
                          href="/reviews"
                          label={t("forUsers.reviews")}
                          onClick={closeMenus}
                        />

                        <MegaMenuLink
                          href="/security"
                          label={t("forUsers.security")}
                          onClick={closeMenus}
                        />
                      </MegaMenuColumn>

                      {/* PARA PROFISSIONAIS */}
                      <MegaMenuColumn
                        title={t("forProfessionals.title")}
                      >
                        <MegaMenuLink
                          href="/professionals/create-profile"
                          label={t("forProfessionals.createProfile")}
                          onClick={closeMenus}
                        />

                        <MegaMenuLink
                          href="/professionals/find-clients"
                          label={t("forProfessionals.findClients")}
                          onClick={closeMenus}
                        />

                        <MegaMenuLink
                          href="/professionals/grow"
                          label={t("forProfessionals.growOnKalhula")}
                          onClick={closeMenus}
                        />

                        <MegaMenuLink
                          href="/pricing"
                          label={t("forProfessionals.proPlans")}
                          onClick={closeMenus}
                        />
                      </MegaMenuColumn>

                      {/* EMPRESA */}
                      <MegaMenuColumn
                        title={t("company.title")}
                      >
                        <MegaMenuLink
                          href="/recruitment"
                          label={t("company.recruitment")}
                          onClick={closeMenus}
                        />

                        <MegaMenuLink
                          href="/jobs"
                          label={t("company.jobBoard")}
                          onClick={closeMenus}
                        />

               
                      </MegaMenuColumn>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* PRICING */}

            <Link
              href="/pricing"
              className="
                text-sm font-medium
                transition-opacity
                hover:opacity-60
              "
            >
              {t("pricing")}
            </Link>

            <Link
              href="/contact"
              className="
                text-sm font-medium
                transition-opacity
                hover:opacity-60
              "
            >
              {t("contact")}
            </Link>

          </div>
        </div>

        {/* ================= DESKTOP ACTIONS ================= */}

        <div className="hidden items-center gap-2 md:flex">

          {/* LOGIN */}

          <div
            className="relative"
            onMouseEnter={() => {
              setLoginOpen(true);
              setAboutOpen(false);
            }}
            onMouseLeave={() => setLoginOpen(false)}
          >
            <button
              type="button"
              onClick={() => setLoginOpen((value) => !value)}
              className="
                flex items-center gap-1.5
                rounded-lg
                px-3 py-2
                text-sm font-medium
                transition-colors
                hover:bg-black/5
              "
            >
              {t("login.title")}

              <motion.span
                animate={{
                  rotate: loginOpen ? 180 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="text-xs"
              >
               <ChevronDown />
              </motion.span>
            </button>

            <AnimatePresence>
              {loginOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                    scale: 0.98,
                  }}
                  transition={{ duration: 0.18 }}
                  className="
                    absolute right-0 top-full
                    mt-2 w-64
                    rounded-xl
                    border border-black/5
                    bg-white
                    p-2
                    shadow-xl
                  "
                >
                  <MegaMenuLink
                    href="/auth?type=client"
                    label={t("login.client")}
                    onClick={closeMenus}
                  />

                  <MegaMenuLink
                    href="/auth?type=professional"
                    label={t("login.professional")}
                    onClick={closeMenus}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* LANGUAGE */}

          <button
            type="button"
            onClick={toggleLanguage}
            disabled={isPending}
            className="
              rounded-lg
              border border-black/10
              px-3 py-2
              text-sm font-medium
              transition-all
              hover:bg-black/5
              disabled:cursor-wait
              disabled:opacity-50
            "
          >
            {isPending ? "..." : t("language.toggle")}
          </button>
        </div>

        {/* ================= MOBILE BUTTON ================= */}

        <button
          type="button"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="
            relative z-50
            flex h-10 w-10
            items-center justify-center
            rounded-lg
            md:hidden
            hover:bg-black/5
          "
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 4.5 }
                  : { rotate: 0, y: 0 }
              }
              className="block h-0.5 w-6 bg-black"
            />

            <motion.span
              animate={{
                opacity: mobileOpen ? 0 : 1,
                x: mobileOpen ? -5 : 0,
              }}
              className="block h-0.5 w-6 bg-black"
            />

            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -4.5 }
                  : { rotate: 0, y: 0 }
              }
              className="block h-0.5 w-6 bg-black"
            />
          </div>
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenus}
              className="
                fixed inset-0 top-16
                z-30
                bg-black/20
                backdrop-blur-sm
                md:hidden
              "
            />

            {/* Menu */}

            <motion.div
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                absolute left-3 right-3 top-[4.5rem]
                z-40
                max-h-[calc(100vh-6rem)]
                overflow-y-auto
                rounded-2xl
                border border-black/5
                bg-white
                p-3
                shadow-2xl
                md:hidden
              "
            >

              {/* ABOUT */}

              <button
                type="button"
                onClick={() =>
                  setMobileAboutOpen((value) => !value)
                }
                className="
                  flex w-full
                  items-center justify-between
                  rounded-xl
                  px-4 py-3
                  text-left
                  font-medium
                  hover:bg-black/5
                "
              >
                {t("about")}

                <motion.span
                  animate={{
                    rotate: mobileAboutOpen ? 180 : 0,
                  }}
                >
                  ↓
                </motion.span>
              </button>

              {/* ABOUT CONTENT */}

              <AnimatePresence>
                {mobileAboutOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-5 px-4 pb-3 pt-2">

                      {/* SOBRE NÓS */}

                      <MobileSection
                        title={t("aboutSection.title")}
                        links={[
                          [
                            "/about",
                            t("aboutSection.description"),
                          ],
                        ]}
                        onClick={closeMenus}
                      />

                      {/* USUÁRIOS */}

                      <MobileSection
                        title={t("forUsers.title")}
                        links={[
                          [
                            "/find-professionals",
                            t("forUsers.findProfessionals"),
                          ],
                          [
                            "/how-it-works",
                            t("forUsers.howItWorks"),
                          ],
                          [
                            "/reviews",
                            t("forUsers.reviews"),
                          ],
                          [
                            "/security",
                            t("forUsers.security"),
                          ],
                        ]}
                        onClick={closeMenus}
                      />

                      {/* PROFISSIONAIS */}

                      <MobileSection
                        title={t("forProfessionals.title")}
                        links={[
                          [
                            "/professionals/create-profile",
                            t("forProfessionals.createProfile"),
                          ],
                          [
                            "/professionals/find-clients",
                            t("forProfessionals.findClients"),
                          ],
                          [
                            "/professionals/grow",
                            t("forProfessionals.growOnKalhula"),
                          ],
                          [
                            "/pricing",
                            t("forProfessionals.proPlans"),
                          ],
                        ]}
                        onClick={closeMenus}
                      />

                      {/* EMPRESA */}

                      <MobileSection
                        title={t("company.title")}
                        links={[
                          [
                            "/recruitment",
                            t("company.recruitment"),
                          ],
                          [
                            "/jobs",
                            t("company.jobBoard"),
                          ],
                          [
                            "/contact",
                            t("company.contact"),
                          ],
                          [
                            "/privacy",
                            t("company.privacy"),
                          ],
                        ]}
                        onClick={closeMenus}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* PRICING */}

              <Link
                href="/pricing"
                onClick={closeMenus}
                className="
                  block rounded-xl
                  px-4 py-3
                  font-medium
                  hover:bg-black/5
                "
              >
                {t("pricing")}
              </Link>

              <div className="my-3 h-px bg-black/10" />

              {/* LOGIN */}

              <MobileSection
                title={t("login.title")}
                links={[
                  [
                    "/login/user",
                    t("login.client"),
                  ],
                  [
                    "/login/professional",
                    t("login.professional"),
                  ],
                ]}
                onClick={closeMenus}
              />

              {/* LANGUAGE */}

              <button
                type="button"
                onClick={toggleLanguage}
                disabled={isPending}
                className="
                  mt-3 w-full
                  rounded-xl
                  border border-black/10
                  px-4 py-3
                  text-left
                  font-medium
                  hover:bg-black/5
                  disabled:opacity-50
                "
              >
                {isPending
                  ? "..."
                  : t("language.toggle")}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ========================================================= */
/* COMPONENTES                                                */
/* ========================================================= */

function MegaMenuColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-black/40">
        {title}
      </h3>

      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
}

function MegaMenuLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        group block
        rounded-lg
        px-3 py-2.5
        text-sm
        transition-colors
        hover:bg-black/5
      "
    >
      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
        {label}
      </span>
    </Link>
  );
}

function MobileSection({
  title,
  links,
  onClick,
}: {
  title: string;
  links: [string, string][];
  onClick: () => void;
}) {
  return (
    <div>
      <h3 className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-black/40">
        {title}
      </h3>

      <div>
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            onClick={onClick}
            className="
              block rounded-lg
              px-3 py-2.5
              text-sm
              transition-colors
              hover:bg-black/5
            "
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
