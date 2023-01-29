const { Teacher } = require('../models/Teacher')
const { Student } = require('../models/Student')

module.exports.AssignmentAuthorize = async (req, res, next) => {
    if (req.user._id) {
        const teacher = await Teacher.findById(req.user._id)
        if(teacher) { return next() }
    }
    
        return res.status(401).json({
            message: "Unauthorized Role"
        })
    
}

module.exports.NoteAuthorize = async (req, res, next, error) => {
    if (req.user.role === "teacher" || req.user.role === "student") {
        next()
    }

    else {
        return res.status(401).json({
            message: "Unauthorized Role"
        })
    }
}

module.exports.MarksAuthorize = async (req, res, next, error) => {
    if (req.user.role === "teacher" || req.user.role === "student") {
        next()
    }

    else {
        return res.status(401).json({
            message: "Unauthorized Role"
        })
    }
}

module.exports.LectureAuthorize = async (req, res, next, error) => {
    if (req.user.role === "junior" || req.user.role === "senior") {
        next()
    }

    else {
        return res.status(401).json({
            message: "Unauthorized Role"
        })
    }
}

module.exports.GuideAuthorize = async (req, res, next, error) => {
    if (req.user.role === "senior") {
        next()
    }

    else {
        return res.status(401).json({
            message: "Unauthorized Role"
        })
    }
}
