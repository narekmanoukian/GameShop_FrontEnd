import React, {useContext, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap"
import CategoryBar from "../Components/CategoryBar";
import GameList from "../Components/GameList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchGames, fetchCategories } from "../http/gameAPI";
import Pages from "../Components/Pages"

const Shop = observer(() => {
    const {game} = useContext(Context)

    useEffect(() => {
        fetchCategories().then(data => game.setCategories(data))
        fetchGames(null, null, 1, 2).then(data => {
            game.setGames(data.rows)
            game.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchGames(game.selectedCategory.id, game.page, 2).then(data => {
            game.setGames(data.rows)
            game.setTotalCount(data.count)
        })
    }, [game.page, game.selectedCategory])
    return(
        <Container>
           <Row className="mt-2">
                <Col md = {3}>
                    <CategoryBar />
                </Col>
                <Col md = {9}>
                    <GameList />
                    <Pages />
                </Col>
           </Row>
        </Container>
    )
})

export default Shop;