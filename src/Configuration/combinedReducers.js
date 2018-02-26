import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import reducer, {
  QuestionListReducer,
  AddEditQuestionReducer,
  questionListDataReducer,
  labelReducer
} from "../reducers";

export default combineReducers({
  reducer,
  router: routerReducer,
  labels: labelReducer,
  questionListData: questionListDataReducer,
  questionListPage: QuestionListReducer,
  addQuestionsPage: AddEditQuestionReducer
});
