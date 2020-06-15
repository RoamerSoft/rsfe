import { PriceCard } from './price-card';

describe('PriceCard', () => {
  it('should create an instance', () => {
    expect(new PriceCard('Test', 'Test', 3, 300)).toBeTruthy();
  });
});
