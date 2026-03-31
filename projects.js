// Données des projets avec vos images
const projectsData = [
    {
        id: 1,
        title: "Site Web Restaurant",
        description: "Site vitrine pour un restaurant avec menu interactif, réservations en ligne et système de gestion de contenu. Design moderne et responsive.",
        image: "BBB.jpg",
        tags: ["HTML/CSS", "JavaScript", "Responsive", "UI/UX"],
        link: "#"
    },
    {
        id: 2,
        title: "Système de Gestion de Stock",
        description: "Application web complète pour la gestion des stocks avec suivi des produits, calcul automatique des montants et interface intuitive.",
        image: "DDD.jpg",
        tags: ["JavaScript", "PHP", "MySQL", "Gestion"],
        link: "#"
    },
    {
        id: 3,
        title: "Portfolio Professionnel",
        description: "Portfolio moderne et responsive présentant mes compétences et projets en développement web. Réalisé avec HTML, CSS et JavaScript.",
        image: "PPP.jpg",
        tags: ["HTML/CSS", "JavaScript", "GitHub", "Responsive"],
        link: "#"
    },
    {
        id: 4,
        title: "Application Web Éducative",
        description: "Plateforme d'apprentissage en ligne avec cours interactifs, quiz et suivi de progression pour les étudiants.",
        image: "https://via.placeholder.com/400x200/3b82f6/ffffff?text=Application+Éducative",
        tags: ["JavaScript", "Node.js", "MongoDB", "API"],
        link: "#"
    },
    {
        id: 5,
        title: "Jeu de Mémoire en Ligne",
        description: "Jeu interactif de mémoire avec différents niveaux de difficulté, suivi des scores et interface animée.",
        image: "https://via.placeholder.com/400x200/7c3aed/ffffff?text=Jeu+de+Mémoire",
        tags: ["JavaScript", "HTML5", "CSS3", "Animation"],
        link: "#"
    },
    {
    id: 6,
    title: "Plateforme d'Enseignement Urbain",
    description: "Plateforme  de signalement urbain développée avec PHP et MySQL. Interface responsive, gestion des cours, inscriptions et suivi des apprenants.",
    image: "urban.png",
    tags: ["PHP", "MySQL", "Responsive", "Bootstrap"],
    link: "http://urbain.atwebpages.com/index.php"  // ← REMPLACEZ PAR VOTRE LIEN
}
];

// Fonction pour afficher les projets
function displayProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    if (!projectsContainer) return;
    
    // Vider le conteneur
    projectsContainer.innerHTML = '';
    
    // Créer et ajouter chaque projet
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" 
                     onerror="this.onerror=null; 
                              this.src='https://via.placeholder.com/400x200/3b82f6/ffffff?text=${encodeURIComponent(project.title)}'">
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link" target="_blank">
                    Voir le projet <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Initialisation des projets au chargement
document.addEventListener('DOMContentLoaded', displayProjects);
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