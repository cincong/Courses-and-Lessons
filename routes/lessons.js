const Joi = require('@hapi/joi')
const Boom = require('@hapi/boom')
const handlers = require('../handlers/lessons')
const schema = require('../schemas/lessonSchema')
const lessons = [
  {
    method: 'GET',
    path: '/api/courses/{courseId}/lessons',
    handler: handlers.listLessons
  },
  {
    method: 'POST',
    path: '/api/courses/{coursesId}/lessons',
    handler: handlers.createLesson,
    options: {
      validate:{
        payload: schema.createPayload,
        params: schema.courseIdParam,
        query: {
          filter: Joi.array().items(Joi.string().valid('JS', 'estudia')).single()
        },
        failAction: (request, h, error) => {
          throw Boom.boomify(new Error('Esto es un error'), { statusCode: 400 })
        }
      }
    }
  }
]

module.exports = lessons