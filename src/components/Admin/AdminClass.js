import React, {Component} from "react";
import Home from "./Home"
import AddUser from "./AddUser";
import axios from "axios"
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";
import AddMeal from "./AddMeal";
import DeleteMeal from "./DeleteMeal";
import UpdateMeal from "./UpdateMeal";
import AddRestaurant from "./AddRestaurant";
import DeleteRestaurant from "./DeleteRestaurant";
import UpdateRestaurant from "./UpdateRestaurant";


class AdminClass extends Component{
    constructor(props){
        super(props)
        this.state = {
            address: 'Home',
            //User
                user_name:null,
                user_surname:null,
                user_phone_number:null,
                user_password:null,
                user_type:null,
                user_restaurant:null,
                data: [],
                select_user: null,
            //Meal
                meals:[],
                restaurants: [],
                meal_restaurant:null,
                meal_name: null,
                meal_description:null,
                meal_type:null,
                meal_price:null,
                meal_prep_time:null,
                meal_id: null,
            //Restaurant
                restaurant: null,
                restaurant_id:null,
                restaurant_name:null,
                restaurant_location:null,

        }
        //User
        //Add
        this.handleAddUser = this.handleAddUser.bind(this)
        this.handleUserName = this.handleUserName.bind(this)
        this.handleUserSurname = this.handleUserSurname.bind(this)
        this.handleUserPhoneNumber = this.handleUserPhoneNumber.bind(this)
        this.handleUserPassword = this.handleUserPassword.bind(this)
        this.handleUserType = this.handleUserType.bind(this)
        this.handleUserRestaurant = this.handleUserRestaurant.bind(this)
        this.handleAddUserButton = this.handleAddUserButton.bind(this)
        //Delete
        this.handleDeleteUser = this.handleDeleteUser.bind(this)
        this.handleDeleteUserButton = this.handleDeleteUserButton.bind(this)
        this.handleSelectUser = this.handleSelectUser.bind(this)
        //Update
        this.handleUpdateUser = this.handleUpdateUser.bind(this)
        this.handleUpdateUserButton = this.handleUpdateUserButton.bind(this)

        //Meal
        //Add
        this.handleAddMeal = this.handleAddMeal.bind(this)
        this.handleMealRestaurant = this.handleMealRestaurant.bind(this)
        this.handleMealDescription = this.handleMealDescription.bind(this)
        this.handleMealName = this.handleMealName.bind(this)
        this.handleMealType = this.handleMealType.bind(this)
        this.handleMealPrepTime = this.handleMealPrepTime.bind(this)
        this.handleMealPrice = this.handleMealPrice.bind(this)
        this.handleAddMealButton = this.handleAddMealButton.bind(this)
        //Delete
        this.handleDeleteMeal = this.handleDeleteMeal.bind(this)
        this.handleMealId = this.handleMealId.bind(this)
        this.handleDeleteMealButton = this.handleDeleteMealButton.bind(this)
        //Update
        this.handleUpdateMeal = this.handleUpdateMeal.bind(this)
        this.handleUpdateMealButton = this.handleUpdateMealButton.bind(this)

        //Restaurant
        //Add
        this.handleAddRestaurant = this.handleAddRestaurant.bind(this)
        this.handleRestaurantLocation = this.handleRestaurantLocation.bind(this)
        this.handleRestaurantName = this.handleRestaurantName.bind(this)
        this.handleAddRestaurantButton = this.handleAddRestaurantButton.bind(this)
        //Delete
        this.handleDeleteRestaurant = this.handleDeleteRestaurant.bind(this)
        this.handleRestaurantId = this.handleRestaurantId.bind(this)
        this.handleDeleteRestaurantButton = this.handleDeleteRestaurantButton.bind(this)
        //Update
        this.handleUpdateRestaurant = this.handleUpdateRestaurant.bind(this)
        this.handleUpdateRestaurantButton = this.handleUpdateRestaurantButton.bind(this)
    }

    handleAddUser(){
        this.setState({
            address: 'Add user'
        })
    }

    handleAddRestaurant(){
        this.setState({
            address: 'Add restaurant'
        })
    }

    async handleAddMeal(){
        await fetch("http://127.0.0.1:5000/restaurants")
            .then(res => res.json())
            .then(res_items => {
                this.setState({
                    restaurants: res_items,
                    address: 'Add meal'
                })
            })
    }

    async handleDeleteMeal(){
        await fetch("http://127.0.0.1:5000/restaurants")
            .then(res => res.json())
            .then(res_items => {
                this.setState({
                    restaurants: res_items,
                })
            })
        await fetch("http://127.0.0.1:5000/meals")
            .then(res => res.json())
            .then(res_items =>{
                this.setState({
                    meals: res_items,
                    address: 'Delete meal'
                })
            })
    }

    async handleUpdateMeal(){
        await fetch("http://127.0.0.1:5000/restaurants")
            .then(res => res.json())
            .then(res_items => {
                this.setState({
                    restaurants: res_items,
                })
            })
        await fetch("http://127.0.0.1:5000/meals")
            .then(res => res.json())
            .then(res_items =>{
                this.setState({
                    meals: res_items,
                    address: 'Update meal'
                })
            })
    }

    async handleDeleteUser(){
        await fetch("http://127.0.0.1:5000/users")
            .then(res => res.json())
            .then(res_items =>{
                this.setState({
                    data: res_items,
                    address: 'Delete user'
                })
            })
    }

   async handleUpdateUser(){
        await fetch("http://127.0.0.1:5000/users")
            .then(res => res.json())
            .then(res_items =>{
                this.setState({
                    data: res_items,
                    address: 'Update user'
                })
            })
    }

    async handleDeleteRestaurant(){
        await fetch("http://127.0.0.1:5000/restaurants")
            .then(res => res.json())
            .then(res_items =>{
                this.setState({
                    restaurant: res_items,
                    address: 'Delete restaurant'
                })
            })
    }

    async handleUpdateRestaurant(){
        await fetch("http://127.0.0.1:5000/restaurants")
            .then(res => res.json())
            .then(res_items =>{
                this.setState({
                    restaurant: res_items,
                    address: 'Update restaurant'
                })
            })
    }

    handleRestaurantId(e){
        this.setState({
            restaurant_id: e
        })
    }

    handleRestaurantName(e){
        this.setState({
            restaurant_name: e
        })
    }

    handleRestaurantLocation(e){
        this.setState({
            restaurant_location: e
        })
    }

    handleMealId(e){
        this.setState({
            meal_id: e
        })
    }


    handleMealRestaurant(e){
        this.setState({
            meal_restaurant: e
        })
    }

    handleMealName(e){
        this.setState({
            meal_name: e
        })
    }

    handleMealDescription(e){
        this.setState({
            meal_description: e
        })
    }

    handleMealType(e){
        this.setState({
            meal_type: e
        })
    }

    handleMealPrice(e){
        this.setState({
            meal_price: e
        })
    }

    handleMealPrepTime(e){
        this.setState({
            meal_prep_time: e
        })
    }

    handleSelectUser(e){
        this.setState({select_user: e})
    }

    handleUserName(e){
        this.setState({user_name: e})
    }

    handleUserSurname(e){
        this.setState({user_surname: e})
    }

    handleUserPhoneNumber(e){
        this.setState({user_phone_number: e})
    }

    handleUserPassword(e){
        this.setState({user_password: e})
    }

    handleUserType(e){
        this.setState({user_type: e})
    }

    handleUserRestaurant(e){
        this.setState({user_restaurant:e})
    }

    handleAddUserButton(){
        axios.post("http://127.0.0.1:5000/user", {
                'name': this.state.user_name,
                'lastname': this.state.user_surname,
                'password': this.state.user_password,
                'phone_number': this.state.user_phone_number,
                'user_type': this.state.user_type,
                'restaurant_name': this.state.user_restaurant
             }).then(r => console.log(r))
    }

    handleDeleteUserButton(){
        axios.delete("http://127.0.0.1:5000/user", {data: {
            'phone_number': this.state.user_phone_number
        }}).then(r => console.log(r))
    }

    handleUpdateUserButton(){
        axios.put("http://127.0.0.1:5000/user", {
            'name': this.state.user_name,
            'lastname': this.state.user_surname,
            'password': this.state.user_password,
            'phone_number': this.state.user_phone_number,
            'user_type': this.state.user_type
        }).then(r => console.log(r))
    }

    handleAddMealButton(){
        axios.post("http://127.0.0.1:5000/meal", {
            'name': this.state.meal_name,
            'restaurant_id': this.state.meal_restaurant,
            'description': this.state.meal_description,
            'type': this.state.meal_type,
            'price': this.state.meal_price,
            'prep_time': this.state.meal_prep_time
        }).then(r => console.log(r))
        let url = "http://127.0.0.1:5000/email?name=" + this.state.meal_name + "&description=" + this.state.meal_description + "&price=" + this.state.meal_price;
        axios.get(url).then(r => console.log(r))
    }

    handleDeleteMealButton(){
        axios.delete("http://127.0.0.1:5000/meal", {data: {
                'id': this.state.meal_id
            }}).then(r => console.log(r))
    }

    handleUpdateMealButton(){
        axios.put("http://127.0.0.1:5000/meal", {
            'id': this.state.meal_id,
            'name': this.state.meal_name,
            'restaurant_id': this.state.meal_restaurant,
            'description': this.state.meal_description,
            'type': this.state.meal_type,
            'price': this.state.meal_price,
            'prep_time': this.state.meal_prep_time
        }).then(r => console.log(r))
    }

    handleAddRestaurantButton(){
        axios.post("http://127.0.0.1:5000/restaurant", {
            'name': this.state.restaurant_name,
            'location': this.state.restaurant_location,
        }).then(r => console.log(r))
    }

    handleDeleteRestaurantButton(){
        axios.delete("http://127.0.0.1:5000/restaurant", {data: {
                'id': this.state.restaurant_id
            }}).then(r => console.log(r))
    }

    handleUpdateRestaurantButton(){
        axios.put("http://127.0.0.1:5000/restaurant", {
            'id': this.state.restaurant_id,
            'name': this.state.restaurant_name,
            'location': this.state.restaurant_location
        }).then(r => console.log(r))
    }

    render() {
        if (this.state.address === 'Home') {
        return (
            <Home
                onAddUserClick={this.handleAddUser}
                onDeleteUserClick={this.handleDeleteUser}
                onUpdateUserClick={this.handleUpdateUser}
                onAddMealClick={this.handleAddMeal}
                onDeleteMealClick={this.handleDeleteMeal}
                onUpdateMealClick={this.handleUpdateMeal}
                onAddRestaurantClick={this.handleAddRestaurant}
                onDeleteRestaurantClick={this.handleDeleteRestaurant}
                onUpdateRestaurantClick={this.handleUpdateRestaurant}
            />
            )
        }
        if (this.state.address === 'Add user') {
            return (
                <AddUser
                    items={this.state}
                    onUserNameChange={this.handleUserName}
                    onUserSurnameChange={this.handleUserSurname}
                    onUserPhoneChange={this.handleUserPhoneNumber}
                    onUserPasswordChange={this.handleUserPassword}
                    onUserTypeChange={this.handleUserType}
                    onRestaurantChange={this.handleUserRestaurant}
                    onUserAddButtonClick={this.handleAddUserButton}
                    onAddUserClick={this.handleAddUser}
                    onDeleteUserClick={this.handleDeleteUser}
                    onUpdateUserClick={this.handleUpdateUser}
                    onAddMealClick={this.handleAddMeal}
                    onDeleteMealClick={this.handleDeleteMeal}
                    onUpdateMealClick={this.handleUpdateMeal}
                    onAddRestaurantClick={this.handleAddRestaurant}
                    onDeleteRestaurantClick={this.handleDeleteRestaurant}
                    onUpdateRestaurantClick={this.handleUpdateRestaurant}
                />
            )
        }
        if (this.state.address === 'Delete user'){
            return <DeleteUser
                    items={this.state}
                    onUserPhoneChange={this.handleUserPhoneNumber}
                    onUserDeleteButtonClick={this.handleDeleteUserButton}
                    onAddUserClick={this.handleAddUser}
                    onDeleteUserClick={this.handleDeleteUser}
                    onUpdateUserClick={this.handleUpdateUser}
                    onSelectUser={this.handleSelectUser}
                    onAddMealClick={this.handleAddMeal}
                    onDeleteMealClick={this.handleDeleteMeal}
                    onUpdateMealClick={this.handleUpdateMeal}
                    onAddRestaurantClick={this.handleAddRestaurant}
                    onDeleteRestaurantClick={this.handleDeleteRestaurant}
                    onUpdateRestaurantClick={this.handleUpdateRestaurant}
            />
        }
        if (this.state.address === 'Update user'){
            return <UpdateUser
                    items={this.state}
                    onUserNameChange={this.handleUserName}
                    onUserSurnameChange={this.handleUserSurname}
                    onUserPhoneChange={this.handleUserPhoneNumber}
                    onUserPasswordChange={this.handleUserPassword}
                    onUserTypeChange={this.handleUserType}
                    onUserAddButtonClick={this.handleAddUserButton}
                    onUserDeleteButtonClick={this.handleDeleteUserButton}
                    onUserUpdateButtonClick={this.handleUpdateUserButton}
                    onAddUserClick={this.handleAddUser}
                    onDeleteUserClick={this.handleDeleteUser}
                    onAddMealClick={this.handleAddMeal}
                    onDeleteMealClick={this.handleDeleteMeal}
                    onUpdateMealClick={this.handleUpdateMeal}
                    onAddRestaurantClick={this.handleAddRestaurant}
                    onDeleteRestaurantClick={this.handleDeleteRestaurant}
                    onUpdateRestaurantClick={this.handleUpdateRestaurant}
                    />
        }
        if (this.state.address === 'Add meal'){
            return <AddMeal
                    items={this.state}
                    onMealRestaurantChange={this.handleMealRestaurant}
                    onMealNameChange={this.handleMealName}
                    onMealDescriptionChange={this.handleMealDescription}
                    onMealTypeChange={this.handleMealType}
                    onMealPriceChange={this.handleMealPrice}
                    onMealPrepTimeChange={this.handleMealPrepTime}
                    onMealAddButtonClick={this.handleAddMealButton}
                    onAddUserClick={this.handleAddUser}
                    onDeleteUserClick={this.handleDeleteUser}
                    onUpdateUserClick={this.handleUpdateUser}
                    onAddMealClick={this.handleAddMeal}
                    onDeleteMealClick={this.handleDeleteMeal}
                    onUpdateMealClick={this.handleUpdateMeal}
                    onAddRestaurantClick={this.handleAddRestaurant}
                    onDeleteRestaurantClick={this.handleDeleteRestaurant}
                    onUpdateRestaurantClick={this.handleUpdateRestaurant}
                    />
        }
        if (this.state.address === 'Delete meal'){
            return <DeleteMeal
                    items={this.state}
                    onMealRestaurantChange={this.handleMealRestaurant}
                    onMealIdChange={this.handleMealId}
                    onMealDeleteButtonClick={this.handleDeleteMealButton}
                    onAddUserClick={this.handleAddUser}
                    onDeleteUserClick={this.handleDeleteUser}
                    onUpdateUserClick={this.handleUpdateUser}
                    onAddMealClick={this.handleAddMeal}
                    onDeleteMealClick={this.handleDeleteMeal}
                    onUpdateMealClick={this.handleUpdateMeal}
                    onAddRestaurantClick={this.handleAddRestaurant}
                    onDeleteRestaurantClick={this.handleDeleteRestaurant}
                    onUpdateRestaurantClick={this.handleUpdateRestaurant}
                    />
        }
        if (this.state.address === 'Update meal'){
            return <UpdateMeal
                    items={this.state}
                    onMealUpdateButtonClick={this.handleUpdateMealButton}
                    onMealRestaurantChange={this.handleMealRestaurant}
                    onMealNameChange={this.handleMealName}
                    onMealDescriptionChange={this.handleMealDescription}
                    onMealTypeChange={this.handleMealType}
                    onMealPriceChange={this.handleMealPrice}
                    onMealIdChange={this.handleMealId}
                    onMealPrepTimeChange={this.handleMealPrepTime}
                    onAddUserClick={this.handleAddUser}
                    onDeleteUserClick={this.handleDeleteUser}
                    onUpdateUserClick={this.handleUpdateUser}
                    onAddMealClick={this.handleAddMeal}
                    onDeleteMealClick={this.handleDeleteMeal}
                    onUpdateMealClick={this.handleUpdateMeal}
                    onAddRestaurantClick={this.handleAddRestaurant}
                    onDeleteRestaurantClick={this.handleDeleteRestaurant}
                    onUpdateRestaurantClick={this.handleUpdateRestaurant}
                    />
        }
        if (this.state.address === 'Add restaurant'){
            return <AddRestaurant
                    items={this.state}
                    onRestaurantNameChange={this.handleRestaurantName}
                    onRestaurantLocationChange={this.handleRestaurantLocation}
                    onRestaurantAddButtonClick={this.handleAddRestaurantButton}
                    onAddUserClick={this.handleAddUser}
                    onDeleteUserClick={this.handleDeleteUser}
                    onUpdateUserClick={this.handleUpdateUser}
                    onAddMealClick={this.handleAddMeal}
                    onDeleteMealClick={this.handleDeleteMeal}
                    onUpdateMealClick={this.handleUpdateMeal}
                    onAddRestaurantClick={this.handleAddRestaurant}
                    onDeleteRestaurantClick={this.handleDeleteRestaurant}
                    onUpdateRestaurantClick={this.handleUpdateRestaurant}
                    />
        }
        if (this.state.address === 'Delete restaurant'){
            return <DeleteRestaurant
                    items={this.state}
                    onRestaurantIdChange={this.handleRestaurantId}
                    onRestaurantDeleteButtonClick={this.handleDeleteRestaurantButton}
                    onAddUserClick={this.handleAddUser}
                    onDeleteUserClick={this.handleDeleteUser}
                    onUpdateUserClick={this.handleUpdateUser}
                    onAddMealClick={this.handleAddMeal}
                    onDeleteMealClick={this.handleDeleteMeal}
                    onUpdateMealClick={this.handleUpdateMeal}
                    onAddRestaurantClick={this.handleAddRestaurant}
                    onDeleteRestaurantClick={this.handleDeleteRestaurant}
                    onUpdateRestaurantClick={this.handleUpdateRestaurant}
                    />
        }
        if (this.state.address === 'Update restaurant'){
            return <UpdateRestaurant
                    items={this.state}
                    onRestaurantIdChange={this.handleRestaurantId}
                    onRestaurantNameChange={this.handleRestaurantName}
                    onRestaurantLocationChange={this.handleRestaurantLocation}
                    onRestaurantUpdateButtonClick={this.handleUpdateRestaurantButton}
                    onAddUserClick={this.handleAddUser}
                    onDeleteUserClick={this.handleDeleteUser}
                    onUpdateUserClick={this.handleUpdateUser}
                    onAddMealClick={this.handleAddMeal}
                    onDeleteMealClick={this.handleDeleteMeal}
                    onUpdateMealClick={this.handleUpdateMeal}
                    onAddRestaurantClick={this.handleAddRestaurant}
                    onDeleteRestaurantClick={this.handleDeleteRestaurant}
                    onUpdateRestaurantClick={this.handleUpdateRestaurant}
                    />
        }
    }
}
export default AdminClass