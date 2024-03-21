// npm i multer
const express=require('express');
const multer=require('multer');

//tao appp
const app = express();
const port = 3006;

//cau hinh de luu anh

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads');
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);

    }

});

// su dung bien upoad de thao tac
const upload = multer({storage});

//dinh nghia GET (lay file)
app.get('/Upload', (req, res)=>{
    res.sendFile(__dirname + '/upload2.html');
});

//dinh nghia POST ( upload file len thu muc)
app.post('/Upload', upload.single('image'),(req, res)=>{
    res.send('Upload thanh cong');
});
// khoi dong server
app.listen(port,()=>{
    console.log('server dang chay');
});