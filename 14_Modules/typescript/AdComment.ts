import { Comment, IComment } from "./Comment";

class AdComment extends Comment implements IComment {
  name: string;
  text: string;
  link: string;
  isHidden: boolean;
  constructor(id: number, name: string, text: string, link: string) {
    super(id, name, text);
    this.link = link;
    this.isHidden = false;
  }
  render(): string {
    return !this.isHidden
      ? `${this.author} написал: ${this.text}; Перейти >> ${this.link}`
      : "Реклама скрыта";
  }
  hide(): void {
    this.isHidden = true;
  }
}
export {AdComment};
