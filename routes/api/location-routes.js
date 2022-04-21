const router = require('express').Router();
const { Location, Traveller, Trips } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res)  => {
  try {
    const locationData = await Location.findAll({
      include: [{ model: Traveller, through: Trips }],
    });
    res.status(200).json(locationData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
      include: [{ model: Traveller, through: Trips }]
    });

    if (!locationData) {
      res.status(404).json({ message: 'No location was found with that id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const tripData = await Location.create(
    req.body,
    );
    res.status(200).json(tripData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const locationData = await Location.update(req.body,{
      where: {
        id: req.params.id,
      },
    });

    if (!locationData) {
      res.status(404).json({ message: 'No location was found with that id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!locationData) {
      res.status(404).json({ message: 'No location was found with that id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete a category by its `id` value

});

module.exports = router;
