const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  // req.flash('info', 'Something happened');
  // req.flash('warning', 'Something happened');
  // req.flash('error', 'Something happened');
  // req.flash('error', 'Something <strong>else</strong> happened');
  // req.flash('error', 'Something happened');
  // req.flash('error', 'Oh noo');
  // req.flash('success', 'Something happened');
  res.render('index', {
    title: req.siteTitle,
  });
};

exports.addStore = (req, res) => {
  res.render('editStore', {
    title: 'Add store'
  })
};

exports.createStore = async (req, res) => {
  const store = await (new Store(req.body)).save();

  req.flash('success', `Succesfully created ${store.name}. Care to leave a review?`);
  res.redirect(`/store/${store.slug}`);
};

exports.getStores = async (req, res) => {
  const stores = await Store.find();
  // console.log(stores);

  res.render('Stores', { title: 'Stores', stores });
};
