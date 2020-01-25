import {GET_ALL_ORDERS_SUCCESS, GET_DISH_DATA_SUCCESS, INIT_ALL_DISHES_SUCCESS} from "./actions";

const initialState = {
  dishes: [],
  orders: [],
  deliveryPrice: 150,
  currentDishData: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case INIT_ALL_DISHES_SUCCESS:
      const dishes = Object.keys(action.dishes).map(key => ({...action.dishes[key], id: key}));
      return {
        ...state,
        dishes: dishes
      };
    case GET_ALL_ORDERS_SUCCESS:
      const orders = Object.keys(action.data).map(key => ({...action.data[key], id: key}));

      return {
        ...state,
        orders
      };
    case GET_DISH_DATA_SUCCESS:
      return {
        ...state,
        currentDishData: action.data,
      };
    default:
      return state
  }
};

export default reducer;