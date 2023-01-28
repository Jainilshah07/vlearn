const Joi = require('joi')

module.exports.AddNoteDTO = Joi.object({
    
    title: Joi.string().required(),

    description: Joi.string().required(),

    tag: Joi.string().required(),
})

module.exports.UpdateNoteDTO = Joi.object({

    title: Joi.array().items(Joi.string()).required(),

    description: Joi.string().required(),

    tag: Joi.string().required(),

    _id: Joi.string().required()
})

module.exports.DeleteNoteDTO = Joi.object({
    _id: Joi.string().required()
})
