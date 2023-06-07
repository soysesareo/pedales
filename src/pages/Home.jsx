import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext, useProductContext } from '../context/ProductContext'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import Newsletter from './Newsletter';
import Buscador from './Buscador';
import Filtros from './Filtros';


const Home = () => {
  const { pedales, ordenar, busqueda, handleSelect, value, setValue, searchPedal, setPedales, addPedal, favorites, addFavorites } = useProductContext(ProductContext);
  /* const handleAddPedal = (pedales) => {
    addPedal(pedales);
    setPedalesFiltrados(pedales);
  }; */



  console.log(pedales);



  return (
    <>

      {/* <Container className="container"> */}
      <div className='busquedaFiltro'>
        <Buscador />
        <div className='busquedaFiltroMarca'>
          {/* <FiltrosMarca /> */}
          <Filtros />
        </div>
      </div>

      {/* <div className="selector">
        <select onChange={(e) => {ordenar(e.target.value);}}>
          <option value="default" disabled>Ordenar por:</option>
          <option value="menorprecio">Precio: menor a mayor</option>
          <option value="mayorprecio">Precio: mayor a menor</option>
          <option value="marcaasc">Alfabeticamente: A-Z</option>
          <option value="marcades">Alfabeticamente: Z-A</option>
        </select>
      </div> */}

      
      <div className='grilla'> {



        pedales.filter((pedal) => {
          if (busqueda === "") {
            return pedal;
          } else if (
            pedal.name.toLowerCase().includes(busqueda.toLowerCase())
            || pedal.brand.toLowerCase().includes(busqueda.toLowerCase())
            || pedal.type.toLowerCase().includes(busqueda.toLowerCase())

          ) {
            return pedal;
          }
        })
          .map((pedal) => (
            <Card key={pedal.id} style={{ width: '17rem' }}>
              <Card.Title className="tarjeta-titulo">{pedal.brand} {pedal.name}</Card.Title>
              <Card.Img variant="top" src={pedal.img} alt={pedal.name} />
              <Card.Body>
                {/* <Card.Title>{pedal.brand} {pedal.name} </Card.Title> */}
                <Card.Text className="tarjeta-precio">
                  {/* {pedal.description} */}
                  ${pedal.price}
                </Card.Text>

                <div className="botones-favoritos">
                  {/* <Link className="boton-detalles" to={`/detalles `}> */}
                  <Button
                    variant="success"
                    onClick={() => addFavorites(pedal)}
                    disabled={favorites.some((item) => item.id === pedal.id)}
                  >Favoritos
                  </Button>
                  {/* </Link> */}

                  {/* <Image
                    className="corazon-favorito"
                    src="/heart-svgrepo-com.svg"
                    fluid rounded 
                    onClick={() => addFavorites(pedal)}
                    /> */}

                  <Link className="boton-comprar" to={`/compras `} >
                    <Button
                      variant="success"
                      onClick={() => addPedal(pedal)}
                    >Comprar</Button>
                  </Link>
                </div>
              </Card.Body>
              <br /><br />
            </Card>
          ))
      }
      </div>
      {/* </Container> */}
      {/* <Clientes /> */}
      <Newsletter />
      {/* <Section /> */}
    </>
  )
}

export default Home