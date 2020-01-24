import React, {Component} from 'react';
import {editDish} from "../../store/actions";
import {connect} from "react-redux";
import './EditDishesPage.css';

class EditDishesPage extends Component {
  state = {
    title: '',
    price: 0,
    image: '',
  };

  componentDidMount() {
    if(this.props.location.dishData){
      console.log(this.props);

      this.setState({
        title: this.props.location.dishData.title,
        price: this.props.location.dishData.price,
        image: this.props.location.dishData.image,
      })
    }
  }

  onChangeHandler = event => {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    })
  };

  onSubmitHandler = async (event, id, data) => {
    event.preventDefault();

    await this.props.editDish(id, data);

    this.props.history.push('/');
  };

  render() {
    let dishID = '';

    if(this.props.location.dishData){
      dishID = this.props.location.dishData.id;
    }

    return (
      <form onSubmit={(event) => this.onSubmitHandler(event, dishID, this.state)}>
        <input onChange={(event) => this.onChangeHandler(event)} type="text" name='title' value={this.state.title} placeholder='Enter dish title'/>
        <input onChange={(event) => this.onChangeHandler(event)} type="number" name='price' value={this.state.price} placeholder='Enter dish price'/>
        <input onChange={(event) => this.onChangeHandler(event)} type="text" name='image' value={this.state.image} placeholder='Enter dish image link'/>
        <button>Edit Dish</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editDish: (id, newDishData) => dispatch(editDish(id, newDishData))
  }
};

export default connect(null ,mapDispatchToProps)(EditDishesPage);