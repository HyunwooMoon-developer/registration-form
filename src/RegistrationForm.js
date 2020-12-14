import React, { Component } from 'react';
import ValidationError from './ValidationError';

class RegistrationForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name:{
                value: '',
                touched : false
            },
            password:{
                value:'',
                touched : false
            },
            repeatPassword:{
                value: '',
                touched : false
            }

        }
    }

    updateName= name =>{
        this.setState({name: {value: name, touch: true}});
    }


    updatePassword= password =>{
        this.setState({password: {value: password, touch: true}});
    }


    updateRepeatPassword= repeatPassword   =>{
        this.setState({repeatPassword: {value: repeatPassword, touch: true}});
    }

    validateName = () => {
        const name = this.state.name.value.trim();
        if(name.length === 0){
            return 'Name is Required';
        }else if(name.length < 3){
            return 'Name must be at least 3 characters long';
        }
    }

    validatePassword = () => {
        const password = this.state.password.value.trim();
        if(password.length === 0){
            return 'password is required';
        }else if(password.length <6 || password.length >72){
            return 'password must be between 6 and 72 characters long';
        }else if(!password.match(/[0-9]/)){
            return 'password must contain at least on number';
        }
    }


    validateRepeatPassword= () => {
        const repeatPassword = this.state.repeatPassword.value.trim();
        const password = this.state.password.value.trim();

        if(repeatPassword !== password){
            return 'passwords do not match'
        }
    }
    handleSubmit= e =>{
        e.preventDefault();
       const {name, password, repeatPassword} = this.state ;

       console.log('name' , name);
       console.log('name' , password);
       console.log('name' , repeatPassword);
    }

    render() {
        const nameError = this.validateName();
        const passwordError = this.validatePassword();
        const repeatPasswordError = this.validateRepeatPassword();
        return (
            <div>
                <form className="registration" onSubmit={e=>this.handleSubmit(e)}>
                    <h2>Register</h2>
                    <div className="registration__hint">*required field</div>
                    <div className="form-group">
                        <label htmlFor="name">name*</label>
                        <input type="text" className="registration__control" name="name" id="name"
                         onChange={e=>this.updateName(e.target.value)} />
                         {this.state.name.touched&&<ValidationError message={nameError
                         } />}
                    </div>
                    <div className="form-group">    
                        <label htmlFor="password">PassWord*</label>
                        <input type="password" className="registration__control" name="password" id="password"
                         onChange={e=>this.updatePassword(e.target.value)}/>
                        {this.state.password.touched&&<ValidationError message={passwordError
                         } />}
                    </div>
                    <div className="form-group"> 
                        <label htmlFor="repeatPassword">Repeat Password*</label>
                        <input type="password" className="registration__control" name="repeatPassword" id="repeatPassword"
                         onChange={e=>this.updateRepeatPassword(e.target.value)} />
                         {this.state.repeatPassword.touched&&<ValidationError message={repeatPasswordError
                         } />}
                    </div>
                    <div className="registration__button__group">
                        <button type="reset" className="registration__button">
                            Cancel
                        </button>
                        <button type="submit" className="registration__button"
                                disabled={
                                    this.validateName()||
                                    this.validatePassword() ||
                                    this.validateRepeatPassword()
                                }>
                            Save
                            </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;