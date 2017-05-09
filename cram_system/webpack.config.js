var path = require("path");

module.exports = {
  entry: {
    app_create_quiz: './app/app_create_quiz.jsx',
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
    app_homework_not_done: './app/app_homework_not_done.jsx'
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
      CreateQuiz: 'app/components/CreateQuiz.jsx',
      CreateQuizMain: 'app/components/CreateQuizMain.jsx',
      Index: 'app/components/Index.jsx',
      IndexMain: 'app/components/IndexMain.jsx',
      HomeworkListGroups: 'app/components/list_group/HomeworkListGroups.jsx',
      LeftListGroups: 'app/components/list_group/LeftListGroups.jsx',
      PlanListGroups: 'app/components/list_group/PlanListGroups.jsx',
      QuizCreateListGroups: 'app/components/list_group/QuizCreateListGroups.jsx',
      QuizListGroups: 'app/components/list_group/QuizListGroups.jsx',
      SigningListGroups: 'app/components/list_group/SigningListGroups.jsx',
      Quiz: 'app/components/Quiz.jsx',
      QuizMain: 'app/components/QuizMain.jsx',
      QuizCard: 'app/components/QuizCard.jsx',
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
      HomeworkTableRow: 'app/components/homework/HomeworkTableRow.jsx'
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
