const uuid4 = require('uuid/v4')

async function listCourses (request, h){
  return request.server.app.Db.courses
}

async function createCourse (request, h){
  const id = uuid4()
  const payload = Object.assign(request.payload, { id })
  request.server.app.Db.courses.push(payload)
  return h.response(payload).code(201)
}

module.exports = {
  listCourses,
  createCourse
}