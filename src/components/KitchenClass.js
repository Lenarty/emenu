import React, {Component} from "react";
import Kitchen from "../components/Kitchen"
import axios from "axios";
import KitchenRequest from "./KitchenRequest";

class KitchenClass extends Component{
    constructor(props){
        super(props)
        this.state = {
            items: [],
            refresh: 0,
            restaurant: localStorage.getItem('restaurant'),
            address: 'Home',
                description: null,
                time: null,
                message: null
        }
        this.handleDoneButton = this.handleDoneButton.bind(this)
        this.handleLogOutButton = this.handleLogOutButton.bind(this)
        this.handleOnRequestButton = this.handleOnRequestButton.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleTimeChange = this.handleTimeChange.bind(this)
        this.handleOnGetBackButton = this.handleOnGetBackButton.bind(this)
        this.handleOnMakeRequestButtonClick = this.handleOnMakeRequestButtonClick.bind(this)

    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/kitchenorders")
            .then(response => response.json())
            .then(response_items => {
                this.setState({
                    items: response_items,
                })
            });
    }

    async handleDoneButton(id){
        axios.delete("http://127.0.0.1:5000/kitchenorder", {data:{'id': id}})
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

    handleLogOutButton(){
        localStorage.clear()
    }

    handleOnRequestButton(){
        this.setState({address: 'Request'})
    }

    handleOnGetBackButton(){
        this.setState({address: 'Home'})
    }

    handleDescriptionChange(e){
        this.setState({
            description: e
        })
    }

    handleTimeChange(e){
        this.setState({
            time: e
        })
    }

    handleOnMakeRequestButtonClick(){
        axios.post("http://127.0.0.1:5000/request", {
            'description': this.state.description,
            'time': this.state.time,
            'restaurant': this.state.restaurant
        }).then(r => console.log(r))
        this.setState({message: 'Request sent!'})
    }

    render() {
        if (this.state.address === 'Home')
        return(
            <Kitchen
                onGetBack={this.handleOnGetBackButton}
                item={this.state.items}
                items={this.state}
                onClick={this.handleDoneButton}
                onLogOut={this.handleLogOutButton}
                onRequest={this.handleOnRequestButton}/>
        )
        if(this.state.address === 'Request'){
            return(
                <KitchenRequest
                    item={this.state.items}
                    items={this.state}
                    onLogOut={this.handleLogOutButton}
                    onClick={this.handleDoneButton}
                    onRequest={this.handleOnRequestButton}
                    onDescriptionChange={this.handleDescriptionChange}
                    onTimeChange={this.handleTimeChange}
                    onGetBack={this.handleOnGetBackButton}
                    onMakeRequest={this.handleOnMakeRequestButtonClick}
                />)
        }
    }
}

export default KitchenClass