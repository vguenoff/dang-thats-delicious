const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController')
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));

router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));

router.get('/stores/:id/edit', catchErrors(storeController.editStore));
router.post('/add/:id', catchErrors(storeController.updateStore));

// router.get('/reverse/:name', (req, res) => {
//   const reverse = [...req.params.name].reverse().join('');

//   res.send(reverse);
// });

module.exports = router;
