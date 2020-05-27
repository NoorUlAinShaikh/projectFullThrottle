import { FETCH_USER_S } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_S:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
