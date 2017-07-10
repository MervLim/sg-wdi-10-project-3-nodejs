import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  item: String,
  quantity: Number,
  price: Number

})





const Inventory = mongoose.model('inventory', userSchema);


module.exports = Inventory;
