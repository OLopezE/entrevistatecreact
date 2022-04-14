import React, {useState, useEffect} from 'react'
import { Row,Col,Table, Button, Alert } from 'reactstrap'
import NewOrder from './NewOrder'

export default function ViewOrder(props) {

    const [newItems, setNewItems] = useState([])
    const [pagar, setPagar] = useState(false)

    const mapNewItems = newItems.map(item =>{
        return(
            <tr>
            <td>
            {item.name}
            </td>
            <td>
            {item.sku}
            </td>
            <td>
            {item.quantity}
            </td>
            <td>
            {item.price}
            </td>      
        </tr>
        )
    })

    const mapitems = props.itemList.map(item =>{
        return(
        <tr>
            <td>
            {item.name}
            </td>
            <td>
            {item.sku}
            </td>
            <td>
            {item.quantity}
            </td>
            <td>
            {item.price}
            </td>      
        </tr>
            
        )
    })
    


  return (
    <div>
        <br></br>

        <Row>
            <Col>
            <h4>Información de la Orden {props.numero} </h4>
            </Col>
        </Row>
        <Table bordered>
            <thead>
                <tr>
                    <th>
                        Nombre:
                    </th>
                    <th>
                        SKU:
                    </th>
                    <th>
                        Precio:
                    </th>
                    <th>
                        Cantidad:
                    </th>
                </tr>
            </thead>
            <tbody>
            {mapitems}
            {mapNewItems}
            </tbody>
        </Table>
        
        <Row>
            <Col>
                <NewOrder setNewItems = {setNewItems} newItems = {newItems} orderSelected = {props.orderSelected}/>
            </Col>
            <Col>
                <Button onClick={()=>setPagar(true)} style={{visibility: props.orderSelected ? 'visible' : 'hidden' }}>Pagar</Button>
            </Col>
        </Row>
        <br/>
        <Alert color='success'style={{visibility: pagar ? 'visible' : 'hidden' }}>Su compra ha sido exitosa</Alert>

        
        

    </div>
  )
}
