class listAllBusServices {
  constructor(db) {
    this.db = db;
  }

  async execute({ id }) {
    if (!id) {
      throw new Error("please send the id of your bus");
    }

    const response = await this.db.destroy({ where: { id } });

    console.log(response);

    if (response === 0) {
      throw new Error("This bus is not exists");
    }

    return { message: "Bus deleted with success" };
  }
}

export default listAllBusServices;
