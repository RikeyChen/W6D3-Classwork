const FollowToggle = require('/Users/appacademy/Desktop/W6D3/ajax-twitter/frontend/follow_toggle.js');

$(() => {
  const $rootEl = $('.follow-toggle');
  // console.log($rootEl);
  // console.log($rootEl.attr('data-user-id'));
  // console.log($rootEl.attr('data-initial-follow-state'));
  const followToggle = new FollowToggle($rootEl);
  
});