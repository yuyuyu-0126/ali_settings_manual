document.addEventListener('DOMContentLoaded', () => {
    // Progress Bar Logic
    const progressBar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });

    // Mobile Navigation Toggle
    const navToggle = document.getElementById('mobileNavToggle');
    const sideNav = document.getElementById('sideNav');
    const navLinks = document.querySelectorAll('.side-nav a');

    navToggle.addEventListener('click', () => {
        sideNav.classList.toggle('active');
        document.body.style.overflow = sideNav.classList.contains('active') ? 'hidden' : 'auto';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            sideNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Image Modal Logic
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const images = document.querySelectorAll('.image-wrapper img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
            document.body.style.overflow = 'hidden'; 
        });
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
        if (!sideNav.classList.contains('active')) {
            document.body.style.overflow = 'auto';
        }
    });

    // Smooth Scrolling for Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
