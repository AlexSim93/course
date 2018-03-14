function Comment(author, text) {
  this.author = author;
  this.text = text;
  this.quote= function(userName){
    return `${userName}: "${this.author} написал: ${this.text}"`;
  }
  this.render = function(){
    return `${this.author} написал: ${this.text}`;
  }
}

function UserComment(name, text, date){
  Comment.call(this, name);
  this.name = name;
  this.text = text;
  this.rate = 0;
  this.date = date;
  this.like = function(){
    this.rate++;
  }
  this.render = function(){
    return `${this.name} написал ${this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + (this.date.getFullYear())}: ${this.text}; Рейтинг: ${this.rate}`;
  }
  this.dislike = function(){
    this.rate--;
  }
}

function AdComment(name, text, link){
  Comment.call(this, name);
  this.name = name;
  this.text = text;
  this.link = link;
  var hiddenComment = false;
  this.render = function(){
    return !hiddenComment?`${this.name} написал: ${this.text}; Перейти >> ${this.link}`:'Реклама скрыта';
  }
  this.hide = function(){
    hiddenComment = true;
  }
}

exports.Comment = Comment;
exports.UserComment = UserComment;
exports.AdComment = AdComment;
