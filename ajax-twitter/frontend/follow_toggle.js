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
      if (this.followState === 'unfollowed') {
        console.log('follow state false');
        $.ajax({
          url: `/users/${this.userId}/follow`,
          method: 'POST',
          data: {
            user_id: this.currentUserId
          },
          dataType: 'JSON'
        });
        this.followState = 'followed';
      } else {
        console.log('follow state true');
        $.ajax({
          url: `/users/${this.userId}/follow`,
          method: 'DELETE',
          data: {
            user_id: this.currentUserId
          },
          dataType: 'JSON'
        });
        this.followState = 'unfollowed';
      }
      this.render();
    });
  }
  
}

module.exports = FollowToggle;