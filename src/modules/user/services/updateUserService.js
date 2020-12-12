class updateUserSevice {
  constructor(db) {
    this.db = db;
  }

  async execute({ user_id, update }) {
    let user = await this.db.findOne({
      where: { id: user_id },
    });

    if (!user) {
      throw new Error("Only authenticated users can change avatar");
    }

    await this.db.update(update, { where: { id: user_id } });

    user = await this.db.findOne({
      where: { id: user_id },
    });

    return user;
  }
}

export default updateUserSevice;
