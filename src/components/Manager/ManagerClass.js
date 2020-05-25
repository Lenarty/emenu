import React, {Component} from "react";
import Home from "./Home";
import KitchenRequests from "./KitchenRequests";
import axios from "axios";

class ManagerClass extends Component{
    constructor(props){
        super(props)

        this.state = {
            address: 'Home',
            data: null,
            restaurant: localStorage.getItem('restaurant'),
            message: 'To view requests, please expand the list on the left side!'
        }
        this.handleKitchenRequests = this.handleKitchenRequests.bind(this)
        this.handleDoneButton = this.handleDoneButton.bind(this)
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/requests")
            .then(res => res.json())
            .then(res_items =>{
                this.setState({
                    data: res_items
                })
            })
    }

    async handleKitchenRequests(){
        this.componentDidMount(
            await fetch("http://127.0.0.1:5000/requests")
            .then(await (res => res.json()))
            .then(res_items =>{
                this.setState({
                    data: res_items
                })
            })
        )
        if(this.state.data.length == 0){
            this.setState({message: 'Not a single request was made :)'})
        }
        this.setState({address: 'Kitchen requests'})
    }

    async handleDoneButton(id){
        axios.delete("http://127.0.0.1:5000/request", {data:{'id': id}})
            .then(res => {console.log(res)})
        this.componentDidMount(
            await fetch("http://127.0.0.1:5000/kitchenorders")
                .then(await (response => response.json()))
                .then(response_items => {
                    this.setState({
                        items: response_items,
                    })
                }));
    }


    render() {
        if (this.state.address === 'Home') {
            return (
                <Home
                    items={this.state}
                    onKitchenRequests={this.handleKitchenRequests}
                    onDoneButton={this.handleDoneButton}
                />
            )
        }
        if (this.state.address === 'Kitchen requests'){
            return (
                <KitchenRequests
                    items={this.state}
                    onKitchenRequests={this.handleKitchenRequests}
                    onDoneButton={this.handleDoneButton}
                />
            )
        }
    }
}

export default ManagerClass