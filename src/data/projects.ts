export const projects = [
    {
        title: "Kubernetes-Native Task Orchestration Engine",
        description:
            "Built a custom Kubernetes task execution engine using CRDs, client-go informers, and reconciliation loops.",
        tech: ["Go", "Kubernetes", "CRDs", "client-go"],
        github: "https://github.com/ankrsinha/mini-task",
        featured: true,
        images: [
            "/images/crd.webp",
            "/images/crd2.webp",
            "data:image/png;base64,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"
        ]
    },
    {
        title: "Real-Time Auction System",
        description:
            "Microservices-based real-time bidding system with WebSockets, Kubernetes deployment, and CI/CD.",
        tech: ["Spring Boot", "React", "WebSocket", "Kubernetes"],
        images: [
            "/images/auction-1.jpg",
        ],
        github: "https://github.com/ankrsinha/real-time-auction-system",
        featured: true,
    },
    {
        title: "AI-Powered Wellness Board",
        description:
            "LLM-powered recommendation system using Gemini API with structured prompts and persistence.",
        tech: ["React", "Tailwind", "LLM"],
        github: "https://github.com/ankrsinha/AI-Powered-Wellness-Board",
        liveUrl: "https://ai-powered-wellness-board.vercel.app",
        images: [
            "/images/wellness-1.png",
            "/images/wellness-2.png",
            "/images/wellness-3.png",
            "/images/wellness-4.png"
        ]
    },
    {
        title: "Secure Vault - Password Manager",
        description:
            "A secure password manager with AES-256 encryption, PBKDF2 key derivation, and zero-knowledge architecture. Supports encrypted backups, smart search, and multi-category credential management.",
        tech: ["React", "Vite", "Tailwind", "CryptoJS", "AES-256", "PBKDF2"],
        github: "https://github.com/ankrsinha/secure-vault", 
        liveUrl: "https://secure-vault-roan.vercel.app/",
        featured: true,
        images: [
            "/images/vault-1.png",
            "/images/vault-2.png",
            "/images/vault-3.png"
        ]
    },
    {
        title: "Freelance Marketplace (TalentHub)",
        description:
            "Full-stack freelance platform with real-time messaging and secure payments using Stripe API.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "WebSockets"],
        github: "https://github.com/ankrsinha/TalentHub-website",
        liveUrl: "https://talent-hub-website-frontend.vercel.app",
        images: [
            "/images/talenthub-1.png",
            "/images/talenthub-2.png",
        ]
    },
    {
        title: "Banking Management System",
        description:
            "Concurrent socket-based system with file locking and role-based access.",
        tech: ["C", "Sockets", "Linux"],
        github: "https://github.com/ankrsinha/banking-management-system",
    },
];