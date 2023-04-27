const API_KEY = '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';
const username = 'PrestesKarol';

const url = `https://api.github.com/users/${username}`;

fetch(url, {
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
})
.then(response => response.json())
.then(data => {
  console.log(data);
  const usernameElement = document.getElementById('username');
  const nameElement = document.getElementById('name');
  const bioElement = document.getElementById('bio');
  const followersElement = document.getElementById('followers');
  const reposElement = document.getElementById('repos');

  usernameElement.innerText = data.login;
  nameElement.innerText = `Nome: ${data.name}`;
  bioElement.innerText = `Bio: ${data.bio}`;
  followersElement.innerText = `Seguidores: ${data.followers}`;
  reposElement.innerText = `Repositórios: ${data.public_repos}`;
})
.catch(error => {
  console.log(error);
});