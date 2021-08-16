import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../_actions/types';

export default function (state = [], action) {

  let payload = action.payload;
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        payload
      ]

    // case REMOVE_FROM_CART:
    //   // return { ...state, removeFromCart: action.payload }
    //   let filteredState = state.filter(element => element.id !== payload.id);
    //   return { ...state, filteredState };
    default:
      return state;
  }
}