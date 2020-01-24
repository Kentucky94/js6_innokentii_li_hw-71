import React from 'react';

import {deleteDish} from "../../store/actions";
import {connect} from "react-redux";

import './DishItem.css';
import {withRouter} from "react-router";



const DishItem = props => {
  const ToEditPage = (id) => {
    props.history.push({
      pathname: `/dishes/edit/${id}`,
      dishData: {price: props.price, image: props.image, title: props.title, id: props.id},
    })
  };

  return (
    <div className='DishItem'>
      <div className='InfoBox'>
        <img src={props.image} alt="img"/>
        <h3>{props.title}</h3>
      </div>
      <div className='InfoBox'>
        <h3>{props.price} KGS</h3>
        <button onClick={() => {ToEditPage(props.id)}}>EDIT</button>
        <button onClick={() => {props.deleteDish(props.id)}}>DELETE</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteDish: (id) => dispatch(deleteDish(id))
  }
};

export default connect(null, mapDispatchToProps)(withRouter(DishItem));