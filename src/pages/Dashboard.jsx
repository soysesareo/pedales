import React from 'react'
import { useContext } from 'react';
import { ProductContext, useProductContext } from '../context/ProductContext';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Dashboard = () => {

  const { user } =  useProductContext(ProductContext);

  /* const { users } = useProductContext(ProductContext);
  console.log(users); */

  return (
    <div className='dashboard'>
      <h5 style={{ color: "#A72C38"}}>Tablero de Opciones</h5>
      <h6>{user ? "Usuario existe" : "Usuario no existe"}</h6>



      <div className="dashboardUsuario">
        <h6>Estos son tus datos {user.name}</h6>
        
      </div>
      
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