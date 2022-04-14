import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import {Button, Table, Row, Col} from 'reactstrap' 
import NewOrder from './NewOrder.jsx'
import ViewOrder from './ViewOrder.jsx'

const AuthStr = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'

const OrderTable = params => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [ordenes, setOrdenes] = useState([]);


    useEffect(()=>{
        fetch(' https://eshop-deve.herokuapp.com/api/v2/orders', { 'headers': { 'Authorization': AuthStr } })
        .then(res => res.json())
        .then(
        (result) => {
          setIsLoaded(true);
          setOrdenes(result.orders);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    }, [ordenes.length]);

    const temp = (n) =>{
      params.setItemList(n.items)
      params.setNumber(n.name)
      params.setOrderSelected(true)
    }

    const mapRows = ordenes.map((orden) => {
        return(
            <tr>
                <td>
                    #{orden.number}
                </td>
                <td>
                    <Button onClick={()=>temp(orden)}>Ver Información</Button>
                </td>
            </tr>

        )
    })


    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (

            <div>
              <h4>Lista de ordenes</h4>

              <Table hover>
                <thead>
                    <tr>
                        <th># Number</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                        {mapRows}
                </tbody>
              </Table>
          </div>

          
        );
      }

}

export default OrderTable;

