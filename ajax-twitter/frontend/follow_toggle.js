class FollowToggle {
  constructor(el) {
    this.userId = el.attr('data-user-id');
    this.initialFollowToggle = el.attr('data-initial-follow-state');
  }
}

module.exports = FollowToggle;