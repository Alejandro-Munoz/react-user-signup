import React from 'react';
import {  Input, Button } from 'mdbreact';

class Form extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <form>
                    <p className="h4 text-center mb-4">Sign up with your email address</p>
                    <div className={"form-group"}>
                        <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right" 
                                id="name"
                                name="name"
                                value={this.props.name} 
                                className="form-control"
                                onChange={this.props.onChange}/>
                    </div>
                    <div className={"form-group"}>                    
                        <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" 
                                id="email" 
                                name="email"
                                value={this.props.email}
                                className="form-control"
                                onChange={this.props.onChange}/>
                                
                    </div>
                    
                    <div className={"form-group"}>                    
                        <Input label="Type your password" icon="lock" group type="password" validate
                                id="password"
                                name="password"
                                value={this.props.password} 
                                className="form-control"
                                onChange={this.props.onChange}/>
                                
                    </div>
                    <div className="text-center mt-4">
                        <Button color="success" onClick={this.props.onClick} >Register</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;