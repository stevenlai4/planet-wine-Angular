import { Injectable } from '@angular/core';
import { Shop } from '../shop/shop.model';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  shop: Shop[] = [
    new Shop(
      1,
      '2018 Zinfandel 750mL',
      'Red Wine',
      30.0,
      'A Zinfandel that draws its power from sophistication instead of raw alcohol content. Made in the classic field blend style including significant portions of Petite sirah and Carignane.',
      '../../assets/img/2018 Zinfandel.jpeg'
    ),
    new Shop(
      2,
      '2017 Estate Grown Cabernet Sauvignon 750mL',
      'Red Wine',
      35.0,
      'A wine with all the hallmarks of the legendary Cabernets of Rutherford: deep, cassis-currant aromas, the classic notes of Rutherford Dust, earthen flavors of cedar and black olive and a velvety, plush mouthfeel',
      '../../assets/img/2017 Estate Grown Cabernet Sauvignon.jpeg'
    ),
    new Shop(
      3,
      '2018 Heritage Blend 750mL',
      'Red Wine',
      45.0,
      'A field blend of varietals rarely seen today including Charbono, Carignan, Valdiguie, and Mourvèdre. Bright, fresh red fruit flavors meet baking spice aromas to tell a historic story.',
      '../../assets/img/2018 Heritage Blend.jpeg'
    ),
    new Shop(
      4,
      '2018 Chardonnay Shale and Stone 750mL',
      'White Wine',
      30.0,
      "'Shale and Stone' on the label is reflective of the deep minerality of the vineyard's ancient fractured shale soils and the freshness of the varietal. With long sur lie aging in concrete, it is taut but generous, and full yet bright on the palate.",
      '../../assets/img/2018 Chardonnay Shale and Stone.jpeg'
    ),
    new Shop(
      5,
      '2018 Chenin Blanc 750mL',
      'White Wine',
      45.0,
      'Fermented and aged entirely in concrete, this wine is lean yet supple, aromatic yet reserved, savory yet refreshing and deeply sophisticated. 100% Chenin Blanc with bright acidity and superb balance.',
      '../../assets/img/2018 Chenin Blanc.jpeg'
    ),
    new Shop(
      6,
      '2018 Rachel Rossi Reserve Sauvignon Blanc 750mL',
      'White Wine',
      75.0,
      'Honoring the matriarch of the family who founded our Rossi Vineyard and made from 39-year-old vines, rich apricot and freshly wetted stone aromas meet seamless flavors, superb balance and a flawless finish.',
      '../../assets/img/2018 Rachel Rossi Reserve Sauvignon Blanc.jpeg'
    ),
    new Shop(
      7,
      '2018 Planet Zinfandel 750mL',
      'Red Wine',
      30.0,
      'Full bodied, but fresh with a bright mix of red and black fruit of berry and cherry, vanilla, cinnamon and licorice spice on entry with dusty earth, oak and savory hints of black and white pepper joining sustained fruit on the mid-palate. Fine, lingering tannins last well through a moderately long finish that is fresh and clean with a mix of complex fruit and attractive spice and oak notes.',
      '../../assets/img/2018 Zinfandel.jpeg'
    ),
    new Shop(
      8,
      '2019 Sauvignon Blanc 750mL',
      'White Wine',
      30.0,
      'Stone fruit and white flower aromatics are perfectly complemented with crisp, minerally flavors. Fermented and aged in stainless steel tanks to preserve the purity and distinctiveness of this noble grape.',
      '../../assets/img/2019 Sauvignon Blanc.jpeg'
    ),
  ];

  constructor() {}

  getShop(): Shop[] {
    return this.shop;
  }
}
