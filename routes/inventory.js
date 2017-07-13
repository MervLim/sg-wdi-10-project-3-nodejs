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

router.put('/:id', (req,res, next) => {
  let id = req.params.id
  console.log('got put', id);
  //console.log(req.body.item._id);

  const item = req.body.item;
  console.log(item);

  Inventory.findById(item._id, (err, foundItem) => {
    console.log('finding', foundItem)
    if (err) return res.json({message:'Bad Request',
                              error: err});

    if(!foundItem) {
      return res.status(404).send('Not Found');
    }
    console.log('pre-save', foundItem)
    foundItem.item = item.item;
    foundItem.quantity = item.quantity;
    foundItem.price = item.price;
    console.log('save');
    foundItem.save((err, item) => {
      if(err) return res.json({message:'Bad Request',
                                error: err});
      res.json(foundItem);

    });

  });

})

export default router;
