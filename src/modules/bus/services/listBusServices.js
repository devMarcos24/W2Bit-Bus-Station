class listAllBusServices {
  constructor(db) {
    this.db = db;
  }

  async execute({ id, bus }) {
    if (!id) {
      throw new Error("please send the bus id");
    }

    const response = await this.db.findOne({ where: { id } });

    if (!response) {
      throw new Error("This bus is not exists");
    }

    return response;
  }
}

export default listAllBusServices;
