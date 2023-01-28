const express = require('express');

const { GetNote, UpdateNote, DeleteNote, AddNote, GetAllNotes } = require('../controllers');
const { Authenticate, NoteAuthorize } = require('../middlewares');

const router = express.Router();

router.use(Authenticate)
router.use(NoteAuthorize)
router.route('/').get(GetNote)
router.route('/all').get(GetAllNotes)
router.route('/').post(AddNote).delete(DeleteNote).put(UpdateNote)

module.exports.NoteRouter = router