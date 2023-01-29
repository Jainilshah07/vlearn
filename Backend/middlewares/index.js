const { Authenticate } = require('./CommonAuth')
const { AssignmentAuthorize, NoteAuthorize, MarksAuthorize, GuideAuthorize } = require('./RoleAuth')

module.exports.Authenticate = Authenticate
module.exports.AssignmentAuthorize = AssignmentAuthorize
module.exports.NoteAuthorize = NoteAuthorize
module.exports.MarksAuthorize = MarksAuthorize
// module.exports.ProjectAuthorize = ProjectAuthorize
// module.exports.LectureAuthorize = LectureAuthorize
// module.exports.GuideAuthorize = GuideAuthorize
