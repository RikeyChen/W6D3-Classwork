const APIUtil = require('./api_util.js');
class FollowToggle {
  constructor($el) {
    this.$el = $el;
    this.userId = parseInt($el.attr('data-user-id'));
    this.followState = $el.attr('data-initial-follow-state');
    this.currentUserId = parseInt($el.attr('data-current-user-id'));
    
    this.render();
    this.handleClick();
  }
  
  render() {
    console.log(this);
    console.log('this is working');
    if (this.followState === 'followed') {
      this.$el.text('Unfollow!');
    } else {
      this.$el.text('Follow!');
    }
  }
  
  handleClick() {
    this.$el.on('click', e => {
      e.preventDefault();
      if (this.followState === 'unfollowed') { APIUtil.followUser(this.userId).then(() => {
          this.followState = 'followed';
          this.render();
        });
      } else {
        APIUtil.unfollowUser(this.userId).then(() => {
          this.followState = 'unfollowed';
          this.render();
        });
      }
    });
  }
  
  
  
}

module.exports = FollowToggle;