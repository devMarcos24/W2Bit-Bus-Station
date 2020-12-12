import Sequelize, { Model } from "sequelize";

class users extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        url_foto: Sequelize.STRING,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },
      {
        sequelize: connection,
      }
    );

    return this;
  }
}

export default users;
