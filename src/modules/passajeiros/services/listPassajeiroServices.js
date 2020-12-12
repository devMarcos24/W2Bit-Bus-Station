class ListPassajeiroService {
  constructor(db) {
    this.db = db;
  }

  async execute() {
    let existPass = await this.db.findAll();

    return existPass;
  }
}

export default ListPassajeiroService;
