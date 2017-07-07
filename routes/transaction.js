import express from 'express';
import Transaction from '../model/transaction';

const router = express.Router();

/*Send Transaction information from database to frontend*/
router.get('/', (req, res, next) => {
  Transaction.find({}, (err, users) => {
    res.json(users);
  });

});

export default router;
