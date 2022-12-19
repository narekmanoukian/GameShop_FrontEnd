import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext } from 'react'
import { Context } from '../index'
import {NavLink} from "react-router-dom"
import {observer} from "mobx-react-lite"
import {useNavigate}from 'react-router-dom'
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../Utils/Consts"

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    
    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
  }
    
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
         <NavLink style={{color: "whitesmoke", }} to = {SHOP_ROUTE}>GameStore</NavLink>
          {user.isAuth ?
          <Nav className="ml-auto" style={{color: "white"}}>
            <Button variant='outline-light' 
                    onClick={() => navigate(ADMIN_ROUTE)}>Admin</Button>
            <Button variant={'outline-light'}
                    onClick={() => {
                        navigate(LOGIN_ROUTE);
                        logOut()
             }}> Quit</Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color: "white"}}>
            <Button variant='outline-light' onClick={() => navigate(LOGIN_ROUTE)}>SignIn</Button>
            <Button variant='outline-light' onClick={() => navigate(REGISTRATION_ROUTE)}>SignUp</Button>
          </Nav>
         }
        </Container>
      </Navbar>
  )
})

export default NavBar