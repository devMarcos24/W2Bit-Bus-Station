import Sequelize, { Model } from "sequelize";

class avatars extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        size: Sequelize.FLOAT,
        key: Sequelize.STRING,
        url: Sequelize.STRING,
        userId: Sequelize.INTEGER,
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

export default avatars;
