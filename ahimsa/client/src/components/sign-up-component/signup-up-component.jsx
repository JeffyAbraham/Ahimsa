import React from "react";
import FormInput from "../form-input-component/form-input.component";
import CustomButton from "../button-component/button.component";
import { auth, createUser } from "../../firebase/firebase.util";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password,confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password dont match");
      return;
    }
  try {
    const { user } = await auth.createUserWithEmailAndPassword(
      email,
      password)
      console.log(user)
     const usref= createUser(user,displayName,'called from signup')
     console.log(usref)
    
  } catch (error) {
    console.log(error)
    
  }
  this.setState({displayName:'',email:'',password:'',confirmPassword:''})
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            handleChange={this.handleChange}
            label="Display Name"
            value={this.state.displayName}
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            label="Email"
            value={this.state.email}
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Password"
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            handleChange={this.handleChange}
            label="Confirm Password"
            value={this.state.confirmPassword}
          ></FormInput>
          <CustomButton onSubmit={this.handleSubmit}>
            Create An Account
          </CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
