const uuid4 = require('uuid/v4')
const Boom = require('@hapi/boom')

async function createLesson (request, h){
 const id = uuid4()
 const { courseId } = request.params
 const course = request.server.app.Db.courses.find((course) => course.id === courseId)
 if (!course){
   throw Boom.notFound('courseId does not belong to any register in Courses')
 }
 const payload = Object.assign(request.payload, { id })
 request.server.app.Db.lessons.push(payload)
 return payload
 
}

async function listLessons (request, h){
  return request.server.app.Db.lessons
}

module.exports = {
 createLesson,
 listLessons
}