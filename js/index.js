// Menu Toggle para Mobile
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.getElementById('navLinks');
            
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
            
            // Fechar menu ao clicar em um link
            const links = document.querySelectorAll('.nav-links a');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });
            
            // Animações GSAP
            gsap.registerPlugin(ScrollTrigger);
            
            // Hero Section Animation
            gsap.to('.hero-content h1', {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.2
            });
            
            gsap.to('.hero-content p', {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.5
            });
            
            gsap.to('.hero-btns', {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.8
            });
            
            // About Section Animation
            gsap.to('.about-img', {
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top 80%'
                },
                opacity: 1,
                x: 0,
                duration: 1
            });
            
            gsap.to('.about-text', {
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top 80%'
                },
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.3
            });
            
            // Services Animation
            gsap.to('.service-card', {
                scrollTrigger: {
                    trigger: '.services',
                    start: 'top 80%'
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2
            });
            
            // Projects Animation
            gsap.to('.project-card', {
                scrollTrigger: {
                    trigger: '.projects',
                    start: 'top 80%'
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2
            });
            
            // Contact Animation
            gsap.to('.contact-info', {
                scrollTrigger: {
                    trigger: '.contact',
                    start: 'top 80%'
                },
                opacity: 1,
                x: 0,
                duration: 1
            });
            
            gsap.to('.contact-form', {
                scrollTrigger: {
                    trigger: '.contact',
                    start: 'top 80%'
                },
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.3
            });
            
            // Skill Bars Animation
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                gsap.to(bar, {
                    scrollTrigger: {
                        trigger: bar,
                        start: 'top 90%'
                    },
                    width: `${width}%`,
                    duration: 1.5,
                    ease: 'power2.out'
                });
            });
            
            // Header scroll effect
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                    header.style.backdropFilter = 'blur(10px)';
                } else {
                    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    header.style.backdropFilter = 'blur(10px)';
                }
            });
        });