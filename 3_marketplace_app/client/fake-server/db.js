const ads = require('../../data/ads.json');
const users = require('../../data/users.json');

module.exports = function () {
  return {
    ads: ads,
    users: users,
  }
}
