import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const opciones = ['✊🏻', '✋🏻', '✌🏻']

  // Leer los puntos del localStorage al iniciar
  const [puntosJugador, setPuntosJugador] = useState(() =>
    Number(localStorage.getItem('puntosJugador')) || 0
  )
  const [puntosMaquina, setPuntosMaquina] = useState(() =>
    Number(localStorage.getItem('puntosMaquina')) || 0
  )

  const [jugador, setJugador] = useState('')
  const [maquina, setMaquina] = useState(opciones[Math.floor(Math.random() * opciones.length)])
  const [ganador, setGanador] = useState('')

  // Guardar los puntos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('puntosJugador', puntosJugador)
    localStorage.setItem('puntosMaquina', puntosMaquina)
  }, [puntosJugador, puntosMaquina])

  const manejarClick = (event) => {
    const eleccionJugador = event.target.innerText
    setJugador(eleccionJugador)
    const nuevaMaquina = opciones[Math.floor(Math.random() * opciones.length)]
    setMaquina(nuevaMaquina)
    const resultado = comprovarGanador(eleccionJugador, nuevaMaquina)
    setGanador(resultado)
    if (resultado === 1) setPuntosJugador(p => p + 1)
    if (resultado === 2) setPuntosMaquina(p => p + 1)
  }

  const reglas = {
    '✊🏻': '✌🏻',
    '✋🏻': '✊🏻',
    '✌🏻': '✋🏻'
  }

  const comprovarGanador = (jugador, maquina) => {
    if (jugador === maquina) return 0
    if (reglas[jugador] === maquina) return 1
    return 2
  }

  // Botón para reiniciar el juego y el marcador
  const reiniciarJuego = () => {
    setPuntosJugador(0)
    setPuntosMaquina(0)
    setJugador('')
    setMaquina(opciones[Math.floor(Math.random() * opciones.length)])
    setGanador('')
    localStorage.setItem('puntosJugador', 0)
    localStorage.setItem('puntosMaquina', 0)
  }

  return (
    <>
      <h1>JUEGO DEL PIEDRA PAPEL O TIJERA</h1>
      <div className='mensaje'>
        {ganador !== '' && (
          <h2>
            {ganador === 0 && 'Es un empate'}
            {ganador === 1 && '¡Has ganado!'}
            {ganador === 2 && '¡La máquina gana!'}
          </h2>
        )}
      </div>
      <div className='marcador'>
        <span>Jugador: {puntosJugador}</span>
        <span>Máquina: {puntosMaquina}</span>
      </div>
      <div className="tablero">
        <div className="contenedorJuego">
          <h2>Opcion maquina</h2>
          <div className="cuadroJuego">
            {jugador ? maquina : ''}
          </div>
        </div>
        <div className="vs">🆚</div>
        <div className="contenedorJuego">
          <h2>Opcion jugador</h2>
          <div className="cuadroJuego">
            {jugador}
          </div>
        </div>
      </div>
      <div className="contenedorBotones">
        <h2>Elige una opcion</h2>
        <div className="botones">
          <button onClick={manejarClick} className="boton">✊🏻</button>
          <button onClick={manejarClick} className="boton">✋🏻</button>
          <button onClick={manejarClick} className="boton">✌🏻</button>
        </div>
        <button className='reiniciar' onClick={reiniciarJuego}>Reiniciar</button>
      </div>
    </>
  )
}

export default App
