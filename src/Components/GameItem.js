import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom"
import { GAME_ROUTE } from '../Utils/Consts'

const GameItem = ({game}) => {
    const navigate = useNavigate()
    console.log(navigate)
    return (
        <Col md = {3} className={"mt-5"} onClick = {() => navigate(GAME_ROUTE + '/' + game.id)}>
            <Card style = {{width: 150, cursor: "pointer"}} border={"light"}>
                <Image width={150} height={150} src={game.img} />
                <div className='mt-2 d-flex justify-content-between align-items-center'>
                    <div>{game.name}</div>
                    <div>
                        <div>
                            {game.rating}
                            
                        </div>

                    </div>
                </div>
            </Card>
        </Col>
  )
}

export default GameItem