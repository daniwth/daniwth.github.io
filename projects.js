// script.js

// Replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username
const username = 'daniwth';
const reposEndpoint = `https://api.github.com/users/${username}/repos?sort=updated&per_page=3`;

async function fetchRepos() {
  try {
    const response = await fetch(reposEndpoint);
    const data = await response.json();
    displayRepos(data);
  } catch (error) {
    console.error('Error fetching repositories:', error);
  }
}

function displayRepos(repos) {
  const projectsSection = document.getElementById('projects');
  const projectsHTML = repos.map(repo => createRepoHTML(repo)).join('');
  projectsSection.innerHTML = projectsHTML;
}

function createRepoHTML(repo) {
  return `
    <h3>${repo.name}</h3>
    <p>${repo.description || 'No description available.'}</p>
    <p>Language: ${repo.language || 'N/A'}</p>
    <p>URL: <a href="${repo.html_url}" target="_blank">${repo.html_url}</a></p>
    <hr>
  `;
}

fetchRepos();