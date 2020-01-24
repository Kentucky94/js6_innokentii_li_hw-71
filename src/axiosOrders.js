import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://hw-71-admin-orders-app.firebaseio.com/',
});

export default axiosOrders;