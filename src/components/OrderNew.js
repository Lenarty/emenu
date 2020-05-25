import React, {Component} from "react";
import PizzaGarden from "./PizzaGarden";
import Order from "./Order";
import axios from "axios"

class OrderNew extends Component{
    constructor(props){
        super(props)
        this.state = {
            orders: [],
            active: 1,
            phone_number: localStorage.getItem('phone_number'),
            payment_done: false,
            tableNumber: this.props.location.state.tableNumber,
            removed: false,
            confirmed: false

        }
        this.handleConfirmOrderButton = this.handleConfirmOrderButton.bind(this)
        this.handleMakePaymentButton = this.handleMakePaymentButton.bind(this)
        this.handleLogOutButton = this.handleLogOutButton.bind(this)
        this.handleRemoveButton = this.handleRemoveButton.bind(this)
    }

    componentDidMount() {
         fetch("http://127.0.0.1:5000/orders/" + this.state.phone_number)
            .then((res => res.json()))
            .then(res_items =>{
                this.setState({
                    orders: res_items
                })
            })
         fetch("http://127.0.0.1:5000/timer/" + this.state.phone_number)
            .then(res => res.json())
            .then(res_items =>{
                this.setState({
                    timer: res_items
                })
            })
    }


    async handleConfirmOrderButton(){
       this.state.orders.map(_data => (axios.post("http://127.0.0.1:5000/kitchenorder",
           {
               'order_id': _data.id,
           })));
        this.state.orders.map(_data => (axios.put("http://127.0.0.1:5000/order",
            {
                'id': _data.id,
                'meal_id': _data.meal_id,
                'active_order': false
            })));
        this.componentDidMount(
            await fetch("http://127.0.0.1:5000/orders/" + this.state.phone_number)
                .then(await (res => res.json()))
                .then(res_items =>{
                    this.setState({
                        orders: res_items
                    })
                })
        )
    }



   async handleRemoveButton(id){
        axios.delete("http://127.0.0.1:5000/order", {data:{'id': id}})
            .then(res => {console.log(res)})
       this.setState(this.state)
       this.componentDidMount(
           await fetch("http://127.0.0.1:5000/orders/" + this.state.phone_number)
               .then(await (res => res.json()))
               .then(res_items =>{
                   this.setState({
                       orders: res_items
                   })
               })
       )
    }

    handleMakePaymentButton(){
        this.state.orders.map(_data => (axios.post("http://127.0.0.1:5000/clientorder",
            {
                'order_id': _data.id,
                'phone_number': localStorage.getItem('phone_number'),
            })));
        this.setState({payment_done: true})
        localStorage.clear()
    }

    handleLogOutButton(){
        localStorage.clear()
    }


    render() {
        return (
            <Order
                removed={this.state.removed}
                item={this.state}
                onRemove={this.handleRemoveButton}
                onConfirm={this.handleConfirmOrderButton}
                onPayment={this.handleMakePaymentButton}
                onLogOut={this.handleLogOutButton}

            />
        );
    }
}

export default OrderNew