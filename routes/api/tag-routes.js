const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
  //includes its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({
    include: [ {model: Product, through: ProductTag} ]
  }).then(result => {
    res.json(result);
  })
});

  // find a single tag by its `id`; includes its associated Product data!!!!!
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [ {model: Product, through: ProductTag} ]
  }).then(result => {
    res.json(result);
  })
});

//create a new tag endpoint
router.post('/', (req, res) => {
  // create a new tag
  Tag.create(
    {
    tag_name: req.body.tag_name
  }).then(result => {
    res.json(result);
  })
});

//// update a tag's name by its `id` value (update tag endpoint)
router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name
    }, {
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.json(result);
    })
});

// delete on tag by its `id` value; deleting tag endpoint
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(result => {
    res.json(result);
  })
});

module.exports = router;
