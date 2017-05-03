var path = require("path");

module.exports = {
  entry: {
    app_index: './app/app_index.jsx',
    app_quiz: './app/app_quiz.jsx'
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
      HomeworkListGroups: 'app/components/HomeworkListGroups.jsx',
      Index: 'app/components/Index.jsx',
      IndexMain: 'app/components/IndexMain.jsx',
      LeftListGroups: 'app/components/LeftListGroups.jsx',
      PlanListGroups: 'app/components/PlanListGroups.jsx',
      Quiz: 'app/components/Quiz.jsx',
      QuizCreateListGroups: 'app/components/QuizCreateListGroups.jsx',
      QuizListGroups: 'app/components/QuizListGroups.jsx',
      QuizMain: 'app/components/QuizMain.jsx',
      SigningListGroups: 'app/components/SigningListGroups.jsx',
      StudentCard: 'app/components/StudentCard.jsx'
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
