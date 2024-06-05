const username = 'BlackMOTD';  // Remplacez par votre nom d'utilisateur GitHub

async function fetchProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const projects = await response.json();

        const projectsContainer = document.getElementById('projects');
        projectsContainer.innerHTML = '';

        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project';
            projectElement.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description || 'Pas de description'}</p>
                <a href="${project.html_url}" target="_blank">Voir le projet</a>
            `;
            projectsContainer.appendChild(projectElement);
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des projets:', error);
    }
}

fetchProjects();
