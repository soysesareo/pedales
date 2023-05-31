import React from 'react'
import { ProductContext, useProductContext } from '../context/ProductContext'
import { createContext } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';

const Favoritos = () => {

  const { pedales, favorites } = useProductContext(ProductContext);
  console.log(favorites);
  console.log(pedales);
  return (
    <div className="favoritos">
      <div className="login-texto">
        <h5 style={{ color: '#A72C38', textAlign: 'center' }}>Somos la comunidad de los pedales usados</h5>
        <h6 style={{ color: '#A72C38', textAlign: 'center' }}>Estos son tus pedales favoritos</h6>
      </div>
      {
        favorites.map((pedal) => (
          <Card className="favoritos-tarjetas" key={pedal.id}>
            <div className="favoritos-imagen"><Card.Img variant="top" style={{ height: "240px", width: "240px" }} src={pedal.img} alt={pedal.name} /></div>
            <div className="favoritos-modelo-precio">
              <Card.Title>{pedal.brand} {pedal.name}</Card.Title>
              <Card.Text>{pedal.description}</Card.Text>
              <Card.Text>Precio: ${pedal.price}</Card.Text>
              
              <Button variant='secondary'>Eliminar</Button>
            </div>
          </Card>
        ))
      }
      <br /><br />
      {favorites.length === 0 && <h6 style={{ color: '#A72C38', textAlign: 'center' }}>...aunque aún no tienes ninguno</h6>}


    </div>
  )
}

export default Favoritos