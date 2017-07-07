import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  item: String,
  quantity: Number,
  price: Number

})





const Inventory = mongoose.model('inventory', userSchema);

const inventory = new Inventory ({
  item: 'Wanton Mee',
  quantity: 2,
  price: 3
});
inventory.save();


module.exports = Inventory;
