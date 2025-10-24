const ImageKit = require('imagekit');
require("dotenv").config();
const imagekit = new ImageKit({
    publicKey: process.env['IMAGEKIT_PUBLIC_KEY'],
    urlEndpoint: process.env['IMAGEKIT_URL_ENDPOINT'],
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY'], // This is the default and can be omitted
});

async function uploadImageToStorage(file, fileName,folder="AI_Caption") {
    const response = await imagekit.upload({
        file: file, //required
        fileName: fileName,
        folder:folder//required
    });
    return response;
}               

module.exports = uploadImageToStorage;
