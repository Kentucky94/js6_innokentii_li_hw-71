import React from 'react';
import {connect} from "react-redux";

import './OrderItem.css';

const OrderItem = props => {
  return (
    <div className='OrderItem'>
      <div>
        <p>Delivery: {props.deliveryPrice}</p>
      </div>
      <div>

      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    deliveryPrice: state.deliveryPrice,
  }
};

export default connect(mapStateToProps)(OrderItem);