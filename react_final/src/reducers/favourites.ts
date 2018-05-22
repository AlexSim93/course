import { GET_FAVOURITES, TOGGLE_FAVOURITE } from "../actions";
import { get, some } from "lodash";

const favourites = (state: any = [], action: any) => {
  switch (action.type) {
    case GET_FAVOURITES:
      return get(action, "payload", state);
    case TOGGLE_FAVOURITE:
      if (some(state, ["id", action.payload.id])) {
        return [
          ...state.filter((element: any) => element.id !== action.payload.id)
        ];
      }
      return [...state, action.payload];
    default:
      return state;
  }
};

export default favourites;
