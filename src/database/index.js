import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/databasename',
      { useNewUrlParser: true, useFindAndModify: true }
    );
  }
}

export default new Database();
