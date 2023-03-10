const { GetAssignment, AddAssignment, UpdateAssignment, DeleteAssignment, GetAllAssignments } = require('./Assignment')
const { GetNote, AddNote, UpdateNote, DeleteNote, GetAllNotes } = require('./Note')
const { AddMarks,GetFailureCn } = require('./Marks')
const { GetStudent, AddStudent, UpdateStudent, DeleteStudent, StudentLogin, GetAllStudents } = require('./Student')
const { GetTeacher, AddTeacher, UpdateTeacher, DeleteTeacher, TeacherLogin, GetAllTeachers } = require('./Teacher')

module.exports.GetAssignment = GetAssignment
module.exports.AddAssignment = AddAssignment
module.exports.UpdateAssignment = UpdateAssignment
module.exports.DeleteAssignment = DeleteAssignment
module.exports.GetAllAssignments = GetAllAssignments

module.exports.GetNote = GetNote
module.exports.AddNote = AddNote
module.exports.UpdateNote = UpdateNote
module.exports.DeleteNote = DeleteNote
module.exports.GetAllNotes = GetAllNotes

module.exports.GetStudent = GetStudent
module.exports.AddStudent = AddStudent
module.exports.UpdateStudent = UpdateStudent
module.exports.DeleteStudent = DeleteStudent
module.exports.GetAllStudents = GetAllStudents
module.exports.StudentLogin = StudentLogin

module.exports.GetTeacher = GetTeacher
module.exports.AddTeacher = AddTeacher
module.exports.UpdateTeacher = UpdateTeacher
module.exports.DeleteTeacher = DeleteTeacher
module.exports.GetAllTeachers = GetAllTeachers
module.exports.TeacherLogin = TeacherLogin


module.exports.AddMarks = AddMarks
module.exports.GetFailureCn = GetFailureCn
// module.exports.AddImage = AddImage
// module.exports.GetAllImageNames = GetAllImageNames
// module.exports.FilteredImageNames = FilteredImageNames
// module.exports.GetProject = GetProject
// module.exports.AddProject = AddProject
// module.exports.UpdateProject = UpdateProject
// module.exports.DeleteProject = DeleteProject
// module.exports.GetAllProjects = GetAllProjects
// module.exports.GetAllFileNames = GetAllFileNames
// module.exports.AddFile = AddFile
// module.exports.FilteredFileNames = FilteredFileNames
// module.exports.GetLecture = GetLecture
// module.exports.AddLecture = AddLecture
// module.exports.UpdateLecture = UpdateLecture
// module.exports.DeleteLecture = DeleteLecture
// module.exports.GetAllLectures = GetAllLectures
// module.exports.GetGuide = GetGuide
// module.exports.AddGuide = AddGuide
// module.exports.UpdateGuide = UpdateGuide
// module.exports.DeleteGuide = DeleteGuide
// module.exports.GetAllGuides = GetAllGuides
