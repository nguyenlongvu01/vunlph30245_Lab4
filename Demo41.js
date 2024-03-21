//npm i nodemailer
const express=require('express');
const nodemailer=require('nodemailer');
//tao server
const app=express();
//cau hinh gui email
let guiEmail=nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nglongvu03@gmail.com',
        pass: 'ruzy sped repl rduw'
    }
});
//thiet lap noi dung gui
let noiDung={
    from: 'nguyenlongvu1001@gmail.com',
    to: 'nglongvu03@gmail.com',
    subject: 'Test email',
    text: 'cho t vay 5tr'
};
//gui
guiEmail.sendMail(noiDung,(err,info)=>{
    if(err){
        console.log('Loi: '+err);
    }
    else{
        console.log('Da gui thanh cong: '+info);
    }
});
//chay server
app.listen(3005,()=>{
    console.log('server dang chay');
});