export class PriceCard {
  public title: string;
  public description: string;
  public stars: number;
  public price: number;
  public list = [
    'Een Premium Design',
    'SEO en CRO Optimalisatie',
    'Live Bezoeker Statistieken',
    'Eigen Domeinnaam en E-mail',
    'Super Snelle Hosting',
    'Alles Veilig en Secure',
    'Spoedcursus WordPress',
    'Gratis Support',
  ];

  constructor(title: string, description: string, stars: number, price: number) {
    this.title = title;
    this.description = description;
    this.stars = stars;
    this.price = price;
  }

  public addExtraListItems(list: string[]) {
    list.forEach((element) => {
      this.list.push(element);
    });
  }
}
