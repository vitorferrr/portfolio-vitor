import axios from 'axios';

const GITHUB_USERNAME = 'vitorferrr'; 

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

export async function getRepos() {
  const { data } = await githubApi.get(
    `/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`
  );
  return data;
}

export default githubApi;