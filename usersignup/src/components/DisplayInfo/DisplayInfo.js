import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

class DisplayInfo extends React.Component{
    render(){
        return(
            <div>
                <Card narrow>
                    <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
                    <CardBody>
                        <CardTitle className={"text-center"}>Welcome {this.props.name.toUpperCase()}</CardTitle>
                        <CardText>
                            <label>User: {this.props.name}</label><br />
                            <label>Email: {this.props.email}</label><br />
                            <label>User: {this.props.password}</label>
                        </CardText>
                        <Button onClick={this.props.onClick} >Edit</Button>
                    </CardBody>
                </Card>
                
            </div>
        )
    }
}

export default DisplayInfo;