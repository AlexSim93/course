import { Comment } from './Comment';
class UserComment extends Comment {
    constructor(id, name, text, date) {
        super(id, name, text);
        this.date = date;
        this.rate = 0;
    }
    render() {
        return `${this.author} написал ${this.date.getDate()}.${this.date.getMonth() + 1}.${this.date.getFullYear()}: ${this.text}; Рейтинг: ${this.rate}`;
    }
    like() {
        this.rate++;
    }
    dislike() {
        this.rate--;
    }
}
export default UserComment;
