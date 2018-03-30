import { Comment, IComment } from './Comment';


class UserComment extends Comment implements IComment{
  name: string;
  text: string;
  date: Date;
  rate: number;
  constructor(id: number, name: string, text: string, date: Date) {
    super(id, name, text);
    this.date = date;
    this.rate = 0;
  }
  render(): string {
    return `${this.author} написал ${this.date.getDate()}.${this.date.getMonth() + 1}.${this.date.getFullYear()}: ${this.text}; Рейтинг: ${this.rate}`;
  }
  like(): void {
    this.rate++;
  }
  dislike(): void {
    this.rate--;
  }
}
export {UserComment};