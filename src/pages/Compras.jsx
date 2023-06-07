import React from 'react'
import { useState, useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ProductContext, useProductContext } from '../context/ProductContext'

const Compras = () => {

  const { compras, setCompras, addPedal } = useProductContext(ProductContext);
  console.log(compras);



  return (
    <div>
      <div className="compras">
        <h5 className="compras-titulo">Éste es tu carro de compras</h5>
        {/* <p>Acá están tus compras</p> */}
        <div /* className="compras-tarjeta" */>
          {
            compras.map((pedal, id) => (
              <div className="compras-tarjeta" key={id}>
                <img height={"185px"} src={pedal.img} alt={pedal.name} />
                <h6>{pedal.brand}</h6>
                <h6>{pedal.name}</h6>
                <h6>${pedal.price}</h6>
              </div>
            ))
          }
          {compras.length === 0 && <h6 style={{ color: '#A72C38', textAlign: 'center' }}></h6>}
        </div>
        {/*  <Link to="/"><Button>Inicio</Button></Link> */}
        <br /><br />
        <Link className="logout-boton" /* to={`/Login `} */ >
          <Button
            variant="secondary"
            value="Reload Page"
          /* onClick="window.location.reload(true)" */
          >Pagar</Button>
        </Link>
        <br />
      </div>
    </div>
  )
}

export default Compras