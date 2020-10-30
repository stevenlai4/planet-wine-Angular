export class Shop {
  public id: number;
  public name: string;
  public type: string;
  public price: number;
  public description: string;
  public image: string;

  constructor(
    id: number,
    name: string,
    type: string,
    price: number,
    description: string,
    image: string
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}
