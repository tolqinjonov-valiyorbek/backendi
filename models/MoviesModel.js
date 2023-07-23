const mongoose = require("mongoose");


const moviesSchema = mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    name: {
        type:String,
        required: true,
    },
    desc: {
        type:String,
        required: true,
    },
    titleImage: {
        type:String,
        required: true,
    },
    image: {
        type:String,
        required: true,
    },
    year: {
        type:Number,
        required: true,
    },
    time: {
        type:Number,
        required: true,
    },
    video: {
        type:String,
        required: true,
    },
},
{
    timestamps: true,
}
);


module.exports = mongoose.model("Movies", moviesSchema);


