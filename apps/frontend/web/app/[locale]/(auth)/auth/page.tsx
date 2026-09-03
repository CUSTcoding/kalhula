"use client";
import React, { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Mail, ArrowRight, ShieldCheck, User, Briefcase } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import type { AuthStep, ProfessionalStatus, UserRole } from "@/types";

type AuthUserRole = Exclude<UserRole, "admin">;

export default function AuthPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const typeFromUrl = searchParams.get('type');
  const selectedType: AuthUserRole = typeFromUrl === 'professional' ? 'professional' : 'client';
  const [step, setStep] = useState<AuthStep>('initial');
  const [professionalStatus, setProfessionalStatus] =
    useState<ProfessionalStatus>('none');
  const [email, setEmail] = useState('');
  
  // Estados para o KYC do Profissional
  const [biFile, setBiFile] = useState<File | null>(null);
  const [faceScan, setFaceScan] = useState<boolean>(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');

  const selectUserType = (type: AuthUserRole) => {
    setStep('initial');
    setProfessionalStatus('none');
    router.replace(`${pathname}?type=${type}`, { scroll: false });
  };

  const handleMagicLinkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (selectedType === 'client') {
      setStep('magic-link');
    } else {
      setStep('complete-profile');
    }
  };

  const handleKycSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!biFile || !faceScan || !phone1) {
      alert('Por favor, preencha todos os campos obrigatórios (BI, Rosto e Celular 1).');
      return;
    }
    setProfessionalStatus('pending');
    setStep('magic-link');
  };

  return (
    <div className="h-screen bg-white flex items-center justify-center font-sans">
      <div className="md:w-2/3 flex flex-col md:flex-row p-4 gap-6 h-2/3">
        
        {/* LADO ESQUERDO: Painel de Impacto / Info */}
        <div className="w-full md:w-[45%] bg-black rounded-[24px] p-8 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-black via-black to-[#4a2306]">
          {/* Efeito de luz no fundo */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#e65c00] to-transparent opacity-20 blur-xl pointer-events-none" />
          
          <div className="relative z-10">
            {selectedType === 'client' ? (
              <>
                <h1 className="text-3xl sm:text-4xl font-semibold text-white leading-tight tracking-tight">
                  Encontre profissionais de confiança perto de você.
                </h1>
                <p className="text-gray-400 mt-6 text-sm sm:text-base leading-relaxed">
                  Descubra profissionais qualificados na sua região e encontre pessoas em quem pode confiar para transformar suas necessidades em soluções.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-3xl sm:text-4xl font-semibold text-white leading-tight tracking-tight">
                  Aqui, o trabalho vem até você.
                </h1>
                <p className="text-gray-400 mt-6 text-sm sm:text-base leading-relaxed">
                  Seu trabalho merece ser encontrado. Cadastre-se e comece a receber pedidos. Milhares de pessoas procuram profissionais como você todos os dias.
                </p>
              </>
            )}
          </div>


        </div>

        {/* LADO DIREITO: Formulários Dinâmicos */}
        <div className="w-full md:w-[55%] flex flex-col justify-center px-2 py-4 sm:p-8">
          
          {/* Toggle de Tipo de Usuário (Só aparece no início) */}
          {step === 'initial' && (
            <div className="grid grid-cols-2 gap-2 bg-zinc-100 p-1.5 rounded-xl mb-8">
              <button
                type="button"
                onClick={() => {
                  selectUserType('client');
                }}
                className={`flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all ${
                  selectedType === 'client'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-800'
                }`}
              >
                <User size={16} />
                Buscar Serviços
              </button>
              <button
                type="button"
                onClick={() => selectUserType('professional')}
                className={`flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all ${
                  selectedType === 'professional'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-800'
                }`}
              >
                <Briefcase size={16} />
                Profissional
              </button>
            </div>
          )}


          {step === 'initial' && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-[#e65c00] rounded-md flex items-center justify-center text-white font-bold text-xs"></div>
                <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase">
                  {selectedType === 'client' ? 'Cliente' : 'Profissional'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">Começar Agora</h2>

            {/* Formulário Magic Link */}
              <form onSubmit={handleMagicLinkSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-600 uppercase mb-2">Seu e-mail</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="exemplo@gmail.com"
                      className="w-full pl-10 pr-4 py-3 border border-zinc-200 rounded-xl text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#e65c00] focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>

                {selectedType === 'client' && (
                    <button
                    type="submit"
                    className="w-full bg-[#e65c00] hover:bg-[#cc5200] text-white font-medium py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-700/10"
                    >
                        Encontre o profissional ideal.
                        <ArrowRight size={16} />
                    </button>                    
                )

                }:{selectedType === 'professional' && (
                    <button
                    type="submit"
                    className="w-full bg-[#e65c00] hover:bg-[#cc5200] text-white font-medium py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-700/10"
                    >
                        Crie sua conta profissional.
                        <ArrowRight size={16} />
                    </button>
                )}
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-200"></div></div>
                <div className="relative flex justify-center text-xs text-zinc-400 uppercase"><span className="bg-white px-2">Ou continue com</span></div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="flex items-center text-center cursor-pointer justify-center text-zinc-500 gap-2 border border-zinc-200 hover:border-zinc-300 py-2.5 rounded-xl text-sm font-medium transition-colors">
                  <FcGoogle size={30}/>
                  Google
                </button>
                <button className="flex items-center text-center cursor-pointer justify-center text-zinc-500 gap-2 border border-zinc-200 hover:border-zinc-300 py-2.5 rounded-xl text-sm font-medium transition-colors">
                  <IoLogoApple size={30}/>
                  Apple
                </button>
              </div>
            </div>
          )}

          {step === 'complete-profile' && (
            <form onSubmit={handleKycSubmit} className="space-y-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
                  Complete o seu perfil
                </h2>
                <p className="mt-2 text-sm text-zinc-500">
                  Precisamos de alguns dados para validar o seu perfil profissional.
                </p>
              </div>

              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase text-zinc-600">BI</span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  required
                  onChange={(event) => setBiFile(event.target.files?.[0] ?? null)}
                  className="block w-full text-sm text-zinc-500 file:mr-4 file:rounded-lg file:border-0 file:bg-orange-50 file:px-3 file:py-2 file:text-sm file:font-medium file:text-[#e65c00]"
                />
              </label>

              <label className="flex items-center gap-3 rounded-xl border border-zinc-200 p-3 text-sm text-zinc-600">
                <input
                  type="checkbox"
                  checked={faceScan}
                  onChange={(event) => setFaceScan(event.target.checked)}
                  className="h-4 w-4 accent-[#e65c00]"
                />
                Confirmo que a verificação facial foi realizada.
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase text-zinc-600">Celular principal</span>
                <input
                  type="tel"
                  required
                  value={phone1}
                  onChange={(event) => setPhone1(event.target.value)}
                  className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#e65c00]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase text-zinc-600">Celular alternativo (opcional)</span>
                <input
                  type="tel"
                  value={phone2}
                  onChange={(event) => setPhone2(event.target.value)}
                  className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#e65c00]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase text-zinc-600">Currículo (opcional)</span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(event) => setCvFile(event.target.files?.[0] ?? null)}
                  className="block w-full text-sm text-zinc-500 file:mr-4 file:rounded-lg file:border-0 file:bg-orange-50 file:px-3 file:py-2 file:text-sm file:font-medium file:text-[#e65c00]"
                />
                {cvFile && <span className="mt-1 block text-xs text-zinc-500">{cvFile.name}</span>}
              </label>

              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e65c00] py-3 text-sm font-medium text-white transition-colors hover:bg-[#cc5200]">
                Enviar para validação
                <ArrowRight size={16} />
              </button>
            </form>
          )}

          {step === 'magic-link' && (
            <div className="space-y-4">
              <ShieldCheck className="h-10 w-10 text-[#e65c00]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">Verifique o seu e-mail</h2>
              <p className="text-sm leading-relaxed text-zinc-500">
                Enviámos um link de acesso para <strong className="text-zinc-800">{email}</strong>.
                {professionalStatus === 'pending' && ' O seu perfil profissional está pendente de validação.'}
              </p>
              <button type="button" onClick={() => setStep('initial')} className="text-sm font-medium text-[#e65c00] hover:underline">
                Usar outro e-mail
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
