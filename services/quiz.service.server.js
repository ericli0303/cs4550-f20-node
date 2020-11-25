let quizzes = require('./quizzes.json')

const findAllQuizzes = () => quizzes

const findQuizById = (quizId) =>
    quizzes.find(quiz => quiz._id === quizId)

// const deleteQuiz = (qid) =>
//     quizzes = quizzes.filter(quiz => quiz._id !== qid)

// const createQuiz = () => {
//     const newQuiz = { _id: (new Date()).getTime() + "", titel: "New Quiz" }
//     quizzes.push(newQuiz)
//     return newQuiz
// }

// const updateQuiz = (qid, newQuiz) => {
//     quizzes.map(quiz => quiz._id === qiz ? newQuiz : quiz)
//     return newQuiz
// }

module.exports = {
    findAllQuizzes,
    findQuizById
    // deleteQuiz,
    // createQuiz,
    // updateQuiz
}
