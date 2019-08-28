import React, { Component } from 'react';
import Order from '../../../components/Order/Order'
import Axios from '../../../axios-orders'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
class Orders extends Component {
    state = {
        order :[],
        loading:true
    }
    componentDidMount() {
        Axios.get('/orders.json').then((response)=>{
            const fetchedOrder = [];
            for (let key in response.data) {
                fetchedOrder.push({
                    ...response.data[key],
                    id:key
                });
            }
            this.setState({loading:false,order:fetchedOrder});
        }).catch((error)=>{
            this.setState({loading:false});
        });
    }
    render() {
        return (
            <div>
                {this.state.order.map((order)=>{
                    return <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>
                })}
            </div>
        );
    }
}

export default withErrorHandler(Orders,Axios);