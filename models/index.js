const User = require('./User');
const Pet = require('./Pet');
const FR = require('./FR');
const Friend = require('./Friend');
const Messages = require('./Messages');


// sets up relationship between pet and user tables
User.hasMany(Pet, {
    foreignKey: 'owner_id',
    onDelete: 'CASCADE',
});

Pet.belongsTo(User, {
    foreignKey: 'owner_id',
});


// sets up relationship between fr and User table
User.hasMany(FR, {
    foreignKey: 'receiver_id',
    onDelete: 'CASCADE',
});

FR.belongsTo(User, {
    foreignKey: 'receiver_id',
});


// sets up relationshipe between friend and user table
User.hasMany(Friend, {
    foreignKey: 'main_user_id',
    onDelete: 'CASCADE',
});

Friend.belongsTo(User, {
    foreignKey: 'main_user_id',
});


module.exports = {User, Pet, FR, Friend, Messages};