import { Comment } from "./Comment";
class AdComment extends Comment {
    constructor(id, name, text, link) {
        super(id, name, text);
        this.link = link;
        this.isHidden = false;
    }
    render() {
        return !this.isHidden
            ? `${this.author} написал: ${this.text}; Перейти >> ${this.link}`
            : "Реклама скрыта";
    }
    hide() {
        this.isHidden = true;
    }
}
export default AdComment;
