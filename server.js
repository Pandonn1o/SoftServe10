const app = require('./app');
const sequelize = require('./config/db');

const port = 5000;

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});