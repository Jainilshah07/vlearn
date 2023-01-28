const Joi = require('joi')

module.exports.AddStudentDTO = Joi.object({

    email: Joi.string().email().required(),

    password: Joi.string().required(),

    sapid: Joi.string().required(),

    phone: Joi.string(),

    name: Joi.string(),

    div: Joi.string(),

    admin_secret: Joi.string().required()
})

module.exports.DeleteStudentDTO = Joi.object({

    email: Joi.string().email().required(),

    password: Joi.string().required(),

    admin_secret: Joi.string().required()
})

module.exports.StudentLoginDTO = Joi.object({

    email: Joi.string().email().required(),

    role: Joi.string().required(),

    password: Joi.string().required(),
})