import {
  QUESTIONS_LOCALSTORAGE_KEY,
  LABELS_LOCALSTORAGE_KEY
} from "../constants";
import { initialLabelData, initialQuestionData } from "./initialState";

export default () => {
  if (typeof window === "undefined") return false;
  if (!window.localStorage.getItem(QUESTIONS_LOCALSTORAGE_KEY))
    window.localStorage.setItem(
      QUESTIONS_LOCALSTORAGE_KEY,
      JSON.stringify(initialQuestionData)
    );
  if (!window.localStorage.getItem(LABELS_LOCALSTORAGE_KEY))
    window.localStorage.setItem(
      LABELS_LOCALSTORAGE_KEY,
      JSON.stringify(initialLabelData)
    );
  return true;
};
