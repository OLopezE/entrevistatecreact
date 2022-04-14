import React, {useState, useEffect} from 'react'
import {Col, Row} from 'reactstrap'
import Table from './Table.jsx'

import ViewOrder from './ViewOrder.jsx'

import './HomeView.css'


export default function HomeView() {
  const [number, setNumber] = useState("")
  const [itemList, setItemList] = useState([])
  const [orderSelected, setOrderSelected] = useState(false)


  return (
    <div>
        <Row>
          
            <Col className="tabla"sm={{
        offset: 1,
        size: 'auto'
      }}><br></br>
                <Table setNumber = {setNumber} setItemList={setItemList} itemList = {itemList} setOrderSelected={setOrderSelected} />
            </Col>
            <Col md={{
        offset: 1,
        size: '6'
      }}>
              <ViewOrder className="tabla" numero = {number} itemList = {itemList} setItemList={setItemList} orderSelected={orderSelected}/>
            </Col>
        </Row>
    </div>
  )
}
