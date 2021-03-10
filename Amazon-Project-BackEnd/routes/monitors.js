
import express from 'express';
import ValidationMiddleware from '../middleware/validation';

import db from '../models/monitorService';

const router = express.Router();


router.post('/', (req, res) => {
    db.createMonitor(req, res);
});

router.get('/', (req, res) => {
   db.readMonitors(req, res);
})

//checks the valid jwt first and if thats good call the rest
router.get('/:id', [ValidationMiddleware.validJWTNeeded, (req,res) => {
    
    db.readMonitor(req,res);

}]
)

router.delete('/:id',(req, res) => {
 
  db.deleteMonitor(req, res);

})

router.put('/:id', (req, res) => {

  db.updateMonitor(req,res)
})

export default router;