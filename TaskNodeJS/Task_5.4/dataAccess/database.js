const { Sequelize}  = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URI,{
            dialectOptions:{
                ssl: {
                    required: true,
                    rejectUnauthorized: false
                  }
            }
        }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  module.exports = sequelize