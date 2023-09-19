export class Product {
  public id: number;
  public price: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public category: string;

  constructor(
    id: number,
    price: number,
    name: string,
    desc: string,
    imagePath: string,
    category: string
  ) {
    this.id = id;
    this.price = price;
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.category = category
  }
}
