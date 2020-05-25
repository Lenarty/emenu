import React, {Component} from "react";
import Waiter from "./Waiter";
import axios from "axios";


class WaiterClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            orders: []
        }
        this.handlePaymentDoneButton = this.handlePaymentDoneButton.bind(this)
        this.handleLogOutButton = this.handleLogOutButton.bind(this)
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/clientorders")
            .then(response => response.json())
            .then(response_items => {
                this.setState({
                    items: response_items,
                })
            });
        fetch("http://127.0.0.1:5000/orders")
            .then(response => response.json())
            .then(response_items => {
                this.setState({
                    orders: response_items,
                })
            });
    }

    async handlePaymentDoneButton(_id) {
        this.state.items.map(_data =>
            _data.phone_number === _id ? (
                axios.put("http://127.0.0.1:5000/clientorder",
                    {
                        'id': _data.id,
                        'payment_done': true
                    })
            ) : null)
        this.state.orders.map(_odata => (
            _odata.phone_number === _id ? (
                    axios.delete("http://127.0.0.1:5000/order",
                        {
                            data:
                                {'id': _odata.id}
                        }
                    ))
                : null
        ));
        this.componentDidMount(
            await fetch("http://127.0.0.1:5000/orders/" + this.state.phone_number)
            .then(await (res => res.json()))
            .then(res_items =>{
                this.setState({
                    orders: res_items
                })
            })
        )
        await fetch("http://127.0.0.1:5000/clientorders")
            .then(await (response => response.json()))
            .then(response_items => {
                this.setState({
                    items: response_items,
                })
            });
    }

    handleLogOutButton(){
        localStorage.clear()
    }

render() {
        return(
            <Waiter
                item={this.state.items}
                onClick={this.handlePaymentDoneButton}
                onLogOut={this.handleLogOutButton}
            />
        )
    }
}

export default WaiterClass