import {INIT_ALL_DISHES_SUCCESS} from "./actions";

const initialState = {
  dishes: [],
  orders: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case INIT_ALL_DISHES_SUCCESS:
      const dishes = Object.keys(action.dishes).map(key => ({...action.dishes[key], id: key}));

      return {
        ...state,
        dishes: dishes
      };
    default:
      return state
  }
};

export default reducer;