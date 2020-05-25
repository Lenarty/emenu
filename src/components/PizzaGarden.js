import React, {Component} from "react";
import Menu from "../components/Menu"
import Order from "./Order";
import axios from 'axios'
import OrderNew from "./OrderNew";


const api_url = 'http://127.0.0.1:5000/meals'
class PizzaGarden extends Component{
    constructor(props){
        super(props)
        this.state = {
            items : [],
            category: 'Choose your preferred meal!',
            quantity: 1,
            logout: false,
            tableNumber: this.props.location.state.tableNumber,
            outsideUser: false
        }
    this.handleOnButtonOrder = this.handleOnButtonOrder.bind(this)
        this.handleQuantity = this.handleQuantity.bind(this)
        this.handleLogOutButton = this.handleLogOutButton.bind(this)
    }

    componentDidMount() {
        fetch(api_url)
            .then(response => response.json())
            .then(response_items => {
                this.setState({
                    items: response_items,
                })
            });
    }

    handleOnChange = category => {

        this.setState({
            category
        })
    }

    handleLogOutButton(){
        localStorage.clear()
        this.setState({logout: true})
    }

    handleOnButtonOrder(id) {
        if (this.state.tableNumber == 0){
            this.setState({outsideUser: true})
        }
        else {
            const mid = {
                'meal_id': id,
                'active_order': true,
                'phone_number': localStorage.getItem('phone_number'),
                'quantity': this.state.quantity,
                'table_number': this.state.tableNumber
            }
            axios.post("http://127.0.0.1:5000/order", mid)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            this.setState({
                quantity: 1
            })
        }

    }

    handleQuantity(e){
        this.setState({
            quantity: e
        })
    }


    render() {


        return(
            <div>
                <Menu
                    item={this.state}
                    onSelect={this.handleOnChange}
                    onClick={this.handleOnButtonOrder}
                    onQuantitySelect={this.handleQuantity}
                    onLogOut={this.handleLogOutButton}
                />


                </div>
        )
    }
}

export default PizzaGarden





