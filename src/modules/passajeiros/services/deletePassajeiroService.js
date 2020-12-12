class DeletePassajeiroService {
  constructor(db) {
    this.db = db;
  }

  async execute({ id }) {
    let existPass = await this.db.findOne({
      where: { id },
    });

    if (!existPass) {
      throw new Error("this passajeiro do not exists");
    }

    const response = await this.db.destroy({ where: { id } });

    if (response === 0) {
      throw new Error("Passajeiro is not deleted please try again");
    }

    return { message: "Passajeiro was deleted", user: existPass };
  }
}

export default DeletePassajeiroService;
