export const fetchRepos = async () => {
  const res = await fetch("https://api.github.com/users/ankrsinha/repos");
  const data = await res.json();

  return data
    .filter(repo => !repo.fork)
    .slice(0, 6)
    .map(repo => ({
      title: repo.name,
      description: repo.description,
      github: repo.html_url,
      tech: repo.language ? [repo.language] : [],
    }));
};