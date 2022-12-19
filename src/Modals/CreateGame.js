import React, { useContext, useState, useEffect } from 'react'
import {Row, Col, Modal, Button, Form, Dropdown } from 'react-bootstrap'
import { Context } from '../index'
import {createGame, fetchCategories} from "../http/gameAPI"
import { observer } from 'mobx-react-lite'


const CreateGame = observer(({show, onHide}) => {
    
  const {game} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchCategories().then(data => game.setCategories(data))
       }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addGame = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('categoryId', game.selectedCategory.id)
        formData.append('info', JSON.stringify(info))
        createGame(formData).then(data => onHide())
    }



    return (
    <Modal
      show = {show}
      onHide = {onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new game
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Form>
               <Dropdown>
                    <Dropdown.Toggle>{game.selectedCategory.name || "Choose Category"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {game._categories.map(category =>
                            <Dropdown.Item 
                            key = {category.id}
                            onClick={() => game.setSelectedCategory(category)}
                            >
                            {category.name}</Dropdown.Item>
                            )}
                    </Dropdown.Menu>
               </Dropdown>
               <Form.Control
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className='mt-3' 
                    placeholder='Game name' />  
               <Form.Control
                    value={price}
                    onChange={e => setPrice(Number(e.target.value))}
                    className='mt-3' 
                    placeholder='Game price' /> 
                <Form.Control
                    className='mt-3' 
                    onChange={selectFile}
                    type = "file" /> 
                <hr />           
                <Button 
                variant='outline-dark'
                onClick={addInfo}
                        >
                    Add System Requirements</Button>         
                            
                            {info.map(i => 
                                    <Row className='mt-2'key={i.number}>
                                        <Col md={4}>
                                            <Form.Control
                                             value={i.title}
                                             onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                             placeholder='Name of requirement' />
                                        </Col>
                                        <Col md={4}>
                                            <Form.Control
                                             value={i.description}
                                             onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                             placeholder='Description' />
                                        </Col>
                                        <Col md={4}>
                                            <Button
                                                onClick={() => removeInfo(i.number)}
                                                variant='outline-danger'>Delete</Button>
                                        </Col>
                                    </Row>
                            )}
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={addGame}>Add</Button>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
})

export default CreateGame
