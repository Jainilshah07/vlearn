const express = require('express');

const {  AddMarks, GetFailureCn } = require('../controllers');
// const { Authenticate, AssignmentAuthorize } = require('../middlewares');

const router = express.Router();

// router.use(Authenticate)
// router.use(AssignmentAuthorize)
router.route('/:sapid').post(AddMarks)
router.route('/getcnfailure').get(GetFailureCn)

module.exports.MarksRouter = router