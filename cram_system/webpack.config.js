var path = require("path");

module.exports = {
  entry: {
    app_create_quiz: './app/app_create_quiz.jsx',
    app_finish_quiz: './app/app_finish_quiz.jsx',
    app_index: './app/app_index.jsx',
    app_quiz: './app/app_quiz.jsx',
    app_signing: './app/app_signing.jsx',
    app_signing_absent: './app/app_signing_absent.jsx',
    app_signing_actual: './app/app_signing_actual.jsx',
    app_signing_leave: './app/app_signing_leave.jsx',
    app_quiz_create_expect: './app/app_quiz_create_expect.jsx',
    app_quiz_create_done: './app/app_quiz_create_done.jsx',
    app_quiz_create_not_done: './app/app_quiz_create_not_done.jsx',
    app_homework_done: './app/app_homework_done.jsx',
    app_homework_expect: './app/app_homework_expect.jsx',
    app_homework_not_done: './app/app_homework_not_done.jsx',
    app_quiz_done: './app/app_quiz_done.jsx',
    app_quiz_expect: './app/app_quiz_expect.jsx',
    app_quiz_not_done: './app/app_quiz_not_done.jsx',
  },
  output: {
    path: path.join(__dirname, "/static/js/bundle"),
    filename: "[name].bundle.js",
  },
  resolve: {
    root: __dirname,
    alias: {
      CramFooter: 'app/components/CramFooter.jsx',
      CramHeader: 'app/components/CramHeader.jsx',
      Index: 'app/components/Index.jsx',
      IndexMain: 'app/components/IndexMain.jsx',
      HomeworkListGroups: 'app/components/list_group/HomeworkListGroups.jsx',
      LeftListGroups: 'app/components/list_group/LeftListGroups.jsx',
      PlanListGroups: 'app/components/list_group/PlanListGroups.jsx',
      QuizCreateListGroups: 'app/components/list_group/QuizCreateListGroups.jsx',
      QuizListGroups: 'app/components/list_group/QuizListGroups.jsx',
      SigningListGroups: 'app/components/list_group/SigningListGroups.jsx',
      Signing: 'app/components/signing/Signing.jsx',
      SigningAbsentMain: 'app/components/signing/SigningAbsentMain.jsx',
      SigningActual: 'app/components/signing/SigningActual.jsx',
      SigningActualMain: 'app/components/signing/SigningActualMain.jsx',
      SigningLeave: 'app/components/signing/SigningLeave.jsx',
      SigningLeaveMain: 'app/components/signing/SigningLeaveMain.jsx',
      SigningMain: 'app/components/signing/SigningMain.jsx',
      SigningTableRow: 'app/components/signing/SigningTableRow.jsx',
      SigningAbsent: 'app/components/signing/SigningAbsent.jsx',
      StudentCard: 'app/components/StudentCard.jsx',
      CreateQuiz: 'app/components/quiz_create/CreateQuiz.jsx',
      CreateQuizMain: 'app/components/quiz_create/CreateQuizMain.jsx',
      Quiz: 'app/components/quiz_create/Quiz.jsx',
      QuizMain: 'app/components/quiz_create/QuizMain.jsx',
      QuizCard: 'app/components/quiz_create/QuizCard.jsx',
      QuizCreateExpect: 'app/components/quiz_create/QuizCreateExpect.jsx',
      QuizCreateExpectMain: 'app/components/quiz_create/QuizCreateExpectMain.jsx',
      QuizCreateDone: 'app/components/quiz_create/QuizCreateDone.jsx',
      QuizCreateDoneMain: 'app/components/quiz_create/QuizCreateDoneMain.jsx',
      QuizCreateNotDone: 'app/components/quiz_create/QuizCreateNotDone.jsx',
      QuizCreateNotDoneMain: 'app/components/quiz_create/QuizCreateNotDoneMain.jsx',
      QuizCreateTableRow: 'app/components/quiz_create/QuizCreateTableRow.jsx',
      HomeworkDone: 'app/components/homework/HomeworkDone.jsx',
      HomeworkDoneMain: 'app/components/homework/HomeworkDoneMain.jsx',
      HomeworkExpect: 'app/components/homework/HomeworkExpect.jsx',
      HomeworkExpectMain: 'app/components/homework/HomeworkExpectMain.jsx',
      HomeworkNotDone: 'app/components/homework/HomeworkNotDone.jsx',
      HomeworkNotDoneMain: 'app/components/homework/HomeworkNotDoneMain.jsx',
      HomeworkTableRow: 'app/components/homework/HomeworkTableRow.jsx',
      FinishQuiz: 'app/components/quiz/FinishQuiz.jsx',
      FinishQuizCard: 'app/components/quiz/FinishQuizCard.jsx',
      FinishQuizMain: 'app/components/quiz/FinishQuizMain.jsx',
      QuizDone: 'app/components/quiz/QuizDone.jsx',
      QuizDoneMain: 'app/components/quiz/QuizDoneMain.jsx',
      QuizExpect: 'app/components/quiz/QuizExpect.jsx',
      QuizExpectMain: 'app/components/quiz/QuizExpectMain.jsx',
      QuizNotDone: 'app/components/quiz/QuizNotDone.jsx',
      QuizNotDoneMain: 'app/components/quiz/QuizNotDoneMain.jsx',
      QuizTableRow: 'app/components/quiz/QuizTableRow.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
