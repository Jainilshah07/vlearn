const { Student } = require('../models/Student')
const { AddStudentDTO, StudentLoginDTO, DeleteStudentDTO } = require('../dto')
const { GeneratePassword, GenerateSalt, ValidatePassword, GenerateSignature } = require('../utility')

module.exports.AddStudent = async (req, res, next) => {

    await AddStudentDTO.validateAsync(req.body)

    if (req.body.admin_secret !== process.env.ADMIN_SECRET) {
        return res.status(402).json({
            message: "Admin access denied"
    })
    }

    const { email, password, sapid, phone, name, div} = req.body

    const salt = await GenerateSalt();
    const encryptedPassword = await GeneratePassword(password, salt)

    if (sapid) {
        const student = await Student.create({
            email: email,
            password: encryptedPassword,
            salt: salt,
            sapid: sapid,
            phone: phone,
            name:name,
            div: div
        })

        if (student) {
            return res.status(200).json(student)
        }
    }

    return res.status(400).json({
        message: "Something wrong with AddStudent"
    })
}

module.exports.GetStudent = async (req, res, next) => {

    const { _id } = req.query

    if (_id) {

        const student = await Student.findById(_id)

        if (student) {
            return res.status(200).json(student)
        }
    }

    return res.status(400).json({
        message: "Something wrong with GetStudent"
    })
}

module.exports.GetAllStudents = async (req, res, next) => {
    
    const students = await Student.find({})

    return res.status(200).json(students)
}


module.exports.UpdateStudent = async (req, res, next) => {

    await AddStudentDTO.validateAsync(req.body)

    if (req.body.admin_secret !== process.env.ADMIN_SECRET) {
        return res.status(402).json({
            message: "Admin access denied"
    })
    }

    const { email, password, sapid } = req.body

    const student = await Student.findOne({ email: email })

    if (student) {

        const validation = await ValidatePassword(password, student.password, student.salt)

        if (validation) {

            student.sapid = sapid

            const result = await student.save()

            if (result) {
                return res.status(200).json(student)
            }
        }
    }

    return res.status(400).json({
        message: "Something wrong with UpdateStudent"
    })
}

module.exports.DeleteStudent = async (req, res, next) => {

    await DeleteStudentDTO.validateAsync(req.body)

    if (req.body.admin_secret !== process.env.ADMIN_SECRET) {
        return res.status(402).json({
            message: "Admin access denied"
    })
    }

    const { email, password } = req.body

    const student = await Student.findOne({ email: email })

    if (student) {

        const validation = await ValidatePassword(password, student.password, student.salt)

        if (validation) {

            const result = await Student.findByIdAndDelete(student._id)

            if (result) {
                return res.status(200).json(student)
            }
        }
    }

    return res.status(400).json({
        message: "Something wrong with DeleteStudent"
    })
}

module.exports.StudentLogin = async (req, res, next) => {

    await StudentLoginDTO.validateAsync(req.body)

    const { email, password, role } = req.body;

    const student = await Student.findOne({ email: email })

    if (student) {
        const validation = await ValidatePassword(password, student.password, student.salt)

        if (validation) {

            const signature = await GenerateSignature({
                _id: student._id,
                role:student.role,
                email: student.email,
                sapid: student.sapid
            })

            return res.status(201).json({
                signature: signature,
                sapid: student.sapid,
                email: student.email
            })
        }
    }
    return res.status(400).json({ message: "Error with StudentLogin" })
}