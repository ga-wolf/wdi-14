import axios from 'axios';

const GithubHelpers = {
  getUserInfo: (username) => {
    return axios.get(`https://api.github.com/users/${username}?client_id=8420fd99e9d49bb26114&client_secret=2a5b8f9fbde8942cd23e3de2523899746133ed3d`);
  },
  getUserRepos: (username) => {
    return axios.get(`https://api.github.com/users/${username}/repos?client_id=8420fd99e9d49bb26114&client_secret=2a5b8f9fbde8942cd23e3de2523899746133ed3d`);
  }
};
// GithubHelpers.getUserInfo("jashkenas").then(function (req) {
//   console.log( req.data );
// });

export default GithubHelpers;
