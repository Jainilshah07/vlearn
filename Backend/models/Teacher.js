const mongoose = require("mongoose")


const TeacherSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    subject: {type: String,
        enum: ['FLAT', 'Web Programming', 'DAA', 'CN','Statistics'],
        required: true//can give option like divison
    },
    teacherId:{type: String, required: true},
    salt: {type: String, required: true},
    name:{type: String},
    // notesArray:[{type: mongoose.Schema.Types.ObjectId ,ref: 'note'}],
    phone:{type: String},
    div:{
        type: String,
        enum: ['A', 'B'],
        default: 'A'
    },
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

module.exports.Teacher = mongoose.model('teacher', TeacherSchema);