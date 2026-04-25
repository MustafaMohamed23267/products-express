const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

////////////  connect MongoDB        //////////////////
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

////////////////////   schema   ///////////////////////
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number
});

const Product = mongoose.model('Product', ProductSchema);

////////////  API  //////////////
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

//////    run server  //////////////////
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

