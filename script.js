// Function to fetch recent projects from GitHub API and render them on the page
function renderRecentProjects() {
    fetch('https://api.github.com/users/tu-usuario/repos?sort=created')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-list');
            const projects = data.slice(0, 3); // Display the 3 most recent projects

            projects.forEach(project => {
                const projectElement = document.createElement('a');
                projectElement.href = project.html_url;
                projectElement.target = '_blank';
                projectElement.innerText = project.name;
                projectsContainer.appendChild(projectElement);
            });
        });
}

// Function to initialize the webpage after the content has loaded
function initializePage() {
    renderRecentProjects();
}

// Call the initializePage function after the content has loaded
document.addEventListener('DOMContentLoaded', initializePage);
