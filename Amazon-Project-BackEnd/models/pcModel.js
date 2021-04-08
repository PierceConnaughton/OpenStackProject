import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

const PcSchema = new Schema(
    {
        // type: array, 
        // product: [
        //     id: { type: String },
        //     asin: {type: String},
        //     title = {type: String},
        //     price = { 
        //         value: {type: Number}
        //     },
        // ]

        // "product": {
        //     "productID": { "type": "string" },
        //     "asin":           { "type": "string" },
        //     "title":          { "type": "string" },
        //     "price": {
        //         "value": {"type": "Number"}
        //     }
        //   },

        asin: { type: String },
        title: { type: String },
        value: {type: Number},
        rating: {type: Number},
        image: { type: String },
        

        
    },
    { toJSON: { virtuals: true } } // include virtuals when document is converted to JSON   
);

PcSchema.virtual('uri').get(function()  {
    return `/pcs/${this._id}` ;
});

PcSchema.plugin(uniqueValidator);

let Pc = mongoose.model('Pc', PcSchema);


export { Pc }