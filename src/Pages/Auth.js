import React from "react";
import {Container, Form, Card, Button} from "react-bootstrap"
import {NavLink, useLocation} from "react-router-dom"
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../Utils/Consts"

const Auth = () => {
    const location = useLocation()
    const IsLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
    
    return(
        <Container 
        className="d-flex justify-content-center align-items-center"
        style = {{height:window.innerHeight - 54}}>
           
           <Card style = {{width: 600}} className = "p-5">
            <h2 className="m-auto">{IsLogin ? "SignIn" : "SignUp"}</h2>
            <Form className="d-flex flex-column">
                <Form.Control 
                    className="mt-3"
                    placeholder="Write your Email"  />
                <Form.Control 
                    className="mt-3"
                    placeholder="Write your Password"  />

                    
                <Form className="d-flex justify-content-between mt-3 pl-3 pr-3">
                
                {IsLogin ?
                <div>
                    Not have account? <NavLink to = {REGISTRATION_ROUTE}>SignUp</NavLink>
                </div>
                :
                <div>
                    Already hawe account? <NavLink to = {LOGIN_ROUTE}>SignIn</NavLink>
                </div>
                }
                {IsLogin ?
                <Button
                     variant = {"outline-success"}>
                            SignIn
                    </Button>
                    :
                    <Button
                    variant = {"outline-success"}>
                           SignUp
                   </Button>
                }
                </Form>

            </Form>
           </Card>
        </Container>
    )
}

export default Auth;