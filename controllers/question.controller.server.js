const questionService
    = require("../services/questions.service.server")

module.exports = (app) => {
    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['qid']
        const questions
            = questionService.findQuestionsForQuiz(quizId)
        res.json(questions)
    }

    const findAllQuestions = (req, res) =>
        res.send(questionService.findAllQuestions())

    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz)
    app.get("/api/questions", findAllQuestions)
}
