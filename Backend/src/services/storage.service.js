
//cloud storage provider: ImageKit ka code yaha likhna hai
const {ImageKit} = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
    
})
async function uploadFile(buffer){

    console.log(buffer);

    const result = await imagekit.files.upload({
        file: buffer.toString('base64'), //the image file in base64 format
        fileName: 'image.jpg'
    })
    
    return result; 
}

module.exports = uploadFile;