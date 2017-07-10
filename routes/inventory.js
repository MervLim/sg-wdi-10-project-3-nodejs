import express from 'express';
import Inventory from '../model/inventory';

const router = express.Router();
//
// /*Send Transaction information from database to frontend*/
// router.get('/', (req, res, next) => {
//   Transaction.find({}, (err, users) => {
//     res.json(users);
//   });
//
// });

/*Send Inventory information from database to frontend*/
router.get('/', (req, res, next) => {
  Inventory.find({}, (err, users) => {
    res.json(users);
  });

});

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  Inventory.findById({_id: id}, (err, item) => {
    if (err) return err;
    res.json(item)
  })
})

export default router;
