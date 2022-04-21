const router = require('express').Router();
const locationRoutes = require('./location-routes');
const travellerRoutes = require('./traveller-routes');

router.use('/locations', locationRoutes);
router.use('/travellers', travellerRoutes);

module.exports = router;
