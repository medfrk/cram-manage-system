var path = require("path");

module.exports = {
  entry: {
    app_create_quiz: './app/app_create_quiz.jsx',
    app_finish_plan: './app/app_finish_plan.jsx',
    app_finish_quiz: './app/app_finish_quiz.jsx',
    app_index: './app/app_index.jsx',
    app_left: './app/app_left.jsx',
    app_homework: './app/app_homework.jsx',
    app_quiz_create: './app/app_quiz_create.jsx',
    app_quiz: './app/app_quiz.jsx',
    app_plan: './app/app_plan.jsx',
    app_plan_for_today: './app/app_plan_for_today.jsx',
    app_plan_create: './app/app_plan_create.jsx',
    app_plan_search: './app/app_plan_search.jsx',
    app_quiz_list: './app/app_quiz_list.jsx',
    app_signing: './app/app_signing.jsx',
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
      FinishPlan: 'app/components/plan/FinishPlan.jsx',
      FinishPlanCard: 'app/components/plan/FinishPlanCard.jsx',
      FinishPlanMain: 'app/components/plan/FinishPlanMain.jsx',
      Plan: 'app/components/plan/Plan.jsx',
      PlanMain: 'app/components/plan/PlanMain.jsx',
      PlanCreate: 'app/components/plan/PlanCreate.jsx',
      PlanCreateMain: 'app/components/plan/PlanCreateMain.jsx',
      PlanSearch: 'app/components/plan/PlanSearch.jsx',
      PlanSearchMain: 'app/components/plan/PlanSearchMain.jsx',
      PlanSearchTableRow: 'app/components/plan/PlanSearchTableRow.jsx',
      PlanTableRow: 'app/components/plan/PlanTableRow.jsx',
      PlanForToday: 'app/components/plan/PlanForToday.jsx',
      PlanForTodayMain: 'app/components/plan/PlanForTodayMain.jsx',
      PlanTableRowForToday: 'app/components/plan/PlanTableRowForToday.jsx',
      HomeworkListGroups: 'app/components/list_group/HomeworkListGroups.jsx',
      LeftListGroups: 'app/components/list_group/LeftListGroups.jsx',
      PlanListGroups: 'app/components/list_group/PlanListGroups.jsx',
      QuizCreateListGroups: 'app/components/list_group/QuizCreateListGroups.jsx',
      QuizListGroups: 'app/components/list_group/QuizListGroups.jsx',
      SigningListGroups: 'app/components/list_group/SigningListGroups.jsx',
      Signing: 'app/components/signing/Signing.jsx',
      SigningMain: 'app/components/signing/SigningMain.jsx',
      SigningTableRow: 'app/components/signing/SigningTableRow.jsx',
      StudentCard: 'app/components/StudentCard.jsx',
      CreateQuiz: 'app/components/quiz_create/CreateQuiz.jsx',
      CreateQuizMain: 'app/components/quiz_create/CreateQuizMain.jsx',
      QuizCreate: 'app/components/quiz_create/QuizCreate.jsx',
      QuizCreateMain: 'app/components/quiz_create/QuizCreateMain.jsx',
      QuizList: 'app/components/quiz_create/QuizList.jsx',
      QuizListMain: 'app/components/quiz_create/QuizListMain.jsx',
      QuizCard: 'app/components/quiz_create/QuizCard.jsx',
      QuizCreateTableRow: 'app/components/quiz_create/QuizCreateTableRow.jsx',
      Homework: 'app/components/homework/Homework.jsx',
      HomeworkMain:'app/components/homework/HomeworkMain.jsx',
      HomeworkTableRow: 'app/components/homework/HomeworkTableRow.jsx',
      FinishQuiz: 'app/components/quiz/FinishQuiz.jsx',
      FinishQuizCard: 'app/components/quiz/FinishQuizCard.jsx',
      FinishQuizMain: 'app/components/quiz/FinishQuizMain.jsx',
      Left: 'app/components/left/Left.jsx',
      LeftMain: 'app/components/left/LeftMain.jsx',
      LeftTableRow: 'app/components/left/LeftTableRow.jsx',
      Quiz: 'app/components/quiz/Quiz.jsx',
      QuizMain: 'app/components/quiz/QuizMain.jsx',
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
