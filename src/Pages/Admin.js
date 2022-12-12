import React, {useState} from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateCategory from '../Modals/CreateCategory'
import CreateGame from '../Modals/CreateGame'

export default function Admin() {
  
  const [CategoryVisible, setCategoryVisible] = useState(false)
  const [GameVisible, setGameVisible] = useState(false)
  
  return (
    <Container className='d-flex flex-column'>
        <Button variant='outline-dark' className='mt-2 p-2'
            onClick={() => setCategoryVisible(true)}
         >Add Category</Button>
        <Button variant='outline-dark' className='mt-2 p-2'
            onClick={() => setGameVisible(true)}
        >Add Game</Button>
    
        <CreateCategory show={CategoryVisible} onHide={() => setCategoryVisible(false)} />
        <CreateGame show={GameVisible} onHide={() => setGameVisible(false)}/>
    </Container>
  )
}
