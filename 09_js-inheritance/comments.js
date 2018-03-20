function Comment(author, text) {
  this.author = author;
  this.text = text;
};
Comment.prototype.quote = function (userName) {
  return `${userName}: "${this.author} написал: ${this.text}"`;
};
Comment.prototype.render = function () {
  return `${this.author} написал: ${this.text}`;
};
function inherit(Child, Parent){
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
};
inherit(AdComment, Comment);
inherit(UserComment, Comment);
function UserComment(name, text, date){
  Comment.apply(this, arguments);
  this.date = date;
  this.rate = 0;
};
UserComment.prototype.render = function () {
  return `${this.author} написал ${this.date.getDate()}.${this.date.getMonth() + 1}.${this.date.getFullYear()}: ${this.text}; Рейтинг: ${this.rate}`;
};
UserComment.prototype.like = function () {
  this.rate++;
};
UserComment.prototype.dislike = function () {
  this.rate--;
};

function AdComment(name, text, link){
  Comment.apply(this, arguments);
  this.link = link;
  this.isHidden = false;
};

AdComment.prototype.render = function () {
  return !this.isHidden?`${this.author} написал: ${this.text}; Перейти >> ${this.link}`:'Реклама скрыта';
};
AdComment.prototype.hide = function () {
  this.isHidden = true;
};

exports.Comment = Comment;
exports.UserComment = UserComment;
exports.AdComment = AdComment;
