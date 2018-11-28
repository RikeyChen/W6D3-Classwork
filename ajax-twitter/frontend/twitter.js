const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js');


$(() => {
  const $rootEl = $('.follow-toggle');
  // console.log($rootEl);
  // console.log($rootEl.attr('data-user-id'));
  // console.log($rootEl.attr('data-initial-follow-state'));
  $rootEl.each((idx, el) => {
    new FollowToggle($(el));
  });
  
});