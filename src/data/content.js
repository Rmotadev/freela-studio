export const WHATSAPP_NUMBER = "5551998221758";
export const CTA_MESSAGE = "Olá! Vi o nível de entrega do Freela Studio e gostaria de agendar uma Sessão Estratégica para discutir o posicionamento do meu negócio.";

export const generateWhatsAppLink = () => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(CTA_MESSAGE)}`;
};

export const servicesData = [
    {
        icon: "Layout",
        title: "Landing Pages Focadas em Alta Conversão",
        description: "Estruturas persuasivas desenvolvidas para transformar o tráfego de campanhas pagas em leads qualificados com máxima eficiência.",
        price: "A partir de R$ 1.800"
    },
    {
        icon: "Globe",
        title: "Sites Institucionais de Alta Autoridade",
        description: "Hubs digitais projetados para consolidar a presença da sua marca, transmitir credibilidade e educar seu cliente corporativo.",
        price: "A partir de R$ 3.500"
    },
    {
        icon: "Layers",
        title: "Plataformas de E-commerce Otimizadas",
        description: "Lojas virtuais estruturadas com UX/UI avançado, minimizando o abandono de carrinho e maximizando o ticket médio.",
        price: "A partir de R$ 6.000"
    },
    {
        icon: "Code",
        title: "Aplicações e Sistemas Web Sob Medida",
        description: "Sistemas complexos, dashboards e SaaS criados com arquitetura escalável para resolver gargalos operacionais do seu negócio.",
        price: "Projetos Sob Consulta"
    }
];

export const portfolioData = [
    {
        client: "Capital Partners",
        type: "Site Institucional & RI",
        result: "+120% em retenção de usuários",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        tag: "Finanças"
    },
    {
        client: "HealthTech Diagnósticos",
        type: "Landing Page B2B",
        result: "Custo por lead reduzido em 45%",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
        tag: "Saúde / B2B"
    },
    {
        client: "Lumina Arquitetura",
        type: "Portfólio & Captação",
        result: "Aumento de 3x em contatos premium",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
        tag: "Arquitetura"
    }
];

export const processData = [
    { step: "01", title: "Discovery", desc: "Mergulho profundo no seu modelo de negócios, concorrentes e ICP (Ideal Customer Profile) para garantir alinhamento." },
    { step: "02", title: "UX & Arquitetura", desc: "Desenho da jornada do usuário e wireframes com foco exclusivo em facilidade de uso e taxas de conversão." },
    { step: "03", title: "UI Design Premium", desc: "Criação de uma interface visual sofisticada, alinhada ao manual da marca e projetada para transmitir confiança." },
    { step: "04", title: "Code & Performance", desc: "Desenvolvimento com stack moderna (React/Next.js). Otimização extrema de carregamento (Core Web Vitals)." },
    { step: "05", title: "QA & Handoff", desc: "Testes rigorosos em múltiplos dispositivos, configuração de SEO técnico e entrega formal do projeto." }
];

export const testimonialsData = [
    {
        name: "Dr. Roberto Silveira",
        role: "Sócio-Diretor, RS Advogados",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
        text: "O nível de sofisticação e profissionalismo entregue superou nossas expectativas. O novo portal do escritório não apenas projeta a imagem de excelência que desejávamos, mas resultou em um aumento tangível na captação de clientes corporativos."
    },
    {
        name: "Carolina Mendes",
        role: "CMO, TechLogistics",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
        text: "Tivemos um salto de qualidade absurdo em nossas campanhas B2B. A arquitetura da página de altíssima conversão reduziu nosso CAC consideravelmente. Trabalho impecável em código e design."
    },
    {
        name: "Felipe Almeida",
        role: "Founder, Apex Invest",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
        text: "Encontrar um desenvolvedor que entende profundamente de negócios e design é raro. A execução foi 100% dentro do prazo, com uma comunicação transparente e um produto final de classe mundial."
    }
];

export const faqData = [
    {
        q: "Qual é o investimento inicial para um projeto?",
        a: "Projetos de alta performance exigem dedicação exclusiva e planejamento minucioso. Nossas Landing Pages iniciam em R$ 1.800, e projetos completos podem variar de R$ 3.500 a R$ 15.000+, dependendo inteiramente da complexidade e necessidades de integração do seu negócio."
    },
    {
        q: "Qual é o prazo médio de execução?",
        a: "A excelência leva tempo. Uma Landing Page leva em média 10 a 15 dias úteis. Projetos institucionais e sistemas sob medida variam de 30 a 90 dias úteis, com um cronograma estrito apresentado no dia 1 e cumprido rigorosamente."
    },
    {
        q: "O código fonte desenvolvido é de minha propriedade?",
        a: "Absolutamente. Ao final do projeto e quitação do contrato, 100% dos assets de design, código fonte e direitos de propriedade intelectual são transferidos para a sua empresa. Não trabalhamos com 'aluguel' de código."
    },
    {
        q: "Vocês realizam a manutenção após a entrega?",
        a: "Sim. Oferecemos 30 dias de garantia técnica gratuíta. Após este período, dispomos de contratos de SLA (Service Level Agreement) para manutenção, atualizações de segurança e evoluções na plataforma, garantindo que o seu site nunca fique obsoleto."
    },
    {
        q: "O site já contêm otimizações para ranqueamento Google (SEO)?",
        a: "A base técnica é fundamental. Todos os projetos são entregues com SEO Técnico impecável (Performance, Semântica HTML, Meta Tags Estruturadas, Open Graph e Schema.org), essenciais para indexação perfeita no Google."
    }
];
