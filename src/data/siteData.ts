export interface Service {
    title: string;
    description: string;
}

export interface SocialLink {
    platform: string;
    href: string;
    ariaLabel: string;
}

export interface ProjectData {
    title: string;
    description: string;
    type: string;
    coverImage: string;
    galleryImages: string[];
    technologies: string[];
    features?: string[];
}

export const siteData = {
    hero: {
        title: "Software Developer",
        description: "Desarrollador independiente especializado en soluciones web y de software modernas con un enfoque en alto rendimiento, arquitectura limpia y experiencias de usuario excepcionales.",
        ctaPrimary: "Pedir una cotización"
    },
    navbarLinks: [
        { label: "Inicio", href: "#home" },
        { label: "Servicios", href: "#services" },
        { label: "Portafolio", href: "#portfolio" },
        { label: "Contacto", href: "#contact" }
    ],
    services: [
        {
            title: "Desarrollo Web",
            description: "Interfaces creativas, modernas y altamente responsivas diseñadas para captar la atención del usuario y mejorar la experiencia del usuario."
        },
        {
            title: "Aplicaciones Web Personalizadas",
            description: "Aplicaciones web dinámicas y orientadas a datos con React y tecnologías de back-end modernas."
        },
        {
            title: "Sistemas de Gestión",
            description: "Herramientas internas personalizadas y software empresarial diseñados para optimizar sus flujos de trabajo y la gestión de datos."
        }
    ],
    about: {
        name: "Cristian Castillo",
        title: "Sobre mí",
        description: "¡Hola! Soy Cristian, un desarrollador de software apasionado por la tecnología y la creación de soluciones innovadoras. Me encanta aprender nuevas tecnologías y aplicarlas en mis proyectos para ofrecer experiencias únicas y de alto rendimiento.",
        technologies: [
            "C#/.NET",
            "Astro",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "MySQL",
            "Entity Framework",
            "Clean Architecture"
        ],
        socials: [
            {
                platform: "LinkedIn",
                href: "https://www.linkedin.com/in/cristian-castillo-b67950242/",
                ariaLabel: "LinkedIn"
            },
            {
                platform: "GitHub",
                href: "https://github.com/cristianCastillo88",
                ariaLabel: "GitHub"
            },
            {
                platform: "Instagram",
                href: "https://www.instagram.com/cristiaaancastillo/",
                ariaLabel: "Instagram"
            }
        ]
    },
    portfolio: {
        atlas: {
            title: "Atlas",
            type: "Proyecto personal",
            description: "Desarrollé Atlas, una plataforma SaaS locales comer que digitaliza el flujo completo de pedidos. Construido con .NET 8 y Astro, el sistema permite a los clientes realizar pedidos mediante un menú digital optimizado, mientras que el personal de cocina recibe notificaciones instantáneas vía SignalR. Implementé una arquitectura escalable con Clean Architecture, asegurando transacciones seguras y una experiencia de usuario fluida.",
            technologies: [
                "C#/.NET 8 (LTS)",
                "Astro 5.0 (SSR)",
                "MySQL",
                "Entity Framework Core",
                "React 18",
                "Tailwind CSS",
                "TypeScript",
                "SignalR",
                "JWT Auth"
            ],
            coverImage: "/projects/atlas/Portada.jpg",
            galleryImages: [
                "/projects/atlas/Login.jpg",
                "/projects/atlas/ClienteCarrito.jpg",
                "/projects/atlas/ClienteNegocio.jpg",
                "/projects/atlas/NegocioAdmin.jpg",
                "/projects/atlas/NuevoPedidoAdmin.jpg",
                "/projects/atlas/SuperAdmin.jpg",
                "/projects/atlas/PanelPedidos.jpg",
                "/projects/atlas/Personal.jpg",
                "/projects/atlas/QR.jpg",
            ],
            features: [
                "Notificaciones en Tiempo Real",
                "Gestión de Stock Transaccional",
                "Seguridad Robusta",
                "Patrón Repository & UoW",
                "Performance Optimizada"
            ]
        }
    }
};
