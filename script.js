// Navigation mobile
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile en cliquant sur un lien
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Effet de défilement de la navigation
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Formulaire de contact
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupération des valeurs du formulaire
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;
        
        // Validation simple
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        
        // Simulation d'envoi réussi
        alert(`Merci ${name}! Votre message a été envoyé avec succès. Je vous répondrai bientôt à ${email}.`);
        contactForm.reset();
    });
}

// Animation des barres de compétences au défilement
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-level');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
}

// Observer pour animer les compétences quand elles deviennent visibles
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.getElementById('competences');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Initialisation des animations
document.addEventListener('DOMContentLoaded', () => {
    // Animation des titres de section
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 300);
        
     }); 
     });  
        // Effet machine à écrire
document.addEventListener('DOMContentLoaded', function() {
    // Les phrases à afficher
    const phrases = [
        "Étudiant en Génie Logiciel 🎓",
        "Développeur Web Passionné 💻",
        "Créateur d'expériences digitales ✨",
        "Basé à Douala, Cameroun 🇨🇲"
    ];
    
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typedTextElement = document.getElementById('typed-text');
    
    function typeEffect() {
        const currentPhrase = phrases[currentPhraseIndex];
        
        if (isDeleting) {
            // Effacement
            typedTextElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            // Écriture
            typedTextElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }
        
        // Gestion du passage à la phrase suivante
        if (!isDeleting && currentCharIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000); // Pause avant effacement
            return;
        }
        
        if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(typeEffect, 500);
            return;
        }
        
        // Vitesse d'écriture/effacement
        const speed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, speed);
    }
    
    // Démarrer l'effet
    if (typedTextElement) {
        typeEffect();
    }

 });


