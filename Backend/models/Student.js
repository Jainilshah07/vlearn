const mongoose = require("mongoose")


const StudentSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    sapid: {type: String, required: true},
    name:{type: String},
    phone:{type: String},
    role:{type: String , default: 'student'},
    salt: {type: String, required: true},
    div:{
        type: String,
        enum: ['A', 'B'],
        default: 'A'
    },
    // assignment : [{type: String}]
},{
    toJSON: {
        transform(doc,ret){
            delete ret.__v;
            delete ret.createdAt;
            delete ret.updatedAt;
        }
    },
    timestamps: true
});

module.exports.Student = mongoose.model('student', StudentSchema);