// // npm i jsonwebtoken

// //thu vien
// const express = require ('express');
// const jwt = require ('jsonwebtoken');
// const bodyParser = require('body-parser');

// //tao app
// const app = express();

// //ho tro nhan du lieu json
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// //mang users
// const users =[
//     {id:1, username:'user001', password:'p001'}, // dung de login

// ];

// //token bi mat
// const tokenBiMat = '123456';

// //ham tao token
// function hamTaoToken(user)
// {
//     return jwt.sign(user, tokenBiMat,{expiresIn: '15m'});// co gia tri trong 15'
// }

// //tien hanh login (goi qua postman, khong ho tro goi qua trinh duyet)
// app.post('/login', (req, res)=>{
//     const {username, password} = req.body;//nhanh gia tri chuyen tu postman
//     console.log('thong tin nhan duoc');
//     console.log(username); console.log(password);// in ra console

// //tim kiem trong mang xem co user nhu nguoi dung nhap khong?/
// const user = users.find((u)=>u.username === username && u.password ===password); //so sanh
//     if(!user){
//         console.log("Sai username, password");
//         return;
//     }

//     //neu nhap dung thi tao token
//     const tokenCongKhai = hamTaoToken(
//         {
//             id: user.id, username: user.username
//         }
//     );
//     //tratoken
//     res.json({accessToken,refreshToken});
//     console.log("accessToken: "+accessToken);
//     console.log("refressToken: "+refreshToken);
// });
// app.listen(PORT,()=>{
//     console.log('server dang chay');
// });
////////////////////////////////////////////////////////////////////////    
const express=require('express');
const jwt=require('jsonwebtoken');//npm i jsonwebtoken
const bodyParser=require('body-parser');
const app=express();
const PORT=process.env.PORT||3004;
//de su dng postman
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//tao key
const acessK='123456';
const refeshK='123456';
const users=[
    {id: 1,username:'vunlph30245',password:'12345678'},
];
//ham sinh ra access token
function sinhAccessToken(user){
    return jwt.sign(user,acessK,{expiresIn: '15m'});
}
function sinhRefreshToken(user){
    return jwt.sign(user,refeshK,{expiresIn: '7d'});
}
//login
app.post('/login',(req,res)=>{
    const {username,password}=req.body;
    console.log('Thong tin');
    console.log(username);
    console.log(password);
    //tim user co trong mang user
    const user=users.find((u)=>u.username===username && u.password===password);
    if(!user){
        return res.status(404).json({message:'khong ton tai user'});
    }
    //lay ve acess token
    const accessToken=sinhAccessToken({id:user.id,username:user.username});
    const refreshToken=sinhRefreshToken({id:user,username:user.username});

    //tra ve nguoi dung
    res.json({accessToken,refreshToken});
    console.log("accessToken: "+accessToken);
    console.log("refressToken: "+refreshToken);
});
app.listen(PORT,()=>{
    console.log('server dang chay');
});