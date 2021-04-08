import express from 'express';

import pcDB from '../models/pcService';


const router = express.Router();


// router.post('/', [ ValidationMiddleware.validJWTNeeded, (req, res) => {
    
//     userDB.createUser(req, res);}]
// );

// temp - to create users by an unauthenicated user.

router.post('/', (req, res) => {
    
    pcDB.createPc(req, res);}
);

router.get('/', (req, res) => {
    pcDB.readPcs(req, res);
});

router.get('/:id', (req, res) => {

    pcDB.readPc(req, res);

})

router.delete('/:id', (req, res) => {

    pcDB.deletePc(req, res);

})

router.put('/:id', (req, res) => {

  //  db.updateBook(req, res)
})

export default router;