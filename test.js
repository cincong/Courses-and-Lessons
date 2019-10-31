async function createLesson (request, h){
  const id = uuid4()
  const { courseId } = request.params
  const course = request.server.app.Db.courses.find((course) => c)
}