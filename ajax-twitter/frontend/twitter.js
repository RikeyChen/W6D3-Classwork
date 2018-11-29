const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');


$(() => {
  const $rootEl = $('.follow-toggle');
  const $users = $('.users-search');
  $rootEl.each((idx, el) => {
    new FollowToggle($(el));
  });
  
  $users.each((idx, user) => {
    new UsersSearch($(user));
  });
  
});