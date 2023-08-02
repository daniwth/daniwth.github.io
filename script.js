// Function to fetch recent projects from GitHub API and render them on the page
function renderRecentProjects() {
    fetch('https://api.github.com/users/daniwth/repos?sort=created')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects');
            const projects = data.slice(0, 5); // Display the 5 most recent projects
            
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
