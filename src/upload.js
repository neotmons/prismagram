import multer from "multer";

export const uploadMiddleware = multer({dest: "upload/"});

export const uploadController = (req, res) => {
    const { file } = req;
    res.end();
}
