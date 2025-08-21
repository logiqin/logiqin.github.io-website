const menuOpenBtn = document.getElementById('menu-open-btn');
const menuCloseBtn = document.getElementById('menu-close-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');
const menuLinks = document.querySelectorAll('.menu-link');
const body = document.body;

const openMenu = () => {
    mobileMenu.classList.remove('translate-x-full');
    menuOverlay.classList.remove('hidden');
    body.classList.add('menu-open');
};

const closeMenu = () => {
    mobileMenu.classList.add('translate-x-full');
    menuOverlay.classList.add('hidden');
    body.classList.remove('menu-open');
};

menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);
menuLinks.forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('DOMContentLoaded', () => {
    const stairSection = document.querySelector('#how-we-work');
    const stairSteps = document.querySelectorAll('.stair-step');

    const runStairs = () => {
        stairSteps.forEach((step, index) => {
            setTimeout(() => {
                step.classList.add('animate');
            }, index * 1000);
        });
    };

    if (stairSection && stairSteps.length) {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    // iOS Safari může mít problémy s prahovými hodnotami – spouštíme při jakémkoli >0 průniku
                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        runStairs();
                        // jednorázově – po spuštění už neodebíráme animaci
                        obs.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                // negativní bottom margin způsobí dřívější spuštění (adresní lišta iOS mění výšku viewportu)
                rootMargin: '0px 0px -20% 0px',
                threshold: 0
            });

            observer.observe(stairSection);
        } else {
            // Fallback pro starší iOS Safari bez IntersectionObserveru
            runStairs();
        }
    }
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });
    });
});