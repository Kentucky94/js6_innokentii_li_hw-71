import React, {Component} from 'react';

import {connect} from 'react-redux'
import {createNewDish} from "../../store/actions";

class CreateDishPage extends Component {
  state = {
    title: '',
    price: 0,
    image: '',
  };

  onChangeHandler = event => {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    })
  };

  onSubmitHandler = async (event, data) => {
    event.preventDefault();

    await this.props.createNewDish(data);

    this.props.history.push('/');
  };

  render() {
    return (
      <form onSubmit={(event) => this.onSubmitHandler(event, this.state)}>
        <input onChange={(event) => this.onChangeHandler(event)} type="text" name='title' placeholder='Enter dish title'/>
        <input onChange={(event) => this.onChangeHandler(event)} type="number" name='price' placeholder='Enter dish price'/>
        <input onChange={(event) => this.onChangeHandler(event)} type="text" name='image' placeholder='Enter dish image link'/>
        <button>Create New Dish</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNewDish: (newDishData) => dispatch(createNewDish(newDishData))
  }
};

export default connect(null, mapDispatchToProps)(CreateDishPage);