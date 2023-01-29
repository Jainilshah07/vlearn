const { Student } = require('../models/Student')
const { Marks } = require('../models/Marks')
const { AddMarksDTO } = require('../dto')
const { array } = require('joi')

module.exports.AddMarks = async (req, res, next) => {

    await AddMarksDTO.validateAsync(req.body)

    const { sapid , cn1, cn2 ,daa1, daa2} = req.body
    const student = await Student.findById(req.params.sapid);
    const marks = await Marks.create({
        student: student._id,
        cn1: cn1,
        cn2: cn2,
        daa1:daa1,
        daa2:daa2
    })

    if (marks) {
        return res.status(200).json(marks)
    }

    return res.status(400).json({
        message: "Something wrong with AddMarks"
    })
}

module.exports.GetFailureCn = async (req, res, next) => {

    // await GetFailureCnDTO.validateAsync(req.body)
    let array = [];
    const marksOfStudent = await Marks.find({});
    marksOfStudent.forEach(pushmarks)
    function pushmarks(marks){
        if(marks.cn1 < 11 || marks.cn2 < 11){
            array.push(marks.student)
        }
        console.log(array);
    }
    return res.status(200).json(array)

    // if (marks) {
    //     return res.status(200).json(marks)
    // }

    // return res.status(400).json({
    //     message: "Something wrong with AddMarks"
    // })
}

