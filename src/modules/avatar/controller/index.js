import UploadAvatarService from "../services/UploadAvatarService";

let dataBase;
class Avatar {
  constructor(db) {
    dataBase = db;
  }

  async uploadAvatar(req, res) {
    try {
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

      return res.status(200).json(avatar);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default Avatar;
