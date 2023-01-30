const Joi = require('joi')

module.exports.AddTeacherDTO = Joi.object({

    email: Joi.string().email().required(),

    password: Joi.string().required(),

    teacherId: Joi.string().required(),

    phone: Joi.string(),
    
    name: Joi.string(),

    subject: Joi.string(),

    div: Joi.string(),

    admin_secret: Joi.string().required()
})

module.exports.TeacherAddNote = Joi.object({

    user: Joi.string().required(),

    title: Joi.string().required(),
    
    description: Joi.string().required(),

    tag: Joi.string()
})

module.exports.DeleteTeacherDTO = Joi.object({

    email: Joi.string().email().required(),

    password: Joi.string().required(),

    admin_secret: Joi.string().required()
})

module.exports.TeacherLoginDTO = Joi.object({

    email: Joi.string().email().required(),

    role: Joi.string().required(),

    password: Joi.string().required(),
})


