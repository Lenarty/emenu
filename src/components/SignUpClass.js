import React, {Component} from "react";
import SignUp from "./SignUp";
import axios from "axios"

class SignUpClass extends Component{
    constructor(props){
        super(props)

        this.onNameChange = this.onNameChange.bind(this)
        this.onSurnameChange = this.onSurnameChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this)
        this.onSignUpButton = this.onSignUpButton.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)

        this.state = {
            name: null,
            surname: null,
            email: null,
            phone_number: null,
            password: null,
            user_type: 'Client',
            data: null,
            exists: false,
            error: null,
            redirect: false
        }
    }

    onNameChange(e){
        this.setState({
            name: e
        })
    }

    onSurnameChange(e){
        this.setState({
            surname: e
        })
    }

    onEmailChange(e){
        this.setState({
            email: e
        })
    }

    onPhoneNumberChange(e){
        this.setState({
            phone_number: e
        })
    }

    onPasswordChange(e){
        this.setState({
            password: e
        })
    }

   async onSignUpButton() {
        await fetch("http://127.0.0.1:5000/users").then(response => response.json()).then(response_items => {
            this.setState({
                data: response_items
            })
        })
        this.state.data.map(client => (
            client.phone_number == this.state.phone_number ? (
                this.setState({exists: true})
            ):null
        ))

        if( this.state.exists === false ){
        axios.post("http://127.0.0.1:5000/user",{
            'name': this.state.name,
            'lastname': this.state.surname,
            'email': this.state.email,
            'phone_number': this.state.phone_number,
            'password': this.state.password,
            'user_type': this.state.user_type,
            'restaurant_name': null
        })
            this.setState({redirect: true})

        }
        else{
            this.setState({
                error: "This phone number already exists!",
                exists: false
            })
        }

    }



    render() {
        return(
            <SignUp
                item={this.state}
                onNameChange={this.onNameChange}
                onSurnameChange={this.onSurnameChange}
                onPasswordChange={this.onPasswordChange}
                onPhoneNumberChange={this.onPhoneNumberChange}
                onSignUp={this.onSignUpButton}
                onEmailChange={this.onEmailChange}
            />
        )
    }
}

export default SignUpClass