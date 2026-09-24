(function () {
    'use strict';

    // --- Mobile menu (hamburguesa <=767px) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const headerNav = document.getElementById('primary-navigation');
    const menuIcon = menuToggle ? menuToggle.querySelector('.material-symbols-rounded') : null;
    const desktopQuery = window.matchMedia('(min-width: 768px)');

    function setMenu(open) {
        if (!menuToggle || !headerNav) return;
        headerNav.classList.toggle('open', open);
        menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
        if (menuIcon) menuIcon.textContent = open ? 'close' : 'menu';
    }

    if (menuToggle && headerNav) {
        menuToggle.addEventListener('click', function () {
            setMenu(!headerNav.classList.contains('open'));
        });

        // Cerrar al elegir una sección (solo móvil)
        headerNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                if (!desktopQuery.matches) setMenu(false);
            });
        });

        // Cerrar con Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') setMenu(false);
        });

        // Al volver a desktop, resetear estado móvil
        function handleBreakpointChange(e) {
            if (e.matches) setMenu(false);
        }
        if (desktopQuery.addEventListener) {
            desktopQuery.addEventListener('change', handleBreakpointChange);
        } else if (desktopQuery.addListener) {
            desktopQuery.addListener(handleBreakpointChange);
        }
    }

    // --- Accordion ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            const item = this.parentElement;
            const isOpen = item.classList.contains('open');

            // Close all
            document.querySelectorAll('.accordion-item').forEach(function (el) {
                el.classList.remove('open');
                el.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            });

            // Open current if it wasn't open
            if (!isOpen) {
                item.classList.add('open');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // --- Back to top ---
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Smooth scroll for nav links (fallback for browsers without CSS smooth) ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Highlight active nav link on scroll (optional) ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.header-nav a');

    function highlightNav() {
        let current = '';
        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.style.background = '';
            link.style.color = '';
            if (link.getAttribute('href') === '#' + current) {
                link.style.background = 'var(--brand-primary)';
                link.style.color = '#fff';
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav();

})();
