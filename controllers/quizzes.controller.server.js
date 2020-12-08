const quizService
    = require('../services/quiz.service.server')

module.exports = (app) => {

    const findAllQuizzes = (req, res) =>
        quizService.findAllQuizzes()
            .then(quizzes => res.send(quizzes))

    const findQuizById = (req, res) =>
        quizService.findQuizById(req.params['qid'])
            .then(quiz => res.send(quiz))

    // const deleteQuiz = (req, res) =>
    //     res.send(quizService.deleteQuiz(req.params['qid']))

    // const createQuiz = (req, res) =>
    //     res.send(quizzesService.createQuiz())

    // const updateQuiz = (req, res) =>
    //     res.send(quizzesService.updateQuiz(req.params['qid'], req.body))


    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:qid', findQuizById)
    // app.delete("/api/quizzes/:qid", deleteQuiz)
    // app.post("/api/quizzes", createQuiz)
    // app.put("/api/quizzes/:qid", updateQuiz)
}
