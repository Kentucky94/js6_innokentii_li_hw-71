import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'

import DishItem from "../../components/DishItem/DishItem";
import {initAllDishes} from "../../store/actions";

import './DishesPage.css';

class DishesPage extends Component {
  toCreatePage = () => {
    this.props.history.push('/dishes/create');
  };

  componentDidMount() {
    this.props.initDishes();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.dishes.length !== prevProps.dishes.length){
      this.props.initDishes();
      console.log('Updated');
    }
  }

  render() {
    const dishes = this.props.dishes.map(dish => <DishItem
      title={dish.title}
      price={dish.price}
      image={dish.image}
      key={dish.id}
      id={dish.id}
    />);

    return (
      <Fragment>
        <div className='createBlock'>
          <button onClick={this.toCreatePage}>Add New Dish</button>
        </div>
        <div>
          {dishes}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    initDishes: () => dispatch(initAllDishes())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DishesPage);