const APIUtil = require('./api_util.js');
class UsersSearch {
  constructor($nav) {
    this.$nav = $nav;
    this.$input = $('.search-field');
    console.log($('.search-field'));
    this.$ul = $('.users');
    console.log($('.users'));
    // debugger;
    this.handleInput();
  }
  
  handleInput() {
    this.$input.on('keyup', e => {
      e.preventDefault();
      // debugger;
      APIUtil.searchUsers(this.$input.val())
      .then((res) => this.renderResults(res));
    });
  }
  
  renderResults (res) {
    this.$ul.empty();
    debugger;
    res.forEach((user) => {
      let $li = $(`<li><a href="/users/${user.id}">${user.username}</a></li>`);
      this.$ul.append($li);
    });
  }
}

module.exports = UsersSearch;