// import models
const Traveller = require("./Traveller");
const Location = require("./Location");
const Trips = require("./Trips");


// Traveller belongToMany Locations (through ProductTag)
Traveller.belongsToMany(Location, { through: Trips, foreignKey: "product_id" });
// Location belongToMany Travellers (through ProductTag)
Location.belongsToMany(Traveller, { through: Trips, foreignKey: "tag_id" });

module.exports = {
  Traveller,
  Location,
  Trips,

};
