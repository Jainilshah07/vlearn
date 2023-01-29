const Joi = require('joi')

module.exports.AddMarksDTO = Joi.object({

    // student: Joi.string().required(),

    cn1: Joi.number().required(),

    cn2: Joi.number().required(),

    daa1: Joi.number().required(),

    daa2: Joi.number().required(),

})