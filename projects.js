// projects.js

const username = 'daniwth';
const reposEndpoint = `https://api.github.com/users/${username}/repos`;

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
  const projectsList = document.getElementById('projectsList');
  projectsList.innerHTML = '';

  const searchInput = document.getElementById('searchInput');
  const filterLanguage = document.getElementById('filterLanguage');

  repos.forEach(repo => {
    if (
      (!searchInput.value || repo.name.toLowerCase().includes(searchInput.value.toLowerCase())) &&
      (filterLanguage.value === 'all' || repo.language === filterLanguage.value)
    ) {
      projectsList.innerHTML += createRepoHTML(repo);
    }
  });
}

function createRepoHTML(repo) {
  return `
    <div class="project-item">
      <h3>${repo.name}</h3>
      <p>${repo.description || 'No description available.'}</p>
      <p>Language: ${repo.language || 'N/A'}</p>
      <button><a href="${repo.html_url}" target="_blank">See Project</a></button>
      <button><a href="projects/${repo.name.toLowerCase()}.html">More info</a></button>
      <hr>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  fetchRepos();
  
  const searchInput = document.getElementById('searchInput');
  const filterLanguage = document.getElementById('filterLanguage');

  searchInput.addEventListener('input', fetchRepos);
  filterLanguage.addEventListener('change', fetchRepos);
});