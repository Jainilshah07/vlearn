const { Teacher } = require('../models/Teacher')
const { Note } = require('../models/Note')
const { AddTeacherDTO , TeacherLoginDTO, DeleteTeacherDTO } = require('../dto')
const { GeneratePassword, GenerateSalt, ValidatePassword, GenerateSignature } = require('../utility')

module.exports.AddTeacher = async (req, res, next) => {

    await AddTeacherDTO.validateAsync(req.body)

    if (req.body.admin_secret !== process.env.ADMIN_SECRET) {
        return res.status(402).json({
            message: "Admin access denied"
    })
    }

    const { email, password, teacherId, subject, phone, name, div } = req.body

    const salt = await GenerateSalt();
    const encryptedPassword = await GeneratePassword(password, salt)

    if (teacherId) {
        const teacher = await Teacher.create({
            email: email,
            password: encryptedPassword,
            salt: salt,
            teacherId: teacherId,
            subject: subject,
            phone: phone,
            name:name,
            div: div
        })

        if (teacher) {
            return res.status(200).json(teacher)
        }
    }

    return res.status(400).json({
        message: "Something wrong with AddTeacher"
    })
}
// module.exports.TeacherAddNote = async (req, res, next) => {
//     await AddNoteDTO.validateAsync(req.body)
//     console.log(req.body)
//     const { title, description, tag } = req.body

//     const note = await Note.create({
//         teacher: req.teacher._id,
//         description: description,
//         tag: tag,
//         title: title
//     })

//     if (note) {
//         Teacher.findOneAndUpdate({_id: req.teacher._id}, {$push: {notes: note._id}}, {new: true}, (err, teacher) => {
//             if(err) return res.status(400).json({ message: "Error updating teacher's note collection" });
//             return res.status(200).json(note);
//         });
//     }

//     return res.status(400).json({
//         message: "Something wrong with TeacherAddNote"
//     })
// }

module.exports.GetTeacher = async (req, res, next) => {

    const { _id } = req.query

    if (_id) {

        const teacher = await Teacher.findById(_id).populate("notesArray")
        console.log(teacher)
        if (teacher) {
            return res.status(200).json(teacher)
        }
    }

    return res.status(400).json({
        message: "Something wrong with GetTeacher"
    })
}

module.exports.GetAllTeachers = async (req, res, next) => {
    
    const teachers = await Teacher.find({})

    return res.status(200).json(teachers)
}


module.exports.UpdateTeacher = async (req, res, next) => {

    await AddTeacherDTO.validateAsync(req.body)

    if (req.body.admin_secret !== process.env.ADMIN_SECRET) {
        return res.status(402).json({
            message: "Admin access denied"
    })
    }

    const { email, password, teacherId } = req.body

    const teacher = await Teacher.findOne({ email: email })

    if (teacher) {

        const validation = await ValidatePassword(password, teacher.password, teacher.salt)

        if (validation) {

            teacher.teacherId = teacherId

            const result = await teacher.save()

            if (result) {
                return res.status(200).json(teacher)
            }
        }
    }

    return res.status(400).json({
        message: "Something wrong with UpdateTeacher"
    })
}

module.exports.DeleteTeacher = async (req, res, next) => {

    await DeleteTeacherDTO.validateAsync(req.body)

    if (req.body.admin_secret !== process.env.ADMIN_SECRET) {
        return res.status(402).json({
            message: "Admin access denied"
    })
    }

    const { email, password } = req.body

    const teacher = await Teacher.findOne({ email: email })

    if (teacher) {

        const validation = await ValidatePassword(password, teacher.password, teacher.salt)

        if (validation) {

            const result = await Teacher.findByIdAndDelete(teacher._id)

            if (result) {
                return res.status(200).json(teacher)
            }
        }
    }

    return res.status(400).json({
        message: "Something wrong with DeleteTeacher"
    })
}

module.exports.TeacherLogin = async (req, res, next) => {

    await TeacherLoginDTO.validateAsync(req.body)

    const { email, password } = req.body;

    const teacher = await Teacher.findOne({ email: email })

    if (teacher) {
        const validation = await ValidatePassword(password, teacher.password, teacher.salt)

        if (validation) {

            const signature = await GenerateSignature({
                _id: teacher._id,
                email: teacher.email,
                teacherId: teacher.teacherId
            })

            return res.status(201).json({
                signature: signature,
                teacherId: teacher.teacherId,
                email: teacher.email
            })
        }
    }
    return res.status(400).json({ message: "Error with TeacherLogin" })
}


