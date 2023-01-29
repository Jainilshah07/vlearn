const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema(
  {
    div: {
      type: String,
      enum: ["A", "B"],
      default: "A",
    },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    subject: {
      type: String,
      enum: ["FLAT", "Web Programming", "DAA", "CN", "Statistics"],
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String },
    deadline: { type: String },
    images: [{ type: String }],
    videoUrl: { type: String },
    referenceLink: { type: String },
    submissionLink: { type: String },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
      },
    },
    timestamps: true,
  }
);

module.exports.Assignment = mongoose.model("assignment", AssignmentSchema);
