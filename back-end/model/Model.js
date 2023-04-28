const { Sequelize } = require('sequelize');
const dbConfig = require('../databaseConfig/config')

const sequelize = new Sequelize(dbConfig.db,
   dbConfig.user,
    dbConfig.password,
     {
  host: dbConfig.host,
  dialect:dbConfig.dialect
});

 sequelize.authenticate().then(()=>console.log('Connection has been established successfully.'))
 .catch((er)=> console.error('Unable to connect to the database:', er))
 
const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./userModel')(sequelize,DataTypes)

db.sequelize.sync({force:false}).then(()=>{console.log('sync done')})

module.exports = db