import React from "react";
import {Col, Container, Image, Form, Row, Card, Button} from "react-bootstrap"

const GamePage = () => {
    const game = {id: 1, name: 'Dota 2', price: 0, rating: 4.5, img:'Dota Image'}
    const description = [
        {id:1, title: 'OC', description: "Windows 7 or newer"},
        {id:2, title: 'Processor', description: "Dual core from Intel or AMD at 2.8 GHz"},
        {id:3, title: 'Memory', description: "4 GB RAM"},
        {id:4, title: 'Graphics', description: "Nvidia GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600"},
        {id:5, title: 'DirectX', description: "Version 9.0c"},
        {id:6, title: 'Network', description: "Broadband Internet connection"},
        {id:7, title: 'Storage', description: "15 GB available space"},
        {id:8, title: 'Sound Card', description: "DirectX Compatible"}
    ]
    return(
       <Container className="mt-3">
            <Row>
                <Col md = {4}>
                    <Image width={250} height={250} src={game.img} />
                </Col>
                <Col md = {4}>
                    <Form className="d-flex flex-column align-items-center">
                        <h2>{game.name}</h2>
                        <div className="d-flex align-items-center justify-content-center">
                            {game.rating}
                        </div>
                    </Form>
                </Col>
                <Col md = {4}>
                        <Card className="d-flex flex-column align-items-center justify-content-around"
                              style={{border: 0}}>
                            <h3>{game.price}</h3>
                            <Button variant = {"outline-dark"}>Buy</Button>
                        </Card>
                    </Col>
                </Row>
                <Row className="d-flex flex-column mt-3 m-1">
                    {description.map(info => 
                        <Row key={info.id}>
                            {info.title}: {info.description}
                        </Row>
                    )}
                </Row>
            
            
            
       </Container>
    )
}

export default GamePage;