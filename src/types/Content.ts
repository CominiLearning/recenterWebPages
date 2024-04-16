export interface Content {
  title: string;
  id: string;
  texts: JSX.Element[];
  cards: {
    img: string;
    title: string;
    text: string;
    level: number;
  }[];
}
