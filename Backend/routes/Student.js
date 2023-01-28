const express = require('express')

const { GetStudent, UpdateStudent, DeleteStudent, AddStudent, StudentLogin, GetAllStudents } = require('../controllers')

const router = express.Router();

router.route('/').get(GetStudent).post(AddStudent).delete(DeleteStudent).put(UpdateStudent)
router.route('/login').post(StudentLogin)
router.route('/all').get(GetAllStudents)

module.exports.StudentRouter = router