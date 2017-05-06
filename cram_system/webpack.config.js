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
    app_quiz_create_expect: './app/app_quiz_create_expect.jsx'
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
      HomeworkListGroups: 'app/components/HomeworkListGroups.jsx',
      Index: 'app/components/Index.jsx',
      IndexMain: 'app/components/IndexMain.jsx',
      LeftListGroups: 'app/components/LeftListGroups.jsx',
      PlanListGroups: 'app/components/PlanListGroups.jsx',
      Quiz: 'app/components/Quiz.jsx',
      QuizCreateListGroups: 'app/components/QuizCreateListGroups.jsx',
      QuizListGroups: 'app/components/QuizListGroups.jsx',
      QuizMain: 'app/components/QuizMain.jsx',
      Signing: 'app/components/Signing.jsx',
      SigningAbsentMain: 'app/components/SigningAbsentMain.jsx',
      SigningActual: 'app/components/SigningActual.jsx',
      SigningActualMain: 'app/components/SigningActualMain.jsx',
      SigningLeave: 'app/components/SigningLeave.jsx',
      SigningLeaveMain: 'app/components/SigningLeaveMain.jsx',
      SigningListGroups: 'app/components/SigningListGroups.jsx',
      SigningMain: 'app/components/SigningMain.jsx',
      SigningTableRow: 'app/components/SigningTableRow.jsx',
      SigningAbsent: 'app/components/SigningAbsent.jsx',
      StudentCard: 'app/components/StudentCard.jsx',
      QuizCreateExpect: 'app/components/quiz_create/QuizCreateExpect.jsx',
      QuizCreateExpectMain: 'app/components/quiz_create/QuizCreateExpectMain.jsx',
      QuizCreateTableRow: 'app/components/quiz_create/QuizCreateTableRow.jsx'
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
