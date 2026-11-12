export interface ServiceItem {
  number: string;
  title: string;
  tag: string;
  summary: string;
  benefit: string;
  whatsappHref: string;
  featured?: boolean;
}

export interface ReviewItem {
  author: string;
  initials: string;
  badge?: string;
  quote: string;
  highlight: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface MethodPillar {
  label: string;
  title: string;
  description: string;
}

const WHATSAPP_NUMBER = "5551997968962";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SITE_CONFIG = {
  brandName: "Dra. Anathyellie Charão",
  brandUpper: "DRA. ANATHYELLIE CHARÃO",
  brandSubtitle: "HARMONIZAÇÃO FACIAL & SAÚDE INTEGRATIVA",
  title:
    "Dra. Anathyellie Charão | Harmonização Facial e Melasma em Santa Cruz do Sul - RS",
  description:
    "Harmonização facial, toxina botulínica, bioestimuladores de colágeno e tratamento integrativo para melasma em Santa Cruz do Sul - RS. Protocolos 100% individualizados com acolhimento e segurança.",
  phoneDisplay: "(51) 99796-8962",
  phoneInternational: "+5551997968962",
  whatsappPrimary:
    "https://wa.me/5551997968962?text=Ol%C3%A1%2C+Dra.+Anathyellie%21+Visitei+o+site+e+gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+personalizada.",
  instagramHandle: "@dra.anathyelliecharao",
  instagramUrl: "https://www.instagram.com/dra.anathyelliecharao/",
  facebookUrl: "https://www.facebook.com/anathyellie.charao/",
  address: {
    street: "R. Vinte e Oito de Outubro, 48",
    neighborhood: "Universitário",
    city: "Santa Cruz do Sul",
    state: "RS",
    postalCode: "96815-710",
    plusCode: "7HV8+2C Universitário, Santa Cruz do Sul - RS",
    full: "R. Vinte e Oito de Outubro, 48 - Universitário, Santa Cruz do Sul - RS, 96815-710",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=R.+Vinte+e+Oito+de+Outubro,+48+-+Universit%C3%A1rio,+Santa+Cruz+do+Sul+-+RS,+96815-710",
  },
  hours: [
    { days: "Segunda a Sexta-feira", time: "08:30 às 17:30", open: true },
    { days: "Sábado e Domingo", time: "Fechado", open: false },
  ],
  rating: {
    score: "5.0",
    count: 30,
  },
} as const;

export const NAV_LINKS = [
  { label: "Especialidades", href: "#especialidades" },
  { label: "Melasma", href: "#melasma" },
  { label: "Método", href: "#metodo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Protocolo Integrativo para Melasma",
    tag: "Saúde Integrativa",
    summary:
      "Investigação aprofundada dos gatilhos biológicos, hormonais e inflamatórios que alimentam a mancha.",
    benefit:
      "Controle inflamatório e despigmentação gradual com respeito à barreira cutânea, reduzindo o risco de efeito rebote.",
    whatsappHref: buildWhatsAppUrl(
      "Olá, Dra. Anathyellie! Gostaria de saber mais sobre o Protocolo Integrativo para Melasma."
    ),
    featured: true,
  },
  {
    number: "02",
    title: "Toxina Botulínica (Botox) de Alta Naturalidade",
    tag: "Expressão Preservada",
    summary:
      "Aplicação precisa e individualizada para suavizar linhas dinâmicas sem congelar sua identidade facial.",
    benefit:
      "Semblante descansado, leve e natural, com mapeamento anatômico exclusivo para a sua musculatura.",
    whatsappHref: buildWhatsAppUrl(
      "Olá, Dra. Anathyellie! Gostaria de saber mais sobre a Toxina Botulínica (Botox) de Alta Naturalidade."
    ),
  },
  {
    number: "03",
    title: "Bioestimuladores de Colágeno & Firmeza Dérmica",
    tag: "Regeneração Biológica",
    summary:
      "Estímulo progressivo da produção natural de colágeno para devolver densidade, elasticidade e sustentação tecidual.",
    benefit:
      "Efeito lifting gradual e duradouro que trata a flacidez na origem, sem exageros de volume.",
    whatsappHref: buildWhatsAppUrl(
      "Olá, Dra. Anathyellie! Gostaria de saber mais sobre os Bioestimuladores de Colágeno & Firmeza Dérmica."
    ),
  },
  {
    number: "04",
    title: "Limpeza de Pele Profunda & Óleos Essenciais (dōTERRA)",
    tag: "Botânica & Assepsia",
    summary:
      "Higienização profunda e renovação celular associada a óleos essenciais terapêuticos de alta pureza.",
    benefit:
      "Pele purificada, acalmada e equilibrada — protocolo especialmente seguro para peles sensíveis e com melasma.",
    whatsappHref: buildWhatsAppUrl(
      "Olá, Dra. Anathyellie! Gostaria de saber mais sobre a Limpeza de Pele Profunda & Óleos Essenciais (dōTERRA)."
    ),
  },
  {
    number: "05",
    title: "Harmonização Facial & Equilíbrio de Contornos",
    tag: "Proporção Única",
    summary:
      "Planejamento sutil de pontos de sustentação e contornos respeitando as proporções e a história do seu rosto.",
    benefit:
      "Realce discreto dos traços naturais com segurança clínica e olhar estético refinado.",
    whatsappHref: buildWhatsAppUrl(
      "Olá, Dra. Anathyellie! Gostaria de saber mais sobre a Harmonização Facial & Equilíbrio de Contornos."
    ),
  },
];

export const METHOD_PILLARS: MethodPillar[] = [
  {
    label: "Visão Sistêmica",
    title: "Além da superfície da pele",
    description:
      "Cada mancha ou sinal de envelhecimento conta uma história biológica. Investigamos inflamação, rotina e saúde global antes de definir qualquer ativo.",
  },
  {
    label: "Zero Padronização",
    title: "Protocolos 100% sob medida",
    description:
      "Não trabalhamos com receitas prontas ou pacotes genéricos. Seu plano de cuidado é desenhado exclusivamente para a sua anatomia e momento de vida.",
  },
  {
    label: "Ética & Clareza",
    title: "Acolhimento sem pressa",
    description:
      "Explicamos cada etapa com clareza didática e transparência, indicando apenas o que traz benefício real para a sua pele — sem pressão comercial.",
  },
  {
    label: "Sinergia Terapêutica",
    title: "Ciência e pureza botânica",
    description:
      "Unimos injetáveis de alta performance e tecnologias modernas a ativos botânicos terapêuticos, como os óleos essenciais dōTERRA.",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    author: "Renata Rce",
    initials: "RR",
    highlight: "Explicação detalhada sobre o melasma",
    quote:
      "Profissional excelente, super atenciosa e me explicou tudo em detalhes sobre o melasma, coisas que nunca tinha escutado de outros profissionais. Indico demais o trabalho dela.",
  },
  {
    author: "Louannye Charão",
    initials: "LC",
    highlight: "Olhar na causa, não só na superfície",
    quote:
      "Pela primeira vez senti que alguém realmente quis entender a causa do meu melasma, e não apenas tratar a superfície da pele.",
  },
  {
    author: "Gilvania Pedreira",
    initials: "GP",
    highlight: "Primeira experiência com Botox e bioestimulador",
    quote:
      "Foi a primeira vez que fiz procedimentos como BOTOX e bioestimulador de colágeno e foi um privilégio fazer com a Dra. Anathyellie. Recepção maravilhosa, me senti acolhida.",
  },
  {
    author: "Anelise Silva",
    initials: "AS",
    highlight: "Protocolo personalizado que valoriza a individualidade",
    quote:
      "Não trabalha com padrão, mas sim com um protocolo personalizado que valoriza a individualidade de cada pessoa. Recomendo de olhos fechados!",
  },
  {
    author: "Julia Thaís Gabe",
    initials: "JG",
    badge: "Local Guide",
    highlight: "Limpeza de pele e toxina botulínica",
    quote:
      "Fiz limpeza de pele e aplicação de toxina com ela e fiquei encantada com o resultado. Sem dúvidas uma biomédica de confiança!",
  },
  {
    author: "Paula Kaufmann",
    initials: "PK",
    highlight: "Cuidado genuíno sem foco em vendas",
    quote:
      "No mundo onde todos só pensam em vender, Nathy pensou em mim! O que seria para limpeza de pele saí com direcionamento sobre minhas outras dores!",
  },
  {
    author: "Andrisa Kollett",
    initials: "AK",
    highlight: "Limpeza com óleos dōTERRA e Botox",
    quote:
      "Avaliou todo o meu rosto, fez uma limpeza de pele profunda, até com óleos essenciais da dōTERRA para o meu melasma. Fiz meu botox e o atendimento é impecável.",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-melasma",
    question:
      "Por que o tratamento de melasma da Dra. Anathyellie é diferente?",
    answer:
      "Porque não tratamos apenas a mancha visível com ácidos agressivos que podem sensibilizar a pele e causar efeito rebote. Na avaliação integrativa, investigamos gatilhos internos, inflamação sistêmica, rotina de barreira cutânea e fatores oxidativos para construir um controle seguro, educativo e duradouro.",
  },
  {
    id: "faq-primeira-vez",
    question:
      "Tenho receio de fazer Botox ou bioestimuladores pela primeira vez. Como funciona?",
    answer:
      "O atendimento é conduzido sem pressa, com explicação didática de cada etapa antes de qualquer aplicação. Trabalhamos com dosagens suaves e planejamento anatômico individualizado para preservar suas expressões naturais e proporcionar uma primeira experiência tranquila e acolhedora.",
  },
  {
    id: "faq-personalizado",
    question: "Os protocolos são padronizados ou feitos sob medida?",
    answer:
      "Todos os protocolos são 100% individualizados. Cada paciente passa por uma avaliação clínica global que considera estrutura facial, qualidade dérmica, histórico de saúde e objetivos pessoais — evitando qualquer padrão pronto ou intervenção desnecessária.",
  },
  {
    id: "faq-doterra",
    question: "Como funciona a limpeza de pele com óleos essenciais?",
    answer:
      "Associamos a assepsia e renovação celular profunda a óleos essenciais terapêuticos de grau de pureza elevado (dōTERRA), selecionados conforme a necessidade da sua pele para acalmar processos inflamatórios, restaurar o viço e auxiliar no manejo de manchas e sensibilidade.",
  },
  {
    id: "faq-agendamento",
    question: "Onde fica a clínica em Santa Cruz do Sul e como agendo?",
    answer:
      "A clínica está localizada na R. Vinte e Oito de Outubro, 48, Bairro Universitário, Santa Cruz do Sul - RS (CEP 96815-710). Os atendimentos acontecem de segunda a sexta-feira, das 08:30 às 17:30, com agendamento direto e humanizado pelo WhatsApp (51) 99796-8962.",
  },
];

