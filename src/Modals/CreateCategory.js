import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export default function CreateCategory({show, onHide}) {
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
                <Form.Control placeholder='Category name' />
            </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={onHide}>Add</Button>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
