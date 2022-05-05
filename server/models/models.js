const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    firs_name: {type: DataTypes.STRING, allowNull: false},
    last_name: {type: DataTypes.STRING, allowNull: false},
    patronymic: {type: DataTypes.STRING, allowNull: false},
    passport: {type: DataTypes.STRING, unique: true, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Tour = sequelize.define('tour', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    tour_name: {type: DataTypes.STRING, allowNull: false},  
    price: {type: DataTypes.INTEGER, allowNull: false},
    date: {type: DataTypes.STRING, allowNull: false},
    dep_city: {type: DataTypes.STRING, allowNull: false},
    adilts: {type: DataTypes.INTEGER},
    children: {type: DataTypes.INTEGER},
    days: {type: DataTypes.INTEGER, allowNull: false},
    nights: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.INTEGER, allowNull: false}
})

const Tour_img = sequelize.define('tour_img', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING},
})

const Sale = sequelize.define('sale', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.STRING},
    quantity: {type: DataTypes.INTEGER}
})

const Return = sequelize.define('return', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE, allowNull: false},
    quantity: {type: DataTypes.INTEGER, allowNull: false},
    cause: {type: DataTypes.STRING}
})

const Country = sequelize.define('country', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Feeding = sequelize.define('feeding', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.BOOLEAN, allowNull: false},
})

const Reduction = sequelize.define('reduction', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.BOOLEAN, allowNull: false},
    amount: {type: DataTypes.INTEGER, defaultValue: 0}
})

Country.hasMany(Tour)
Tour.belongsTo(Country)

Feeding.hasMany(Tour)
Tour.belongsTo(Feeding)

Reduction.hasMany(Tour)
Tour.belongsTo(Reduction)

Tour.hasMany(Sale)
Sale.belongsTo(Tour)

Tour.hasMany(Tour_img)
Tour_img.belongsTo(Tour)

Tour.hasMany(Return)
Return.belongsTo(Tour)

Sale.hasMany(Return)
Return.belongsTo(Sale)

User.hasOne(Sale)
Sale.belongsTo(User)

User.hasMany(Return)
Return.belongsTo(User)


module.exports = {
    User,
    Tour,
    Sale,
    Return,
    Country,
    Feeding,
    Reduction,
    Tour_img
}