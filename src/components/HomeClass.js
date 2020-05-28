import React, {Component} from "react";
import Home from "./Home"
import axios from "axios";



class HomeClass extends Component{
    constructor(props) {
        super(props);
        this.state ={
            tableNumber: this.props.match.params.id,
            nextUrl: this.props.match.url,
            phone_number: localStorage.getItem('phone_number'),
            data: [],
            quantity: 1
        }
        this.onQuantityChange = this.onQuantityChange.bind(this)
        this.handleOrderButton = this.handleOrderButton.bind(this)
    }

    componentDidMount() {
        let url = "http://127.0.0.1:5000/top?phone_number=" + this.state.phone_number;
        fetch(url)
            .then(response => response.json())
            .then(response_items => {
                this.setState({
                    data: response_items,
                })
            });
    }

    onQuantityChange(e){
        this.setState({
            quantity: e
        })
    }

    handleOrderButton(id){
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

    render() {
        return(
            <Home
            tableNumber={this.state.tableNumber}
            nextUrl={this.state.nextUrl}
            data={this.state.data}
            onQuantityChange={this.onQuantityChange}
            onOrderButtonClick={this.handleOrderButton}
            />
        )
    }
}

export default HomeClass