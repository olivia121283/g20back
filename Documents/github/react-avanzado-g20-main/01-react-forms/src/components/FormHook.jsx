import { useState, useEffect } from 'react'
import useForm from '../hooks/useForm'
import logo from '../assets/react.svg'

const FormHook = () => {
  // Paso 1: Crear un unico estado con toda la información en forma de objeto.
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    edad: 0,
    genero: '',
    email: '',
    password: '',
    otro: ''
  })

  // Paso 2: Voy a simular traer datos de una API y prellenar el formulario con esos datos.
  useEffect(() => {
    setTimeout(() => {
      const info = {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 25,
        genero: 'M',
        email: 'juanperez@gmail.com',
        password: 'gatito123',
        otro: 'Otro'
      }
      setDatos(info)
    }, 5000)
  }, [])

  // Paso 3: Voy a crear la función que se va a ejecutar cuando haga clic en el botón de enviar.
  const sendData = (data) => {
    console.log('Datos enviados: ', data)
  }

  // Paso 4: Ahora si, usar nuestro custom hook para manejar el formulario.
  const { input, handleInputChange, handleSubmit } = useForm(sendData, datos)

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form onSubmit={handleSubmit}>
          <label htmlFor='nombre'>Nombre</label>
          <input type='text' name='nombre' placeholder='Tu nombre' id='nombre' value={input.nombre} onChange={handleInputChange} />

          <label htmlFor='apellido'>Apellido</label>
          <input type='text' name='apellido' placeholder='Tu Apellido' id='apellido' value={input.apellido} onChange={handleInputChange} />

          <label htmlFor='otro'>Otro</label>
          <input type='text' name='otro' placeholder='Tu Otro' id='otro' value={input.otro} onChange={handleInputChange} />

          <label htmlFor='edad'>Edad</label>
          <input type='number' name='edad' placeholder='Tu edad' id='edad' value={input.edad} onChange={handleInputChange} />

          <label htmlFor='genero'>Genero</label>
          <select name='genero' id='genero' value={input.genero} onChange={handleInputChange}>
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>

          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='correo@mail.com' id='email' value={input.email} onChange={handleInputChange} />

          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' value={input.password} onChange={handleInputChange} />
          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}
export default FormHook