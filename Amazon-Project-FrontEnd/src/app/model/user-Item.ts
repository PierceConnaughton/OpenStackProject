import { AmazonCasesResponse } from './AmazonCasesResponse';
import { IMonitor } from './monitor';


export class UserItem {
    id: string;
    asin: string;
    title: string;
    image: string;
    qty: number;
    value: Number;
    rating: Number;
  
    constructor(id: string,asin: string, title: string, price: Number,image: string,rating: Number, qty = 1) {
      this.id = id;
      this.asin = asin;
      this.title = title;
      this.value = price;
      this.image = image;
      this.qty = qty;
      this.rating = rating;
    }
  }
  