const { AddAssignmentDTO, UpdateAssignmentDTO, DeleteAssignmentDTO } = require('../dto')
const { Assignment } = require('../models/Assignment')
const { Student } = require("../models/Student");
const { Teacher } = require("../models/Teacher");

module.exports.GetAssignment = async (req, res, next) => {

    try {
        const student = await Student.findById(req.params.studentId);
        const assignments = await Assignment.find({ student: req.params.studentId }).populate('student').populate('teacher');
        res.send(assignments);
      } catch (err) {
        res.status(500).send(err);
      }    
}

module.exports.GetAllAssignments = async (req, res, next) => {
    
    const assignments = await Assignment.find({})

    return res.status(200).json(assignments)
}

module.exports.AddAssignment = async (req, res, next) => {

    await AddAssignmentDTO.validateAsync(req.body)

    const { student, div, subject, title, description, deadline, videoUrl, referenceLink,submissionLink, images } = req.body
    const teacher = await Teacher.findById(req.params.teacherId);
    const assignment = await Assignment.create({
        students: student,
        div: div,
        subject: subject,
        title: title,
        description: description,
        deadline: deadline,
        videoUrl: videoUrl,
        referenceLink: referenceLink,
        submissionLink: submissionLink,
        images: images
    })

    if (assignment) {
        return res.status(200).json(assignment)
    }

    return res.status(400).json({
        message: "Something wrong with AddAssignment"
    })
}

module.exports.UpdateAssignment = async (req, res, next) => {

    await UpdateAssignmentDTO.validateAsync(req.body)

    const { students, div, subject, title, description, deadline, videoUrl, referenceLink,submissionLink, images } = req.body

    const assignment = await Assignment.findById(_id)

    if (assignment) {
        
        assignemnt.students = students
        assignemnt.div = div
        assignemnt.subject = subject
        assignemnt.title = title
        assignemnt.description = description
        assignemnt.deadline = deadline
        assignemnt.videoUrl = videoUrl
        assignemnt.referenceLink = referenceLink
        assignemnt.submissionLink = submissionLink
        assignemnt.images = images

        const result = await assignment.save()

        if (result) {
            return res.status(200).json(result)
        }

    }
    return res.status(400).json({
        message: "Something wrong with UpdateAssignment"
    })
}

module.exports.DeleteAssignment = async (req, res, next) => {

    await DeleteAssignmentDTO.validateAsync(req.body)

    const { _id } = req.body

    if (_id) {

        const assignment = await Assignment.findByIdAndDelete(_id)

        if (assignment) {
            return res.status(200).json(assignment)
        }
    }

    return res.status(400).json({
        message: "Something wrong with DeleteAssignment"
    })
}
