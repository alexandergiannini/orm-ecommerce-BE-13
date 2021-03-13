const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//http://localhost:3001/api/categories (GET)
router.get('/', (req, res) => {
  // find all categories, includes its associated Products
  Category.findAll({
    include: [Product]
  }).then(result => {
    res.json(result);
  })
});

//http://localhost:3001/api/categories/1 (GET)
router.get('/:id', (req, res) => {
  // find one category by its `id` value, include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then(result => {
    res.json(result);
  })
});

//http://localhost:3001/api/categories (POST), creating a category endpoint
router.post('/', (req, res) => {
  Category.create({
   // id: req.body.id,
    category_name: req.body.category_name
  }).then(result => {
    res.json(result);
  })
  // create a new category
});
///http://localhost:3001/api/categories/1 (PUT), updating a category
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
    category_name: req.body.category_name
  },{
    where: {
      id: req.params.id
    }
  },
  ).then(result => {
    res.json(result);
  })
});

/////http://localhost:3001/api/categories/1 (DELETE), deleting a category endpoint
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(result => {
    res.json(result);
  })
});

module.exports = router;
