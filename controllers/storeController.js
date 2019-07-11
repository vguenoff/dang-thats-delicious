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

exports.editStore = async (req, res) => {
  // 1. Find the store given the id
  const store = await Store.findOne({ _id: req.params.id });
  // res.json(store);

  // 2. Confirm they are the owner of the store
  // 3. Render out the edit form so the user can update their store
  res.render('editStore', { title: `edit ${store.name}`, store });
};

exports.updateStore = async (req, res) => {
  // 1. Find the store nd update
  const store = await Store.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true, // return the new store instead on the old one
    runValidators: true,
  }).exec();

  req.flash('success', `Successfully updated <strong>${store.name}</strong>. <a href="/stores/${store.slug}">View Store<a/>`);
  
  // 2. Redirect to the new store
  res.redirect(`/stores/${store._id}/edit`);
};
