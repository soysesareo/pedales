import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { useProductContext } from '../context/ProductContext'
import { ProductContext } from '../context/ProductContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Detalles = () => {

  const params = useParams();
  const { pedales, addPedal } = useProductContext();

  const pedalSeleccionado = (id) => pedales.find((pedal) => pedal.id === id);
  const pedal = pedalSeleccionado(params.id);

  const handleAddPedal = (pedal) => {
    addPedal(pedal);
  }
  console.log(pedal)

  return (
    <div className="detalles">
      <div className="login-texto">
        <h5 style={{ color: '#A72C38', textAlign: 'center' }}>Somos la comunidad de los pedales usados</h5>
        {/* <h6 style={{ color: '#A72C38', textAlign: 'center' }}>Déjanos tu mensaje</h6>
          <p>Conoce los detalles de tus pedales</p>
          <h6 style={{ color: '#A72C38', textAlign: 'center' }}>Te contactaremos a la brevedad posible</h6> */}
        <br />
      <Link to="/"><Button variant="secondary">Volver</Button></Link>
      </div>



    </div>
  )
}

export default Detalles