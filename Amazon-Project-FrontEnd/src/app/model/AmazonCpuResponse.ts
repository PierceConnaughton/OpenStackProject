export interface AmazonCpusResponse{
  
  //general
  rank: Int16Array;
  asin: string;
  title:string;
  link:string;
  rating: Int16Array;
  image: string;
  price: {
    raw:string;
  };

    //for specific product
      product:{
        title:string;
        link:string;
        brand:string;
        color:string;
        manufacturer:string;
        model_number:string;
        description:string;
        rating: Int16Array;
      };
  
      frequently_bought_together: {
        total_price:{
          raw: string
        }
      };
  
      //for general 
      request_metadata:{
        amazon_url: string;
      };
  
      //for bestsellers
      bestsellers: [
        {
          rank: Int16Array;
          asin: string;
          title:string;
          link:string;
          rating: Int16Array;
          image: string;
          price: {
            raw:string;
          };
        }
      ];
      
      
  }
  
  export class Item implements AmazonCpusResponse {
    rank: Int16Array;
    asin: string;
    title:string;
    link:string;
    rating: Int16Array;
    image: string;
    price: {
      raw:string;
    };

      product:{
        title:string;
        link:string;
        brand:string;
        color:string;
        manufacturer:string;
        model_number:string;
        description:string;
        rating: Int16Array;
      };
  
      frequently_bought_together: {
        total_price:{
          raw: string
        }
      };
  
      request_metadata:{
        amazon_url: string;
      };
  
      bestsellers: [
        {
          rank: Int16Array;
          asin: string;
          title:string;
          link:string;
          rating: Int16Array;
          image: string;
          price: {
            raw:string;
          };
        }
      ];
      
  }