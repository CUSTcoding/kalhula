'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  UserCheck, 
  Search, 
  MessageSquare, 
  Star, 
  CheckCircle2, 
  ChevronDown, 
  Lock, 
  Award, 
  Zap,
  Wrench,
  Sparkles,
  Paintbrush,
  Truck
} from 'lucide-react';

import AIAssistantButton from "../ui/AIAssistantButton";

export default function HeroPage() {
  const router = useRouter();
  const [mouseDirection, setMouseDirection] = useState(0);
  const [howItWorksTab, setHowItWorksTab] = useState<'client' | 'professional'>('client');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openAuth = (type: 'client' | 'professional') => {
    router.push(`/auth?type=${type}`);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = e;
    const width = currentTarget.offsetWidth;
    const centerX = currentTarget.offsetLeft + width / 2;
    setMouseDirection(clientX < centerX ? -1 : 1);
  };

  const handleMouseLeave = () => {
    setMouseDirection(0);
  };

  const backgroundTags = [
    { text: 'Mecânico', className: 'top-10 right-[30%]', baseOpacity: 0.4, dist: 0.85 },
    { text: 'Eletricista', className: 'top-10 left-[45%]', baseOpacity: 0.5, dist: 0.5 },
    { text: 'Encanador', className: 'top-16 left-[30%]', baseOpacity: 0.3, dist: 0.6 },
    { text: 'Limpador de Piscina', className: 'top-24 left-[15%]', baseOpacity: 0.4, dist: 0.8 },
    { text: 'Diarista', className: 'top-20 left-[53%]', baseOpacity: 0.5, dist: 0.45 },
    { text: 'Médico', className: 'top-36 right-[25%]', baseOpacity: 0.3, dist: 0.6 },
    { text: 'Faxineira', className: 'top-[280px] right-[20%]', baseOpacity: 0.6, dist: 0.65 },
    { text: 'Babá', className: 'bottom-[60%] left-[20%]', baseOpacity: 0.5, dist: 0.8 },
    { text: 'Entregador', className: 'bottom-24 left-[42%]', baseOpacity: 0.4, dist: 0.5 },
    { text: 'Motorista', className: 'bottom-28 right-[28%]', baseOpacity: 0.6, dist: 0.7 },
    { text: 'Pintor', className: 'top-[320px] left-[18%]', baseOpacity: 0.7, dist: 0.85 },
    { text: 'Pedreiro', className: 'bottom-16 left-[35%]', baseOpacity: 0.6, dist: 0.5 },
    { text: 'Jardineiro', className: 'bottom-12 left-[50%] font-medium', baseOpacity: 0.8, dist: 0.4 },
    { text: 'Chaveiro', className: 'bottom-14 right-[35%]', baseOpacity: 0.5, dist: 0.6 },
    { text: 'Marceneiro', className: 'bottom-20 left-[25%]', baseOpacity: 0.7, dist: 0.7 },
  ];

  const categories = [
    { name: 'Reparos & Manutenção', icon: Wrench, count: '+1.200 Profissionais' },
    { name: 'Limpeza e Diária', icon: Sparkles, count: '+850 Profissionais' },
    { name: 'Pintura & Decoração', icon: Paintbrush, count: '+430 Profissionais' },
    { name: 'Transporte & Mudanças', icon: Truck, count: '+600 Profissionais' },
  ];

  const faqs = [
    {
      q: 'Como funciona a verificação dos profissionais?',
      a: 'Todos os profissionais passam por uma checagem rigorosa que inclui verificação de documento de identidade (BI), scanner facial em tempo real e histórico de antecedentes para garantir máxima segurança.'
    },
    {
      q: 'Pago alguma taxa para solicitar orçamentos?',
      a: 'Não! Para os clientes, buscar e contactar profissionais é 100% gratuito. Você acerta o valor diretamente com o profissional.'
    },
    {
      q: 'Sou profissional, como recebo os pedidos?',
      a: 'Após o cadastro com BI e scanner de rosto concluídos, seu perfil fica visível para milhares de clientes na sua região. Você recebe notificações instantâneas e fala direto com o cliente.'
    },
    {
      q: 'Existe mensalidade obrigatória para profissionais?',
      a: 'Não há cobrança de mensalidade prévia para começar a receber contatos na plataforma.'
    }
  ];

  return (
    <main className="w-full bg-white overflow-hidden font-sans">
      <AIAssistantButton/>

      {/* HERO SECTION - CLIENTE */}
      <section className="mx-auto flex min-h-screen w-full md:max-w-7xl flex-col items-center justify-center gap-10 px-6 py-20 md:flex-row">
        <motion.div 
          className="flex w-full flex-col items-start md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="max-w-xl text-4xl font-bold leading-tight text-neutral-900 md:text-6xl">
            Encontre profissionais de confiança perto de você
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-800">
            Descubra profissionais qualificados na sua região e encontre pessoas em quem pode confiar para transformar suas necessidades em soluções.
          </p>

          <button
            type="button"
            onClick={() => openAuth('client')}
            className="mt-8 rounded-full bg-black px-8 py-4 font-medium text-white transition hover:scale-105 hover:bg-neutral-800 shadow-lg"
          >
            Encontrar profissional
          </button>
        </motion.div>

        <motion.div 
          className="relative h-[350px] w-full md:h-[500px] md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/imgs/client_Img.png"
            alt="Pessoa encontrando um profissional através da Kalhula"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </section>

      {/* HERO SECTION - PROFISSIONAL */}
 <section

onMouseMove={handleMouseMove}

onMouseLeave={handleMouseLeave}

className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-10 px-6 py-20 bg-white relative overflow-hidden select-none"

>

<div className="relative h-[70%] w-full items-center flex justify-center">

<div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">

{backgroundTags.map((tag, index) => {

const moveAmount = 20 + tag.dist * 60;

const xOffset =

mouseDirection === -1 ? moveAmount :

mouseDirection === 1 ? -moveAmount :

0;


const interactionOpacity = mouseDirection === 0

? tag.baseOpacity

: tag.baseOpacity * (0.4 + tag.dist * 0.6);


return (

<motion.span

key={index}

className={`absolute px-4 py-2 bg-white text-gray-700 text-sm rounded-xl border border-gray-100 whitespace-nowrap cursor-default pointer-events-auto transition-colors duration-200 hover:border-black hover:text-black ${tag.className}`}

style={{ opacity: tag.baseOpacity }}

animate={{

x: xOffset,

opacity: interactionOpacity,

scale: mouseDirection === 0 ? 1 : 1 + tag.dist * 0.06,

}}

transition={{

type: 'spring',

stiffness: 60,

damping: 15,

delay: index * 0.015,

}}

whileHover={{ scale: 1.08, opacity: 1 }}

>

{tag.text}

</motion.span>

);

})}

</div>


<div className="flex items-center justify-center gap-4 mb-10 p-4 w-auto border-2 border-dashed border-red-500 rounded-2xl md:px-8 relative z-10">

<div className="flex items-center text-5xl md:text-7xl font-black text-black tracking-tighter">

K

<span className="text-red-500 ml-1 flex flex-col justify-center gap-6 px-1 leading-[0] text-4xl md:text-5xl">

<span>•</span><span>•</span>

</span>

</div>


<h1 className="max-w-xl text-2xl font-bold leading-tight text-neutral-900 md:text-4xl">

Aqui, o trabalho vem até você

</h1>

</div>

</div>


<motion.div

className="flex w-full h-[20%] flex-col items-center text-center"

initial={{ opacity: 0, y: 24 }}

whileInView={{ opacity: 1, y: 0 }}

viewport={{ once: true, amount: 0.4 }}

transition={{ duration: 0.6, ease: 'easeOut' }}

>


<h2 className="text-2xl font-bold text-neutral-900 md:text-4xl tracking-tight">

Seu trabalho merece ser encontrado. Cadastre-se e comece a receber pedidos

</h2>


<p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-800">

Milhares de pessoas procuram profissionais como você todos os dias.

Crie seu perfil, mostre seus serviços e deixe que os clientes venham até você.

</p>


<div className="mt-8 flex flex-col-reverse sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">

<motion.button

type="button"

onClick={() => openAuth('professional')}

className="w-full sm:w-auto rounded-full bg-white border border-neutral-300 px-8 py-4 font-medium text-neutral-900 transition hover:bg-neutral-50 hover:scale-105 shadow-sm"

animate={{ scale: [1, 1.04, 1] }}

transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}

whileHover={{ scale: 1.08 }}

>

Cadastrar me Agora

</motion.button>

</div>


<p className="mt-4 text-sm text-neutral-500">

Sem mensalidade · Perfil pronto em menos de 5 minutos

</p>

</motion.div>

</section> 

      {/* NOVA SEÇÃO 1: COMO FUNCIONA (SCROLL TRIGGER + TABS) */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">Passo a Passo</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Como a plataforma funciona</h2>
            
            {/* Toggle Switch */}
            <div className="mt-8 inline-flex p-1 bg-neutral-800 rounded-full border border-neutral-700">
              <button
                onClick={() => setHowItWorksTab('client')}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  howItWorksTab === 'client' ? 'bg-orange-500 text-white shadow-md' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Para Clientes
              </button>
              <button
                onClick={() => setHowItWorksTab('professional')}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  howItWorksTab === 'professional' ? 'bg-orange-500 text-white shadow-md' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Para Profissionais
              </button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {howItWorksTab === 'client' ? (
              <motion.div 
                key="client-steps"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {[
                  { icon: Search, title: "1. Busque o Serviço", desc: "Digite o que precisa e encontre dezenas de profissionais disponíveis na sua zona." },
                  { icon: UserCheck, title: "2. Analise Perfis", desc: "Veja avaliações, histórico, biografia e fotos de trabalhos anteriores." },
                  { icon: MessageSquare, title: "3. Contate Direto", desc: "Entre em contato via Magic Link sem complicações e combine o serviço." }
                ].map((step, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -8 }}
                    className="p-8 bg-neutral-800/50 border border-neutral-700/50 rounded-3xl"
                  >
                    <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mb-6">
                      <step.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-neutral-400 leading-relaxed text-sm">{step.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="pro-steps"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {[
                  { icon: ShieldCheck, title: "1. Registo e Validação", desc: "Insira seus dados, faça upload do BI e conclua o scanner facial para selo de verificação." },
                  { icon: Zap, title: "2. Receba Pedidos", desc: "Seu perfil fica ativo instantaneamente para clientes que procuram por seu trabalho." },
                  { icon: Star, title: "3. Construa sua Reputação", desc: "Realize serviços, receba notas 5 estrelas e multiplique o seu faturamento mensal." }
                ].map((step, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -8 }}
                    className="p-8 bg-neutral-800/50 border border-neutral-700/50 rounded-3xl"
                  >
                    <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mb-6">
                      <step.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-neutral-400 leading-relaxed text-sm">{step.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* NOVA SEÇÃO 2: SEGURANÇA E CONFIAABILIDADE (BADGES) */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-orange-600 font-bold uppercase tracking-wider text-xs">Confiança em Primeiro Lugar</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-6">
                Verificação Biométrica e Validação de Documentos
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Para garantir a segurança total de quem contrata e de quem trabalha, implementamos tecnologia de ponta para validação de identidade.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Verificação de BI", text: "Conferência e validação do Bilhete de Identidade do profissional." },
                  { title: "Biometria Facial", text: "Scanner de rosto em tempo real que previne perfis falsos." },
                  { title: "Avaliações Reais", text: "Apenas clientes de serviços efetuados podem deixar feedback." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-neutral-900">{item.title}</h4>
                      <p className="text-sm text-neutral-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 flex flex-col items-center text-center">
                <Lock className="text-orange-500 w-8 h-8 mb-3" />
                <h3 className="font-bold text-xl text-neutral-900">100%</h3>
                <p className="text-xs text-neutral-500 mt-1">Perfis Verificados</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 flex flex-col items-center text-center">
                <Award className="text-orange-500 w-8 h-8 mb-3" />
                <h3 className="font-bold text-xl text-neutral-900">Selo BI</h3>
                <p className="text-xs text-neutral-500 mt-1">Identidade Validada</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 flex flex-col items-center text-center col-span-2">
                <ShieldCheck className="text-emerald-500 w-10 h-10 mb-2" />
                <h3 className="font-bold text-lg text-neutral-900">Ambiente Protegido</h3>
                <p className="text-xs text-neutral-500 mt-1">Sua tranquilidade garantida do início ao fim.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO 3: CATEGORIAS POPULARES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="text-orange-600 font-bold uppercase tracking-wider text-xs">Explore</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-1">Categorias em Alta</h2>
            </div>
            <button 
              onClick={() => openAuth('client')} 
              className="mt-4 md:mt-0 text-orange-600 font-semibold hover:underline text-sm flex items-center gap-1"
            >
              Ver todas as categorias →
            </button>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => openAuth('client')}
                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-orange-500/30 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <cat.icon size={24} />
                </div>
                <h3 className="font-bold text-neutral-900 text-lg mb-1">{cat.name}</h3>
                <p className="text-xs text-neutral-500">{cat.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO 4: PERGUNTAS FREQUENTES (FAQ) */}
      <section className="py-24 bg-neutral-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Dúvidas Frequentes</h2>
            <p className="text-neutral-600 mt-2 text-sm">Respostas simples para as principais perguntas sobre a plataforma.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-semibold text-neutral-900 flex justify-between items-center gap-4 hover:bg-neutral-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}