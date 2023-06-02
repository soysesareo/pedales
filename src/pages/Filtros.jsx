import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from 'react-bootstrap';

import { ProductContext, useProductContext } from '../context/ProductContext'

const Filtros = () => {

  const { pedales, ordenar, handleSelect, value, setValue } = useProductContext(ProductContext);



  /* useEffect(() => {
    handleSelect();
  }, []); */


  /*  const handleAscPrice = () => {
      setFiltroOrdenarPrecio(e.target.value);
    }; */


  /* ordenar precios menor a mayor */
  /* pedales.sort((a, b) => {
    if (a.price == b.price) {
      return 0;
    }
    if (a.price < b.price) {
      return -1;
    }
    return 1
  })
  console.log(pedales) */

  /* ordenar precios mayor a menor */
  /* pedales.sort((c, d) => {
     if (c.price == d.price) {
       return 0;
     }
     if (c.price > d.price) {
       return -1;
     }
     return 1
   })
   console.log(pedales) */

  /* ordenar marcas ascendente */
  /* pedales.sort((e, f) => {
     if (e.brand.toLowerCase() == f.brand.toLowerCase()) {
       return 0;
     }
     if (e.brand.toLowerCase() < f.brand.toLowerCase()) {
       return -1;
     }
     return 1
   })
   console.log(pedales) */

  /* ordenar marcas descendente */
  /* pedales.sort((e, f) => {

    if (e.brand.toLowerCase() == f.brand.toLowerCase()) {
      return 0;
    }
    if (e.brand.toLowerCase() > f.brand.toLowerCase()) {
      return -1;
    }
    return 1
  })
  console.log(pedales) */

  /* const numAscending = [...pedales].sort((a, b) => a.price - b.price);
  console.log(numAscending);

  const numDescending = [...pedales].sort((a, b) => b.price - a.price);
  console.log(numDescending);

  const strAscending = [...pedales].sort((a, b) => a.brand.toLowerCase() > b.brand.toLowerCase() ? 1 : -1,);
  console.log(strAscending);

  const strDescending = [...pedales].sort((a, b) => a.brand.toLowerCase() > b.brand.toLowerCase() ? -1 : 1,);
  console.log(strDescending); */

  return (

    <div className="filtros">

      {/* <Button
        variant="secondary"
      >Ordenar Menor Precio
      </Button> */}


      {/* <p>Filtrar</p> */}
      {/* <DropdownButton
        variant="outline-secondary"
        id="button-addon2"
        title="Ordenar pedales por: desde Filtros"
        onSelect={handleSelect}
      >

        <Dropdown.Item
          eventKey="menorprecio"
        >Menor precio</Dropdown.Item>
        <Dropdown.Item
          eventKey="mayorprecio"
        >Mayor precio</Dropdown.Item>
        <Dropdown.Item
          eventKey="marcaasc"
        >Marca ascendente</Dropdown.Item>
        <Dropdown.Item
          eventKey="marcades"
        >Marca descendente</Dropdown.Item>
      </DropdownButton> */}
      {/* <h4>You selected {value}</h4> */}

      {/* este selector si funciona */}
      <div className="selector">
        <select
          class="btn btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onChange={(e) => { ordenar(e.target.value); }}>
          <option value="default">Ordenar pedales por desde Filtros</option>
          <option value="menorprecio">Precio: menor a mayor</option>
          <option value="mayorprecio">Precio: mayor a menor</option>
          <option value="marcaasc">Marcas: ascendente</option>
          <option value="marcades">Marcas: descendente</option>
        </select>
      </div>

      {/* <div className="dropdown">
        <select
          class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
          onChange={(e) => { ordenar(e.target.value); }}>
          <option value="default">Copia</option>
          <option value="menorprecio">Precio: menor a mayor</option>
          <option value="mayorprecio">Precio: mayor a menor</option>
          <option value="marcaasc">Marcas: ascendente</option>
          <option value="marcades">Marcas: descendente</option>
        </select>
      </div> */}


    </div>
  )
}

export default Filtros