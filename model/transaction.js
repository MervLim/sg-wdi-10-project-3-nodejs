import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  item: {
          name: String,
          quantity: Number,
          price: Number,
          subtotal: Number
        },
  total: Number
})



const Transaction = mongoose.model('transaction', userSchema);

const transaction = new Transaction ({
  item: {
    name: 'Wanton Mee',
    quantity: 2,
    price: 3,
    subtotal: 6
  },
  total: 6
});
transaction.save();


module.exports = Transaction;
