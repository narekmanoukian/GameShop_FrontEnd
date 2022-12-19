import React, {useEffect, useState} from "react";
import {Col, Container, Image, Form, Row, Card, Button} from "react-bootstrap"
import {useParams} from 'react-router-dom'
import { fetchOneGame } from "../http/gameAPI";


const GamePage = () => {
    
    const [game, setGame] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneGame(id).then(data => setGame(data))
    }, [])


    return(
       <Container className="mt-3">
            <Row>
                <Col md = {4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + game.img}/>
                </Col>
                <Col md = {4}>
                    <Form className="d-flex flex-column align-items-center">
                        <h2 style={{color: "whitesmoke"}}>{game.name}</h2>
                        <div className="d-flex align-items-center justify-content-center" style={{color: "whitesmoke"}}>
                            {game.rating}
                        </div>
                    </Form>
                </Col>
                <Col md = {4}>
                        <Card className="d-flex flex-column align-items-center justify-content-around"
                              style={{border: 0, backgroundColor: ""}}>
                            <h3>{game.price}</h3>
                            <Button variant = {"outline-dark"}>Buy</Button>
                        </Card>
                    </Col>
                </Row>
                <Row className="d-flex flex-column mt-3 m-1" style={{color: "whitesmoke"}}>
                    {game.info.map((info, index) =>
                    <Row key={info.id}>
                       {info.title}: {info.description}
                    </Row>
                    )}
                </Row>
            
            
            
       </Container>
    )
}

export default GamePage;