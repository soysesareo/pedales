import React from 'react'
import { useState, useContext } from 'react';
import { ProductContext, useProductContext } from '../context/ProductContext';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Dashboard = () => {

  const { user, createProduct } = useProductContext(ProductContext);

  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      brand, name, type, description, price, img,
      id: Date.now(),
      user: user.name
    }
    createProduct(newProduct)
  }

  /* const newProduct = {
    brand, name, type, description, price, img,
    id: Date.now(),
    user: user.name

  }
  createProduct(newProduct)
 */

  /* const handleSubmit = e => {
    e.preventDefault()
  } */

  (() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()




  return (
    <div className='dashboard'>
      <div className="dashboardCabecera">
        <h5 style={{ color: "#A72C38" }}>Tablero de Opciones</h5>
      </div>
      {/* <h6>{user ? "Usuario existe" : "Usuario no existe"}</h6> */}


      <br />
      <div className="dashboardUsuarioProductos">
        <h6 style={{ color: "#A72C38" }}>Edita tus datos {/* {user.name} */}</h6>
      </div>
      <br /><br />

      <div className="dashboardUsuarioProductos">
        <h6 style={{ color: "#A72C38" }}>Agrega productos a la venta</h6>
      </div>

      <form onSubmit={handleSubmit} className="dashboardAgregarProductos needs-validation novalidate">
        <div class="mb-3">
          <label class="form-label">Marca</label>
          <input /* style={{ width: "45%" }} */ type="text" class="form-control" placeholder='Escribe la marca del pedal' value={brand} onChange={e => setBrand(e.target.value)} required/>
        </div>
        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input /* style={{ width: "65%" }} */ type="text" class="form-control" placeholder='Escribe el modelo del pedal' value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div class="mb-3">
          <label class="form-label">Tipo</label>
          <input type="text" class="form-control" placeholder='¿Trémolo, Phaser, Compresor,...?' value={type} onChange={e => setType(e.target.value)} required/>
        </div>
        <div class="mb-3">
          <label class="form-label">Descripción</label>
          <textarea type="text" className="form-control" placeholder='Cuéntanos las gracias de tu pedal' value={description} onChange={e => setDescription(e.target.value)} required/>
        </div>
        <div class="mb-3">
          <label class="form-label">Precio</label>
          <input type="text" className="form-control" placeholder='¿Y de cuánto estamos hablando?' value={price} onChange={e => setPrice(e.target.value)} required/>
        </div>
        <div class="mb-3">
          <label class="form-label">Imagen</label>
          <input type="img" className="form-control" placeholder='Déjanos una imagen de tu pedal (url)' value={img} onChange={e => setImg(e.target.value)} required/>
        </div>
        <button type="submit" class="dashboardBotonEnviar btn btn-secondary">Agregar</button>
      </form>








      <br /><br />
      <Link className="logout-boton" to={`/Login `} >
        <Button
          variant="secondary"
          value="Reload Page"
          onClick="window.location.reload(true)"
        >Cerrar Sesión</Button>
      </Link>
      <br />
    </div>
  )
}

export default Dashboard