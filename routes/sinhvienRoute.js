const express=require('express');
const router=express.Router();
const sinhvien=require('../models/sinhvienModel');
//get (select)
//http://localhost:5000/
router.get('/', async (req,res)=>{
    try {
        const sinhviens = await sinhvien.find();//lay ve toan bo sinh vien co trong bang
        //res.json(sinhviens);
        res.render('sinhviens',{sinhviens: sinhviens});//tra ve file ejs
        console.log(sinhviens);
    } catch (error) {
        console.error(error);
        res.json({error: error});
    }
});
//post (new sinhvien)
//http://localhost:5000/sinhvien
router.post('/sinhvien',async (req,res)=>{
    try {
        const {id,name}=req.body;//lay du lieu nguoi dung nhap tu React Native
        const sinhvien1=new sinhvien({id,name});//tao doi tuong moi voi du lieu user nhap
        await sinhvien1.save();//luu vao bang du lieu
        res.json(sinhvien1);//tra ve ket qua
        console.log(sinhvien1);
    } catch (error) {
        console.error(error);
        res.json({error: error});
    }
});
//put (update)
//http://localhost:5000/sinhvien/:_id
router.put('/sinhvien/:_id', async (req,res)=>{
    try {
        const _id=req.params._id;
        const {id,name}=req.body;//lay du lieu nguoi dung nhap tu React Native
        const updateSinhVien=await sinhvien.findByIdAndUpdate(_id,{id,name},{new: true});
        res.json(updateSinhVien);
        console.log(updateSinhVien);
    } catch (error) {
        console.error(error);
        res.json({error: error});
    }
});
//delete (delete)
//http://localhost:5000/sinhvien/:_id
router.delete('/sinhvien/:_id', async (req,res)=>{
    try {
        const _id=req.params._id;
        const deleteSinhVien= await sinhvien.findByIdAndDelete(_id);
        res.json(deleteSinhVien);
        console.log(deleteSinhVien);
    } catch (error) {
        console.error(error);
        res.json({error: error});
    }
});
module.exports=router;