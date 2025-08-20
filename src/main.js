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

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        stairSteps.forEach((step, index) => {
                            setTimeout(() => {
                                step.classList.add('animate');
                            }, index * 800);
                        });
                    } else {

                        stairSteps.forEach(step => {
                            step.classList.remove('animate');
                        });
                    }
                });
            }, { threshold: 0.4 }); 

            if (stairSection) {
                observer.observe(stairSection);
            }
        });
