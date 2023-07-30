export const getMyRepos = async () => {
    const req = await fetch('https://api.github.com/users/Steven404/repos')
    const repos = req.json();
    return repos;
}