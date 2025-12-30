const mongoose = require('mongoose');

const dbConnection = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/mongomodels')
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
    });
};

module.exports = dbConnection;
