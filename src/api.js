export default {
    getProfile: username => fetch(`https://api.github.com/users/${username}`),
    getHistory: username => fetch(`https://api.github.com/users/${username}/events/public`),
};