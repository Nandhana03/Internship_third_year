const mongoose = require('mongoose');

const connectDB=async ()=>
    {
        try{
            const conn=await mongoose.connect('mongodb+srv://nandhanavivek03:Vqq8ZbsI1H14fx3l@cluster0.mvdtqkj.mongodb.net/applicants?retryWrites=true&w=majority&appName=Cluster0');
            console.log(`MongoDB Connected : ${conn.connection.host}`);
         }
         catch(error)
         {
            console.log(error);
            process.exit(1);
         }
    };
    module.exports=connectDB;