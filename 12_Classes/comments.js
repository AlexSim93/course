class Comment {
  constructor(author, text){
    this.author = author;
    this.text = text;
  }
  quote(userName){
    return `${userName}: "${this.author} написал: ${this.text}"`;
  }
  render(){
    return `${this.author} написал: ${this.text}`;
  }
}
class UserComment extends Comment{
  constructor(name, text, date){
    super(name, text);
    this.date = date;
    this.rate = 0;
  }
  render(){
    return `${this.author} написал ${this.date.getDate()}.${this.date.getMonth() + 1}.${this.date.getFullYear()}: ${this.text}; Рейтинг: ${this.rate}`;
  }
  like(){
    this.rate++;
  }
  dislike(){
    this.rate--;
  }
}
class AdComment extends Comment{
  constructor(name, text, link){
    super(name, text);
    this.link = link;
    this.isHidden = false;
  }
  render(){
    return !this.isHidden?`${this.author} написал: ${this.text}; Перейти >> ${this.link}`:'Реклама скрыта';
  }
  hide(){
    this.isHidden = true;
  }
}

exports.Comment = Comment;
exports.UserComment = UserComment;
exports.AdComment = AdComment;
