export interface AmazonGpusResponse{
  
          //general
          rank: Number;
          asin: string;
          title:string;
          link:string;
          rating: Number;
          image: string;
          price: {
            raw:string;
          };

    //for specific product
      product:{
        asin:string;
        title:string;
        link:string;
        brand:string;
        color:string;
        manufacturer:string;
        model_number:string;
        description:string;
        rating: Int16Array;
        images:[
          {
            link:string;
          }
        ];
        categories:[
          {
            name:string;
          }
        ];
        first_available:{
          raw: string;
        }
        buybox_winner:{
          price:{
            raw: string;
            value: Number
          }
        }
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
          rank: Number;
          asin: string;
          title:string;
          link:string;
          rating: Number;
          image: string;
          price: {
            raw:string;
            
          };
        }
      ];

      
      
      
  }
  
  export class Item implements AmazonGpusResponse {

        rank: Number;
          asin: string;
          title:string;
          link:string;
          rating: Number;
          image: string;
          price: {
            raw:string;
          };

      product:{
        asin:string;
        title:string;
        link:string;
        brand:string;
        color:string;
        manufacturer:string;
        model_number:string;
        description:string;
        rating: Int16Array;
        images:[
          {
            link:string;
          }
        ];
        categories:[
          {
            name:string;
          }
        ];
        first_available:{
          raw: string;
        }
        buybox_winner:{
          offer_id: string;
          price:{
            raw: string;
            value: Number
          }
        }
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
          rank: Number;
          asin: string;
          title:string;
          link:string;
          rating: Number;
          image: string;
          price: {
            raw:string;
          };
        }
      ];
      
  }