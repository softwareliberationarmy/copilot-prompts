//Template for a Sequelize model
const { DataTypes, Model } = require('sequelize');
class User extends Model {
  //static or factory methods
  //instance methods
}
const init = function(sequelize){
  User.init({
    //schema goes here
  }, {
    hooks: {},
    tableName: "users"
    underscored: true,
    sequelize
  })
}

exports.createUser = function(sequelize){
  init(sequelize);
  return User;
}