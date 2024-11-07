import { useState } from 'react';
import './App.css'
import Card from './components/Card'
import styles from './styles/Card.module.css'

function App() {
  const [user, setUser] = useState({
    mascota: "",
    dueño: ""
  });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    let regex = /^(?!\s)/;
    if (
      user.mascota.length > 2 &&
      regex.test(user.mascota) &&
      user.dueño.length > 5) {
      setMostrar(true)
      setError(false)
    } else {
      setError(true);
      setMostrar(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label >Nombre de su mascota</label>
        <input
          type="text"
          onChange={(event) => setUser({ ...user, mascota: event.target.value })} />
        <label >Nombre completo del dueño</label>
        <input
          type="text"
          onChange={(event) => setUser({ ...user, dueño: event.target.value })} />
        <button>Enviar</button>
        {error ?
          <h4 style={{ color: "red" }}>“Por favor chequea que la información sea correcta”.</h4> : null}
      </form>
      {mostrar ?
        <Card usuario={user} /> :
        null
      }
    </>
  )
}

export default App
