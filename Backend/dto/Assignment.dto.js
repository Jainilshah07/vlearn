const Joi = require('joi')

module.exports.AddAssignmentDTO = Joi.object({

    // teacher: Joi.string().required(),

    student: Joi.string().required(),

    div: Joi.string().required(),

    subject: Joi.string().required(),

    title: Joi.string().required(),
    
    description: Joi.string().required(),

    deadline: Joi.string(),

    videoUrl: Joi.string(),

    referenceLink: Joi.string(),

    submissionLink: Joi.string(),

    images: Joi.string()
})

module.exports.UpdateAssignmentDTO = Joi.object({

    students: Joi.array().items(Joi.string()).required(),

    div: Joi.string().required(),

    subject: Joi.string().required(),

    title: Joi.string().required(),
    
    description: Joi.string().required(),

    deadline: Joi.string().required(),

    videoUrl: Joi.string().required(),

    referenceLink: Joi.string().required(),

    submissionLink: Joi.string().required(),

    images: Joi.string().required(),

    _id: Joi.string().required()
})

module.exports.DeleteAssignmentDTO = Joi.object({
    _id: Joi.string().required()
})