class listAllBusServices {
  constructor(db) {
    this.db = db;
  }

  async execute() {
    const response = await this.db.findAll();

    return response;
  }
}

export default listAllBusServices;
