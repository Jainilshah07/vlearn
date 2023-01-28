const express = require('express');

const { GetAssignment, UpdateAssignment, DeleteAssignment, AddAssignment, GetAllAssignments } = require('../controllers');
const { Authenticate, AssignmentAuthorize } = require('../middlewares');

const router = express.Router();

router.route('/student/:studentId').get(GetAssignment)
router.route('/all').get(GetAllAssignments)

router.use(Authenticate)
router.use(AssignmentAuthorize)
router.route('/teacher/:teacherId').post(AddAssignment).delete(DeleteAssignment).put(UpdateAssignment)

module.exports.AssignmentRouter = router