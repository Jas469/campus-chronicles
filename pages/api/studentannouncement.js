import mongoose from "mongoose";
import studentannouncement from "../../models/studentannouncement";
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://campus-chronicles:cc@cc.cvjckys.mongodb.net/test");
// mongoose.connect("mongodb://localhost:27017/main");
export default async function handler(req, res) {
    // console.log(req.body);

    if(req.method==='POST'){
        let da=req.body;
        // console.log(da);
        await studentannouncement.remove();
        da.map(async(dat)=>{
            let p=new studentannouncement(dat);
        await p.save();
        })
        res.status(200).json({success:"success"}) 

    }
    
    else{  
            let data1=await studentannouncement.find({}).sort({date:-1});
            res.status(200).json(data1);
    }      
}