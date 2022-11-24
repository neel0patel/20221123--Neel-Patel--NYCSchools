// model containing the data for schools in NY
module.exports = function (sequelize, DataTypes) {
  var Alderman = sequelize.define("Alderman", {
    ward_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    alderman: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street_address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    phone_ward: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fax: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: DataTypes.STRING,
    latlong: DataTypes.STRING,
    cityhall_street_address: DataTypes.STRING,
    cityhall_city: DataTypes.STRING,
    cityhall_state: DataTypes.STRING,
    cityhall_zipcode: DataTypes.STRING,
    cityhall_phone: DataTypes.STRING,
    boundaries_zipcodes: DataTypes.INTEGER,
    community_areas: DataTypes.INTEGER,
    extra_zipcodes: DataTypes.STRING,
    census_tracts: DataTypes.INTEGER,
    extra_wards: DataTypes.INTEGER,
    extra_computed_region: DataTypes.INTEGER,
  });
  return Alderman;
};
