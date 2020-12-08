//let questions = require('./questions.json')
//
//const findQuestionsForQuiz = (quizId) =>
//    questions.filter(question => question.quizId === quizId)
//
//const findAllQuestions = () => questions
//
//module.exports = {
//    findQuestionsForQuiz, findAllQuestions
//}
const questionsDao = require('../daos/questions.dao.server')
const findAllQuestions = () => questionsDao.findAllQuestions()
const findQuestionById = (qid) => questionsDao.findQuestionById(qid)
const findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }