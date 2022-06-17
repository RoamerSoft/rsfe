export class PriceCard {
  public title: string;
  public description: string;
  public stars: number;
  public price: number;
  public list = [
    'Volledige geïnstalleerde en geconfigureerde server',
    'Een live testomgeving naast je productieomgeving',
    'Met monitoring proactief problemen voorkomen',
    'De juiste veiligheidsmaatregelen en netjes up-to-date',
    'Geen verloren databases met de goede back-ups',
    'Periodieke onderhoudsrapportgages in je mailbox',
    'Gemakkelijk maandelijks opzegbaar *'];

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
