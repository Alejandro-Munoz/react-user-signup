import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className={"text-center "}
                        style={{height:"120px"}}>
                    <img src="https://i.forbesimg.com/media/lists/companies/airbus_416x416.jpg"
                            className={"logo"}
                            alt="logo"
                            style={{height:"120px",}} />
                    

                </div>
                <hr style={{marginTop:0}} />
            </header>
        )
    }
}

export default Header;