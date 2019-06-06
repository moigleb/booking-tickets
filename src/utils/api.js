import { call } from "redux-saga/effects";
import api from "../utils/axios";

export function* get(endpoint, options) {
  try {
    return yield call(api.get, endpoint, options || {});
  } catch (error) {
    console.log(error)
  }
}
