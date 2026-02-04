// Sticky Navbar Border Effect
export function initNavbarScroll() {
    const navbar = document.getElementById("navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            navbar?.classList.remove("border-transparent");
            navbar?.classList.add(
                "border-slate-200",
                "dark:border-slate-800",
            );
        } else {
            navbar?.classList.add("border-transparent");
            navbar?.classList.remove(
                "border-slate-200",
                "dark:border-slate-800",
            );
        }
    });
}

// Scrollspy for Navbar
export function initScrollSpy() {
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const scrollSpyObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    navLinks.forEach((link) => {
                        // Reset
                        link.classList.remove(
                            "text-primary",
                            "font-bold",
                            "bg-slate-100",
                            "dark:bg-slate-800",
                            "rounded-full",
                            "px-4",
                            "py-1",
                        );
                        link.classList.add(
                            "text-slate-600",
                            "dark:text-slate-300",
                            "font-medium",
                        );

                        // Active State (Pill)
                        if (link.getAttribute("href") === `#${id}`) {
                            link.classList.remove(
                                "text-slate-600",
                                "dark:text-slate-300",
                                "font-medium",
                            );
                            link.classList.add(
                                "text-primary",
                                "font-bold",
                                "bg-slate-100",
                                "dark:bg-slate-800",
                                "rounded-full",
                                "px-4",
                                "py-1",
                            );
                        }
                    });
                }
            });
        },
        {
            rootMargin: "-50% 0px -50% 0px",
        },
    );

    sections.forEach((section) => {
        if (
            ["home", "services", "portfolio", "contact"].includes(
                section.id,
            )
        ) {
            scrollSpyObserver.observe(section);
        }
    });
}
