const mongoose=require('mongoose');

const itemSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      dob: {
        type: Date,
        required: true
      },
      education: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      },
      experience: {
        type: Number,
        required: true
      },
      resume: {
        type: String,
        required: true
      },
      selected: { type: Boolean, default: false } ,
      nselected: { type: Boolean, default: false },

      email:
      {
        type: String,
        required:true
      }
})

const itemModel=mongoose.model("Item",itemSchema)
module.exports=itemModel