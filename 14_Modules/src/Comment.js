class Comment {
    constructor(id, author, text) {
        this.id = id;
        this.author = author;
        this.text = text;
    }
    quote(userName) {
        return `${userName}: "${this.author} написал: ${this.text}"`;
    }
    render() {
        return `${this.author} написал: ${this.text}`;
    }
}
export { Comment };
