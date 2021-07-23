import { SEND_MESSAGE, SEND_EDIT_MESSAGE } from "../constants/action-types";
import  _ from 'lodash';

import { getMessages } from "../static-data";
export default function messages(state = getMessages(10), action) {
  switch(action.type){
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = +_.keys(allUserMsgs).pop() + 1;
      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };
    case SEND_EDIT_MESSAGE:
      
      break;
    default:
      return state;
  }
}
