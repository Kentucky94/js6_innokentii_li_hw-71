import React, {Component} from 'react';
import {getOrders, initAllDishes} from "../../store/actions";
import {connect} from "react-redux";
import OrderItem from "../../components/OrderItem/OrderItem";

class OrdersPage extends Component {
  async componentDidMount() {
    await this.props.initDishes();
    await this.props.getOrders();
    console.log(this.props.orders);
  }

  render() {
    const orderItems = this.props.orders.map(order => <OrderItem key={order.id} orderData={order}/>);

    return (
      <div>
        {orderItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders,
});

const mapDispatchToProps = dispatch => ({
  getOrders: () => dispatch(getOrders()),
  initDishes: () => dispatch(initAllDishes())
});

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);