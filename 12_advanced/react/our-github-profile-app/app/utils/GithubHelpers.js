import axios from 'axios';

const GithubHelpers = {
  getUserInfo: (username) => {
    return axios.get(`https://api.github.com/users/${username}`);
  },
  getUserRepos: (username) => {
    return axios.get(`https://api.github.com/users/${username}/repos`);
  }
};
// GithubHelpers.getUserInfo("jashkenas").then(function (req) {
//   console.log( req.data );
// });

export default GithubHelpers;
