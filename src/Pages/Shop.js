import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import CategoryBar from "../Components/CategoryBar";
import GameList from "../Components/GameList";

const Shop = () => {
    return(
        <Container>
           <Row className="mt-2">
                <Col md = {3}>
                    <CategoryBar />
                </Col>
                <Col md = {9}>
                    <GameList />
                </Col>
           </Row>
        </Container>
    )
}

export default Shop;