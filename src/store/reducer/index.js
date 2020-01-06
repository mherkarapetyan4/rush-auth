import data from "./data";
import {

} from "../actions/actionType";

const initialState = data;

export default function reducer(state = initialState, action) {
  switch (action.type) {
     case "":
       return ;
    default:
      return state;
  }
}
