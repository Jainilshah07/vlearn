const mongoose = require('mongoose');


const NoteSchema = new mongoose.Schema({
    "teacher": { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' } ,
    "student": { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    title: {
        type : String, 
        required  :true
    },
    description: {
        type : String, 
        required  :true,
    },
    tag: {
        type : String, 
        default : "General"
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

module.exports.Note = mongoose.model('note', NoteSchema);