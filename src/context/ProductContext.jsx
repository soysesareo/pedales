import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import Detalles from "../pages/Detalles";


export const ProductContext = createContext()

export default function ProductProvider({ children }) {



  const [users, setUsers] = useState([])
  /* const getUsers = async () => {
    const res = await fetch('users.json');
    const data = await res.json();
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []); */

  const getUsers = async () => {
    const res = await fetch('users.json');
    const users = await res.json();
    return users;
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [favorites, setFavorites] = useState([]);
  const addFavorites = (pedal) => {
    setFavorites([...favorites, pedal]);
  };

  const deleteFavorites = (id) => {
    const newFavorites = favorites.filter((pedal) => pedal.id !== id);
    setFavorites(newFavorites);
  };

  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const users = await getUsers();

    const user = users.find(
      (user) => user.email === email && password === user.password);
    console.log(user);
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }
    return user;
  };

  const register = (user) => {
    setUser(user)
  };


  const [busqueda, setBusqueda] = useState("");




  /* No utilicé localStorage, así que reemplacé el logout */
  /* const logout = () => { }; */


  /* hook para busqueda */
  const [pedales, setPedales] = useState([]);

  const getPedales = async () => {
    const res = await fetch('pedales.json');
    const data = await res.json();
    setPedales(data);
  };
  useEffect(() => {
    getPedales();
  }, []);

  /* Implementacion Carrito */
  const [compras, setCompras] = useState([
    {
      /* brand: "Boss", */
      price: "$49990",
      name: "DS-1",

    }
  ]);

  const addPedal = (pedales) => {
    setCompras([...compras, pedales])
  }

  const [usuariosFiltrados, setUsuariosFiltrados] = ([]);
  const [search, setSearch] = ("");



  /* Implementacion Tarjetas Clientes */
  const [clientes, setClientes] = useState([]);
  const getClientes = async () => {
    const res = await fetch('clientes.json')
    const data = await res.json();
    setClientes(data);
  };

  useEffect(() => {
    getClientes();
  }, []);

  /* console.log(clientes); */

  /* Implementación Buscador */

  /* Implementación Ordenar */


  const [value, setValue] = useState('');
  const handleSelect = (e) => {
    console.log(e);
    setValue(e)
  }


  function ordenar(e) {
    switch (e) {
      case "menorprecio":
        pedales.sort((a, b) => {
          if (a.price == b.price) {
            return 0;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 1
        })
        setPedales([...pedales]);
        break;
      case "mayorprecio":
        pedales.sort((a, b) => {
          if (a.price == b.price) {
            return 0;
          }
          if (a.price > b.price) {
            return -1;
          }
          return 1
        })
        setPedales([...pedales]);
        break;
      case "marcaasc":
        pedales.sort((e, f) => {
          if (e.brand.toLowerCase() == f.brand.toLowerCase()) {
            return 0;
          }
          if (e.brand.toLowerCase() < f.brand.toLowerCase()) {
            return -1;
          }
          return 1
        })
        setPedales([...pedales]);
        break;
      case "marcades":
        pedales.sort((e, f) => {
          if (e.brand.toLowerCase() == f.brand.toLowerCase()) {
            return 0;
          }
          if (e.brand.toLowerCase() > f.brand.toLowerCase()) {
            return -1;
          }
          return 1
        })
        setPedales([...pedales]);
        break;
      default:
      case "default":
        pedales.sort((a, b) => {
          if (a.id == b.id) {
            return 0;
          }
          if (a.id < b.id) {
            return -1;
          }
          return 1
        })
        setPedales([...pedales]);
        break;
        console.log(`Sorry, we are out of ${e}.`);
    }
  }




  return (
    <ProductContext.Provider value={{ user: user, users, ordenar, handleSelect, value, setValue, favorites, addFavorites, deleteFavorites, login, register, busqueda, setBusqueda, pedales, setPedales, compras, setCompras, addPedal, clientes, setClientes, usuariosFiltrados: usuariosFiltrados, setUsuariosFiltrados, search: search, setSearch }}>
      {children}
    </ProductContext.Provider>

  );
}
export const useProductContext = () => useContext(ProductContext);