document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animação da Linha do Tempo
    const timelineItems = gsap.utils.toArray('.timeline-item');
    timelineItems.forEach((item, i) => {
        gsap.fromTo(item, 
            { opacity: 0, y: 50 },
            {
                opacity: 1, 
                y: 0, 
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Animação dos Cards de Projetos (Fade subindo)
    const projectCards = gsap.utils.toArray('.project-card.reveal');
    projectCards.forEach((card, i) => {
        gsap.fromTo(card, 
            { opacity: 0, y: 60 },
            {
                opacity: 1, 
                y: 0, 
                duration: 0.8,
                delay: i * 0.2, // Efeito escadinha
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".projects-grid", // Todos iniciam quando a grade entra na tela
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Animação dos Serviços e Footer
    const revealElements = gsap.utils.toArray('.reveal2');
    revealElements.forEach((el, i) => {
        gsap.fromTo(el, 
            { opacity: 0, y: 40 },
            {
                opacity: 1, 
                y: 0, 
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el, 
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // The Vault: Scroll Horizontal Pinning (Apenas Desktop)
    const vaultSection = document.querySelector('.vault-section');
    const vaultContainer = document.querySelector('.vault-scroll-container');
    
    if (vaultSection && vaultContainer && !window.matchMedia("(max-width: 992px)").matches) {
        // Remove overflow e snap nativo via javascript para usar GSAP
        vaultContainer.style.overflowX = 'visible';
        vaultContainer.style.scrollSnapType = 'none';
        
        // Garantir que a largura do container não atrapalhe a rolagem
        vaultContainer.style.width = 'max-content';

        let moveAmount = vaultContainer.scrollWidth - window.innerWidth + 200;

        gsap.to(vaultContainer, {
            x: -moveAmount,
            ease: "none",
            scrollTrigger: {
                trigger: vaultSection,
                start: "top top",
                end: () => `+=${moveAmount}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true
            }
        });
    }
});
