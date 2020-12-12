import dbUser from "../../../shared/Models/users";

class UploadAvatarSevices {
  constructor(db) {
    this.db = db;
  }

  async execute({ user_id, avatar }) {
    const user = await dbUser.findOne({
      where: { id: user_id },
    });

    if (!user) {
      throw new Error({
        message: "Only authenticated users can change avatar",
        status: 401,
      });
    }

    avatar.userId = user_id;

    const stockAvatar = await this.db.create(avatar);

    return stockAvatar;
  }
}

export default UploadAvatarSevices;
