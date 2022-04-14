import React, {useState} from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Alert} from 'reactstrap'

export default function NewOrder(params) {


  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const [order, setOrder] = useState(false);
  const [nombre, setNombre] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  

  const toggle = () => {
    setModal(!modal);
    setAlert(false)
    setNombre("");
    setSku("");
    setPrice("");
    setQty("");

  }

  const addItem = () =>{
    if (nombre !== "" && nombre !== null && sku !== "" && sku !== null && price !== "" && price !== null && qty !== "" && qty !== null ){
      const temp = {
        'name': nombre,
        'sku': sku,
        "price": price,
        "quantity": qty
      }
      console.log(temp)
      params.setNewItems([...params.newItems, temp])
      toggle()
  
    }else{
      setAlert(true)
    }
  }


  return (
    <div>
      <Button color='dark' onClick={toggle} style={{visibility: params.orderSelected ? 'visible' : 'hidden' }}>+</Button>

      <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Nuevo item</ModalHeader>
              <ModalBody>
              <Form>
                  <FormGroup>
                    <label id="textoModal">Nombre:</label>
                    <Input
                      type="text"
                      name="Nombre"
                      placeholder="Nombre"
                      required = {true}
                      onChange={(e)=>setNombre(e.target.value)}
                    >{"Hola"}</Input>
                  </FormGroup>
                  <FormGroup>
                    <label id="textoModal">Sku:</label>
                    <Input
                      type="text"
                      name="sku"
                      placeholder="sku"
                      required
                      onChange={(e)=>setSku(e.target.value)}
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <label id="textoModal">Precio:</label>
                    <Input
                      type="number"
                      name="price"
                      placeholder="$$$"
                      onChange={(e)=>setPrice(e.target.value)}
                      required
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <label id="textoModal">Cantidad:</label>
                    <Input
                      type="number"
                      name="cantidad"
                      placeholder="cantidad"
                      onChange={(e)=>setQty(e.target.value)}
                      required
                    ></Input>
                  </FormGroup>
                </Form>
              <Alert color='danger' style={{visibility: alert ? 'visible' : 'hidden' }}>
                Falta información
              </Alert>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>addItem()} >
                  Agregar
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>
    </div>
    
  )
}
