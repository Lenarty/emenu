import React, {Component} from "react";
import SignIn from "./SignIn";
import Redirect from "react-router-dom/es/Redirect";
import Button from "@material-ui/core/Button";
import md5 from 'md5'

class SingInClass extends Component{
    constructor(props){
        super(props)

        this.onPhoneChange = this.onPhoneChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.submitHandler = this.submitHandler.bind(this)

        this.state = {
            phone_number: null,
            password: null,
            error: null,
            error2: null,
            data: [],
            redirect: false,
            nextUrl: null
        }
        try{
            this.setState({error: this.props.location.state.message})
        }
        catch (e) {
            let error = "Rip"
        }
    }


    onPhoneChange(e){
        this.setState({
            phone_number: e
        })
    }

    onPasswordChange(e){
        this.setState({
            password: md5(e),
        })
    }


  async submitHandler(){
       const url = 'http://127.0.0.1:5000/users/' + this.state.phone_number
       await fetch(url)
           .then(response => response.json())
           .then(response_items => {
               this.setState({
                   data: response_items,
               })
           });
      try{
          this.setState({nextUrl: this.props.location.state.data})
      }
      catch (e) {
            let error = "Rip"
      }

       if (this.state.data.length === 0)
           this.setState({
               error:"Invalid data!"
           })
      if(this.state.nextUrl === null){
          this.state.data.map(client => (
              client.phone_number == this.state.phone_number && client.password == this.state.password ?
                  (
                    client.user_type != 'Client' ? (
                            localStorage.setItem('restaurant',client.restaurant_name),
                            this.setState({error:"Correct!",redirect: true})
                    ): this.setState({error2: null,error: "In order to proceed a QR code needs to be scanned first!"})
                  ):(
                      client.user_type == 'Client' ? (
          this.setState({error: "In order to proceed a QR code needs to be scanned first!",error2:"Incorrect phone number or password!"}),
          localStorage.clear()):
                          this.setState({error: "Incorrect phone number or password!"})
          )))
      }
       else {
       this.state.data.map(client => (
           client.phone_number == this.state.phone_number && client.password == this.state.password ?
            (
                localStorage.setItem('phone_number',client.phone_number),
                this.setState({error: "Correct!",redirect: true})
           ):
            (
                this.setState({error: "Incorrect password or phone number!"}))
  ))
    }}

    render() {
        return (
            <SignIn
                item={this.state}
                onPhoneChange={this.onPhoneChange}
                onPasswordChange={this.onPasswordChange}
                onSubmitHandler={this.submitHandler}
            />
        );
    }
}

export default SingInClass