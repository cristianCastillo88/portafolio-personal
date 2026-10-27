export interface Service {
    title: string;
    description: string;
    icon?: string;
}

export interface SocialLink {
    platform: string;
    href: string;
    ariaLabel: string;
}

export interface ProjectData {
    id: string;
    title: string;
    subtitle: string;
    type: string;
    status: string;
    spineCode: string;
    description: string;
    coverImage: string;
    galleryImages: string[];
    technologies: string[];
    features: string[];
    metrics?: { label: string; value: string }[];
    architecture?: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export const siteData = {
    hero: {
        roleBadge: "Full Stack & Software Architecture",
        title: "Cristian Castillo",
        subtitle: "Ingeniero de Software enfocado en soluciones escalables, arquitectura limpia y sistemas de alto rendimiento.",
        description: "Especializado en el ecosistema .NET (C#) y tecnologías web modernas. Diseño plataformas robustas orientadas a resolver desafíos críticos de negocio con código mantenible y experiencia de usuario fluida.",
        ctaPrimary: "Explorar Proyectos",
        ctaSecondary: "Contactar"
    },
    navbarLinks: [
        { label: "Inicio", href: "#home" },
        { label: "Especialidades", href: "#services" },
        { label: "Sobre mí", href: "#about" },
        { label: "Proyectos", href: "#portfolio" },
        { label: "Contacto", href: "#contact" }
    ],
    services: [
        {
            title: "Arquitectura Backend & APIs Robustas",
            description: "Diseño e implementación de servicios escalables con .NET Core, Clean Architecture, CQRS, autenticación segura y persistencia transaccional optimizada."
        },
        {
            title: "Sistemas Distribuidos & Tiempo Real",
            description: "Comunicación bidireccional instantánea mediante WebSockets y SignalR, sincronización de eventos de alta concurrencia y arquitecturas desacopladas."
        },
        {
            title: "Frontend Moderno & Alto Rendimiento",
            description: "Interfaces reactivas de alta velocidad construidas con Astro SSR, React y TypeScript, priorizando rendimiento Core Web Vitals y accesibilidad."
        }
    ],
    about: {
        name: "Cristian Castillo",
        title: "Sobre mí",
        tagline: "Desarrollador de Software con enfoque en ingeniería rigurosa y valor de negocio real.",
        description: "Soy un desarrollador de software enfocado en construir herramientas fiables, escalables y con estándares arquitectónicos sólidos. Mi aproximación combina la solidez del backend tipado en C#/.NET con la agilidad y fluidez de las tecnologías web modernas.",
        technologies: [
            "C# / .NET 8",
            "Clean Architecture",
            "Astro SSR",
            "React",
            "TypeScript",
            "Entity Framework Core",
            "MySQL / SQL Server",
            "SignalR",
            "Tailwind CSS",
            "RESTful APIs"
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
    projects: [
        {
            id: "atlas",
            title: "Atlas",
            subtitle: "SaaS Multi-tenant de Pedidos & Gestión Gastronómica en Tiempo Real",
            type: "Plataforma SaaS en Producción",
            status: "En Producción",
            spineCode: "ATL-01",
            description: "Plataforma SaaS multi-inquilino en producción orientada a la digitalización integral de operaciones gastronómicas (carta QR, punto de venta y comandera digital). Diseñada bajo principios de Clean Architecture y CQS sobre .NET 8 Web API, sincroniza transacciones y estados de cocina en tiempo real vía WebSockets con SignalR Hubs. Integra aislamiento estricto de datos por tenant mediante Global Query Filters en EF Core, control optimista de concurrencia para inventario crítico y renderizado híbrido de ultra alto rendimiento con Astro 5 SSR y React 18.",
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
                "/projects/atlas/QR.jpg"
            ],
            technologies: [
                "C# / .NET 8 (Web API)",
                "Clean Architecture & CQS",
                "ASP.NET Core SignalR (WebSockets)",
                "Entity Framework Core 8",
                "Pomelo MySQL 8.0 (ACID)",
                "Astro 5 (SSR Node.js)",
                "React 18 (Islands Architecture)",
                "TypeScript 5",
                "Tailwind CSS",
                "NanoStores (Reactive State)",
                "Docker & Docker Compose",
                "Nginx Reverse Proxy & Cloudflare WAF",
                "JWT Bearer & HttpOnly Cookies",
                "Role-Based Access Control (RBAC)",
                "FluentValidation & Anti-XSS Sanitizer",
                "Rate Limiting & Idempotency Filter",
                "Serilog & Sentry APM",
                "xUnit & Moq (218 Tests)"
            ],
            features: [
                "Aislamiento Multi-Tenant y Seguridad Transaccional: Filtrado nativo transparente en consultas SQL mediante Global Query Filters en EF Core asociados a claims de tenant, eliminando riesgos de fuga cross-tenant y desacoplando reglas de negocio en capas limpias.",
                "Sincronización Bidireccional con SignalR Hubs (KDS): Despacho de comandas en tiempo real (< 100ms) particionado por grupos de sucursal hacia pantallas Kitchen Display System, respaldado por alertas sonoras, actualización reactiva y reconexión automática resiliente.",
                "Control de Acceso Granular Jerárquico (RBAC): Matriz de autorización estricta dividida en cuatro niveles (SuperAdmin global, AdminNegocio, Empleado/Cocina y Comensal anónimo) con tokens de revocación casi instantánea (SecurityStamp) y credenciales en cookies HttpOnly.",
                "Resiliencia de Red, Idempotencia y OCC: Garantía de ejecución effectively-once mediante claves de idempotencia SHA-256 en base de datos para prevenir pedidos duplicados en redes móviles, combinada con Control Optimista de Concurrencia (OCC) sobre el stock disponible.",
                "Arquitectura Híbrida SSR y Caché Multinivel: Frontend de carga ultrarrápida impulsado por Astro 5 en Vercel Edge con hidratación selectiva de componentes React, optimizado mediante caché en memoria tipo Cache-Aside e invalidación reactiva por ETag SHA-256 en O(1)."
            ],
            metrics: [
                { label: "Entorno", value: "Producción" },
                { label: "Latencia Real-time", value: "< 100ms" },
                { label: "Arquitectura", value: "Clean Arch & CQS" },
                { label: "Testing", value: "218 Tests (xUnit/Moq)" }
            ],
            liveUrl: "https://www.atlasfood.app",
            githubUrl: "https://github.com/cristianCastillo88/atlas-proyect"
        },
        {
            id: "devbot",
            title: "DevBot CLI",
            subtitle: "Agente autónomo de ingeniería de software con arquitectura multi-agente, ejecución determinista y soporte políglota",
            type: "Herramienta CLI / Developer Tooling",
            status: "v1.4.6 / Activo",
            spineCode: "BOT-02",
            description: "Herramienta CLI autónoma desarrollada en .NET 8 y Semantic Kernel que automatiza el ciclo de vida del desarrollo de software (análisis, descomposición jerárquica de tareas, edición quirúrgica y testing determinista). Implementa una arquitectura desacoplada de 4 subagentes especializados orquestados por inyección de dependencias, operando sobre ramas Git aisladas con rollback automático ante fallos. Incluye validación de sintaxis en memoria con Roslyn, escaneo de secretos pre-commit y compatibilidad políglota para proyectos .NET, Node.js, Java y Python.",
            coverImage: "/projects/devbot/cover.png",
            galleryImages: [
                "/projects/devbot/cover.png"
            ],
            technologies: [
                "C# 12",
                ".NET 8",
                "Microsoft.SemanticKernel",
                "Microsoft.Extensions.DependencyInjection",
                "Spectre.Console",
                "Microsoft.CodeAnalysis.CSharp (Roslyn AST)",
                "YamlDotNet",
                "Microsoft.AspNetCore.DataProtection",
                "Git CLI Integration",
                "xUnit",
                "Coverlet"
            ],
            features: [
                "Pipeline Jerárquico de 4 Subagentes Especializados: Separación estricta de responsabilidades mediante contratos de interfaces (Scout de solo lectura, Planner para hitos atómicos plan.json, Coder para diffs quirúrgicos y Reviewer para verificación determinista por ExitCode).",
                "Arquitectura Extensible basada en IoC y Strategy Pattern: Inyección de dependencias modular vía AddDevBotCore() que desacopla la orquestación y permite soporte políglota desacoplado (IBuildAndTestStrategy para .NET, Node.js, Maven y Pytest).",
                "Edición Quirúrgica Tolerante y Validación Sintáctica con Roslyn: Algoritmo de diffing inteligente con tolerancia a indentaciones y verificación de integridad sintáctica del AST en memoria antes de persistir cambios.",
                "Seguridad en Profundidad y Aislamiento Git Transaccional: PreCommitAuditor integrado con SecretScanner para prevención de fugas de credenciales (Google, OpenAI, AWS, JWT, PEM), cifrado DPAPI local y aislamiento en ramas transaccionales con auto-rollback.",
                "CLI Parser Desacoplado y Cobertura Exhaustiva de Pruebas: Motor de parsing CLI nativo y configurable, respaldado por una suite de 185 tests unitarios en xUnit que garantiza solidez en resolución de dependencias, políticas de modo y sanitización de I/O."
            ],
            metrics: [
                { label: "Runtime", value: ".NET 8 / C# 12" },
                { label: "Arquitectura", value: "Multi-Agent DI & Strategy" },
                { label: "Testing", value: "185 Tests (100% Pass)" },
                { label: "Enfoque", value: "Autonomous SWE & DevEx" }
            ],
            githubUrl: "https://github.com/cristianCastillo88/dev-bot"
        }
    ]
};
