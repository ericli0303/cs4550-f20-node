const questionService
    = require("../services/questions.service.server")

module.exports = (app) => {
    const findQuestionsForQuiz = (req, res) =>
        questionService.findQuestionsForQuiz(req.params['qid'])
            .then(questions => res.send(questions))

    const findAllQuestions = (req, res) =>
        questionService.findAllQuestions()
            .then(questions => res.send(questions))

    const findQuestionById = (req, res) =>
        questionService.findQuestionById(req.params['qid'])
            .then(question => res.send(question))

    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz)
    app.get("/api/questions", findAllQuestions)
    app.get("/api/questions/:qid", findQuestionById)
}
