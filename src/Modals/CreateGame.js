import React, { useContext, useState} from 'react'
import {Row, Col, Modal, Button, Form, Dropdown } from 'react-bootstrap'
import { Context } from '../index'


export default function CreateGame({show, onHide}) {
    
    const {game} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title:"", description:"", number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number ))
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
                    <Dropdown.Toggle>Choose category</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {game._categories.map(category =>
                            <Dropdown.Item key = {category.id}>{category.name}</Dropdown.Item>
                            )}
                    </Dropdown.Menu>
               </Dropdown>
               <Form.Control
                    className='mt-3' 
                    placeholder='Game name' />  
               <Form.Control
                    className='mt-3' 
                    placeholder='Game price' /> 
                <Form.Control
                    className='mt-3' 
                    placeholder='Game image'
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
                                             placeholder='Name of requirement' />
                                        </Col>
                                        <Col md={4}>
                                            <Form.Control
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
        <Button variant='outline-success' onClick={onHide}>Add</Button>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
