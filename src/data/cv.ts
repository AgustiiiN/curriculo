export interface CV {
    name: string,
    title: string,
    location: string,
    locationLink: string,
    about: string,
    summary: string,
    personalWebsiteUrl: string,
    contact: Contact;
    work: Work[];
    education: Education[];
    skills: string[];
}

export interface Contact {
    email: string,
    tel: string,
    social: Social[];
}

export interface Social {
    name: string;
    url: string;
}

export interface Work {
    company: string;
    link: string;
    title: string;
    start: string;
    end: string | null;
    description: string;
    achievements?: string[];
    badges?: string[];
}

export interface Education {
    school: string;
    degree: string;
    start: string;
    end: string | null;
}

export const CV_DATA: CV = {
    name: "Mateus Agustinho",
    title: "Analista de Processos, automação e desenvolvimento",
    location: "Brasília, Brasil",
    locationLink: "https://www.google.com/maps/place/Distrito+Federal/",
    about: "Analista de processos , integração SAP/Excel e eficiência de fluxos de trabalho.",
    summary: `Bacharel em Administração com forte foco em automação de processos (RPA), otimização de rotinas fiscais e conciliação logística. Experiência na criação de soluções automatizadas e integração SAP-Excel, reduzindo o tempo de execução de tarefas, garantindo a conformidade e aumentando a acurácia de grandes volumes de dados.`,
    personalWebsiteUrl: "https://site.com",
    contact: {
        email: "@gmail.com",
        tel: "+5561",
        social: [
            { name: "LinkedIn", url: "https://linkedin.com/in/m-agustinho" },
            { name: "GitHub", url: "https://github.com/AgustiiiN" },
        ],
    },
    work: [
        {
            company: "Projeto Pessoal / Empreendimento",
            link: "https://seusite.com",
            title: "Fundador & Desenvolvedor",
            start: "Jun 2026",
            end: "Presente",
            description: "Arquitetura, modelagem e desenvolvimento de websites.",
            achievements: [
                "Planejamento de negócios, arquitetura de conteúdo e estratégia de monetização/crescimento do portal.",
                "Implementação e manutenção da plataforma web utilizando tecnologias modernas e integração de ferramentas.",
                "Automação de rotinas de publicação, gestão de dados de acessos e otimização do fluxo de trabalho."
            ],
            badges: ["Astro", "Tailwind", "Git", ""],
        },
        {
            company: "Atento (Operação VIVO)",
            link: "https://www.linkedin.com/company/atento/",
            title: "Analista de Logística",
            start: "Set 2025",
            end: "Presente",
            description: "Atuação na gestão, conciliação e validação de faturas de transporte e armazenagem para contratos logísticos de grande porte.",
            achievements: [
                "Desenvolvimento de scripts de automação, otimizando o fluxo diário e reduzindo expressivamente o tempo de conferência.",
                "Validação rigorosa e auditoria de faturas de transporte e armazenagem em conformidade com as regras operacionais da Vivo.",
                "Manipulação e modelagem de grandes volumes de dados no Excel avançado com foco na identificação de divergências financeiras e operacionais."
            ],
            badges: ["Análise de Dados","Auditoria de Custos","Excel", "VBScript", "SAP"],
        },
        {
            company: "Atento (Operação VIVO)",
            link: "https://www.linkedin.com/company/atento/",
            title: "Analista Fiscal",
            start: "Mai 2024",
            end: "Ago 2025",
            description: "Responsável pelo processamento de reversas e gestão fiscal.",
            achievements: [
                "Automação de rotinas fiscais repetitivas integrando dados do SAP diretamente com planilhas Excel via VBA.",
                "Processamento e gestão de reversas operacionais e transferências MBI na região Centro-Oeste no ERP SAP.",
                "Monitoramento diário, auditoria e correção de inconsistências operacionais e emissão de notas fiscais (Monitor NF-e e CC-e)."
            ],
            badges: ["SAP", "VBA", "Monitor NF-e", "Automação Fiscal"],
        }
    ],
    education: [
        {
            school: "Centro Universitário IESB",
            degree: "Bacharelado em Administração de Empresas",
            start: "2018",
            end: "2023",
        },
    ],
    skills: [
        "Automação (RPA)",
        "SAP ERP",
        "VBA",
        "Excel",
        "Análise de Dados",
        "Logica de programação",
        "Astro"
    ],
};