class CreatePassajeiroService {
  constructor(db) {
    this.db = db;
  }

  async execute(passajeiro) {
    console.log(passajeiro);

    const existPass = await this.db.findOne({
      where: { cpf: passajeiro.cpf },
    });

    if (existPass) {
      throw new Error("this passajeiro already exists");
    }

    return passajeiro;
  }
}

export default CreatePassajeiroService;
