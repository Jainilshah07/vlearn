const express = require('express')

const { GetTeacher, UpdateTeacher, DeleteTeacher, AddTeacher, TeacherLogin, GetAllTeachers } = require('../controllers')

const router = express.Router();

router.route('/').get(GetTeacher).post(AddTeacher).delete(DeleteTeacher).put(UpdateTeacher)
router.route('/login').post(TeacherLogin)
router.route('/all').get(GetAllTeachers)
// router.route('/notes').post(TeacherAddNote)

module.exports.TeacherRouter = router