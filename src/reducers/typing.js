import { SET_TYPING_VALUE,SEND_MESSAGE,START_EDIT_MESSAGE } from "../constants/action-types";

export default function typing(state = "", action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    case SEND_MESSAGE:
      return "";
    case START_EDIT_MESSAGE:
      console.log(action, ' action');
      return action.payload.text;
    default:
      return state;
  }
}
