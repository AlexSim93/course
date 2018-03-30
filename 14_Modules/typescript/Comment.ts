interface IComment {
  id: number;
  author: string;
  text: string;
  render(): string;
}
class Comment implements IComment {
  id: number;
  author: string;
  text: string;
  constructor(id: number, author: string, text: string) {
    this.id = id;
    this.author = author;
    this.text = text;
  }
  quote(userName: string): string {
    return `${userName}: "${this.author} написал: ${this.text}"`;
  }
  render(): string {
    return `${this.author} написал: ${this.text}`;
  }
}
export { Comment, IComment };
