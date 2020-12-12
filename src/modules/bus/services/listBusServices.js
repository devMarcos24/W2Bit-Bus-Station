class listAllBusServices {
  constructor(db) {
    this.db = db;
  }

  async execute({ id }) {
    if (!id) {
      throw new Error("please send the id of your bus");
    }

    const response = await this.db.findOne({ where: { id } });

    if (!response) {
      throw new Error("This bus is not exists");
    }

    return response;
  }
}

export default listAllBusServices;
