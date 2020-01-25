import axiosOrders from "../axiosOrders";

export const CREATE_NEW_DISH_REQUEST = 'CREATE_NEW_DISH_REQUEST';
export const CREATE_NEW_DISH_SUCCESS = 'CREATE_NEW_DISH_SUCCESS';
export const CREATE_NEW_DISH_FAILURE = 'CREATE_NEW_DISH_FAILURE';

export const INIT_ALL_DISHES_REQUEST = 'INIT_ALL_DISHES_REQUEST';
export const INIT_ALL_DISHES_SUCCESS = 'INIT_ALL_DISHES_SUCCESS';
export const INIT_ALL_DISHES_FAILURE = 'INIT_ALL_DISHES_FAILURE';

export const DELETE_DISH_REQUEST = 'DELETE_DISH_REQUEST';
export const DELETE_DISH_SUCCESS = 'DELETE_DISH_SUCCESS';
export const DELETE_DISH_FAILURE = 'DELETE_DISH_FAILURE';

export const EDIT_DISH_REQUEST = 'EDIT_DISH_REQUEST';
export const EDIT_DISH_SUCCESS = 'EDIT_DISH_SUCCESS';
export const EDIT_DISH_FAILURE = 'EDIT_DISH_FAILURE';

export const GET_ALL_ORDERS_REQUEST = 'GET_ALL_ORDERS_REQUEST';
export const GET_ALL_ORDERS_SUCCESS = 'GET_ALL_ORDERS_SUCCESS';
export const GET_ALL_ORDERS_FAILURE = 'GET_ALL_ORDERS_FAILURE';

export const createNewDishRequest = () => ({type: CREATE_NEW_DISH_REQUEST});
export const createNewDishSuccess = () => ({type: CREATE_NEW_DISH_SUCCESS});
export const createNewDishFailure = (error) => ({type: CREATE_NEW_DISH_FAILURE, error});

export const initAllDishesRequest = () => ({type: INIT_ALL_DISHES_REQUEST});
export const initAllDishesSuccess = (dishes) => ({type: INIT_ALL_DISHES_SUCCESS, dishes});
export const initAllDishesFailure = (error) => ({type: INIT_ALL_DISHES_FAILURE, error});

export const deleteDishRequest = () => ({type: DELETE_DISH_REQUEST});
export const deleteDishSuccess = (id) => ({type: DELETE_DISH_SUCCESS, id});
export const deleteDishFailure = (error) => ({type: DELETE_DISH_FAILURE, error});

export const editDishRequest = () => ({type: EDIT_DISH_REQUEST});
export const editDishSuccess = (id) => ({type: EDIT_DISH_SUCCESS, id});
export const editDishFailure = (error) => ({type: EDIT_DISH_FAILURE, error});

export const getAllOrdersRequest = () => ({type: GET_ALL_ORDERS_REQUEST});
export const getAllOrdersSuccess = (data) => ({type: GET_ALL_ORDERS_SUCCESS, data});
export const getAllOrdersFailure = (error) => ({type: GET_ALL_ORDERS_FAILURE, error});

export const createNewDish = (newDishData) => {
  return async dispatch => {
    try{
      dispatch(createNewDishRequest());
      await axiosOrders.post('/dishes.json', newDishData);
      await dispatch(initAllDishes());
      dispatch(createNewDishSuccess())
    }catch(e){
      dispatch(createNewDishFailure(e));
    }
  }
};

export const initAllDishes = () => {
  return async dispatch => {
    try{
      dispatch(initAllDishesRequest());
      const response = await axiosOrders.get('/dishes.json');
      dispatch(initAllDishesSuccess(response.data));
    }catch(e){
      dispatch(initAllDishesFailure(e));
    }
  }
};

export const deleteDish = (id) => {
  return async dispatch => {
    try{
      dispatch(deleteDishRequest());
      await axiosOrders.delete(`/dishes/${id}.json`);
      await dispatch(initAllDishes());
      dispatch(deleteDishSuccess());
    }catch(e){
      dispatch(deleteDishFailure(e));
    }
  }
};

export const editDish = (id, newData) => {
  return async dispatch => {
    try{
      dispatch(editDishRequest());
      await axiosOrders.patch(`/dishes/${id}.json`, newData);
      await dispatch(initAllDishes());
      dispatch(editDishSuccess());
    }catch(e){
      dispatch(editDishFailure(e));
    }
  }
};

export const getOrders = () => {
  return async dispatch => {
    try{
      dispatch(getAllOrdersRequest());
      const response = await axiosOrders.get(`/orders.json`);
      dispatch(getAllOrdersSuccess(response.data));
    }catch(e){
      dispatch(getAllOrdersFailure(e));
    }
  }
};