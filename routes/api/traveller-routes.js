const router = require('express').Router();
const { Traveller, Location, Trips } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const travellerData = await Traveller.findAll({
      include: [{ model: Location, through: Trips }],
    });
    res.status(200).json(
      travellerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // find all Travellers
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.findByPk(req.params.id, {
      include: [{ model: Location, through: Trips }],
    });

    if (!travellerData) {
      res.status(404).json({ message: 'No traveller was found with that id!' });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const tripData = await Traveller.create(
     req.body
    );
    res.status(200).json(tripData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.update(req.body,{
      where: {
        id: req.params.id,
      },
    });

    if (!travellerData) {
      res.status(404).json({ message: 'No traveller was found with that id!' });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!travellerData) {
      res.status(404).json({ message: 'No traveller was found with that id!' });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
