import React, {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import {createCategory} from "../http/gameAPI"

export default function CreateCategory({show, onHide}) {
  
  const [value, setValue] = useState('')

  const addCategory = () => {
      createCategory({name: value}).then(data => {
          setValue('')
          onHide()
      })
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
          Add new Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Form>
                <Form.Control 
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  placeholder='Category name' />
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={addCategory}>Add</Button>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
