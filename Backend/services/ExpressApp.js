const express = require('express')
const cors = require('cors')

const { StudentRouter, TeacherRouter, AssignmentRouter, NoteRouter, FileRouter } = require('../routes')

module.exports.App = async (app) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }));
    app.use(cors())

    app.get('/', async (req, res, next) => {
        return res.status(200).send("<h1>Demo Backend Index</h1>")
    })

    app.use('/api/v1/student', StudentRouter)
    app.use('/api/v1/teacher', TeacherRouter)
    app.use('/api/v1/assignment', AssignmentRouter)
    app.use('/api/v1/note', NoteRouter)

    app.use('*', async (req, res, next) => {
        return res.status(404).send('<h1>404 Not Found</h1>')
    })

    return app;
}