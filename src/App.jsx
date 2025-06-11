import { useState, useEffect } from 'react'
import './App.css'
import { Mensaje } from './components/Mensaje'
import { Marcador } from './components/Marcador'
import { ContenedorBotones } from './components/ContenedorBotones'
import { Tablero } from './components/Tablero'

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

  const handleClick = (event) => {
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
  const restartGame = () => {
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
      <h1>JUEGO DEL PIEDRA, PAPEL O TIJERA</h1>
      <Mensaje esGanador={ganador}/>
      <Marcador Jugador={puntosJugador} Maquina={puntosMaquina}/>
      <Tablero player={jugador} machine={maquina}/>
      <ContenedorBotones manejarClick={handleClick} reiniciarJuego={restartGame}/>
    </>
  )
}

export default App
