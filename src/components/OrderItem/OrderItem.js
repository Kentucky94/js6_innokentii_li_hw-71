import React from 'react';
import {connect} from "react-redux";

import './OrderItem.css';
import {getDishData} from "../../store/actions";

const OrderItem = props => {
  const getDish = async (id) => {
    await props.getDishData(id);
  };

  return (
    <div className='OrderItem'>
      <div>

      </div>
      <div>
        <p>Delivery: {props.deliveryPrice}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    deliveryPrice: state.deliveryPrice,
    currentDishData: state.currentDishData,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getDishData: (id) => dispatch(getDishData(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);