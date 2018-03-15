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
function UserComment(name, text, date){
  Comment.apply(this, arguments);
  this.name = name;
  this.text = text;
  this.date = date;
  this.rate = 0;
};
function AdComment(name, text, link){
  Comment.apply(this, arguments);
  this.name = name;
  this.text = text;
  this.link = link;
  this.commentIsHidden = false;
};
function inherit(Child, Parent){
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
};
inherit(AdComment, Comment);
inherit(UserComment, Comment);

UserComment.prototype.like = function () {
  this.rate++;
};
UserComment.prototype.dislike = function () {
  this.rate--;
};
UserComment.prototype.render = function () {
  return `${this.name} написал ${this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + (this.date.getFullYear())}: ${this.text}; Рейтинг: ${this.rate}`;
};
AdComment.prototype.hide = function () {
  this.commentIsHidden = true;
};
AdComment.prototype.render = function () {
return !this.commentIsHidden?`${this.name} написал: ${this.text}; Перейти >> ${this.link}`:'Реклама скрыта';
};

exports.Comment = Comment;
exports.UserComment = UserComment;
exports.AdComment = AdComment;
