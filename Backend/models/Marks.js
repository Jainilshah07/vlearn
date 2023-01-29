const mongoose = require("mongoose")


const MarksSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' ,required:true},
    cn1:{type: Number, required:true},
    cn2:{type: Number, required:true},
    daa1:{type: Number, required:true},
    daa2:{type: Number, required:true}
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

module.exports.Marks = mongoose.model('marks', MarksSchema);