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
      this.$el.removeAttr('disabled');
    } else if (this.followState === 'unfollowed') {
      this.$el.text('Follow!');
      this.$el.removeAttr('disabled');
    } else {
      this.$el.attr("disabled", "true");
    }
  }
  
  handleClick() {
    this.$el.on('click', e => {
      e.preventDefault();
      if (this.followState === 'unfollowed') { 
        this.followState = 'following';
        this.render();
        APIUtil.followUser(this.userId).then(() => {
          this.followState = 'followed';
          this.render();
        });

        
      } else {
        this.followState = 'unfollowing';
        this.render();
        APIUtil.unfollowUser(this.userId).then(() => {
          this.followState = 'unfollowed';
          this.render();
        });
      }
    });
  }
  
  
  
}

module.exports = FollowToggle;