const handlers = require('../handlers/courses')
const courseSchema = require('../schemas/courseSchema')
const Boom = require('@hapi/boom')

const courses = [
  {
    method: 'GET',
    path: '/api/courses',
    handler: handlers.listCourses
  },
  {
    method: 'POST',
    path: '/api/courses',
    handler: handlers.createCourse, //Validacion
    options: {
      validate:{
        payload: courseSchema.create,
        failAction: (request, h, error) => {
          throw Boom.boomify(new Error('Esto es un error'), { statusCode: 400 })
        }
      }
    }
  }
]

module.exports = courses