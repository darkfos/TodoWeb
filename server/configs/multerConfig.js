let multer = require("multer");

multer = multer({storage: multer.diskStorage(
    {
        destination: (req, file, cb) => {
            cb(null, '/home/rias/Desktop/TodoWeb/client/src/static/image');
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + "-" + file.originalname);
        }
    }
)})


module.exports = multer;