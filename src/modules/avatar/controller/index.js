import UploadAvatarService from "../services/UploadAvatarService";

let dataBase;
class Avatar {
  constructor(db) {
    dataBase = db;
  }

  async uploadAvatar(req, res) {
    const uploadAvatarService = new UploadAvatarService(dataBase);

    const localURL = `${process.env.APP_URL}/files/${req.file.key}` || "";
    const {
      originalname: name,
      size,
      key,
      location: url = localURL,
    } = req.file;

    const avatar = {
      name,
      size,
      key,
      url,
    };

    console.log(avatar);

    const stock = await uploadAvatarService.execute({
      user_id: req.user.id,
      avatar,
    });

    return res.status(200).json(stock);
  }
}

export default Avatar;
