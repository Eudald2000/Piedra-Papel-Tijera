import { useState } from 'react'
import './App.css'
import { Mensaje } from './components/Mensaje'
import { Marcador } from './components/Marcador'
import { ContenedorBotones } from './components/ContenedorBotones'
import { Tablero } from './components/Tablero'
import { comprobarGanador } from './services/juego'
import { useLocalStorage } from './hooks/useLocalStorage'

function App () {
  const opciones = ['✊🏻', '✋🏻', '✌🏻']

  const [puntosJugador, setPuntosJugador] = useLocalStorage('puntosJugador', 0)
  const [puntosMaquina, setPuntosMaquina] = useLocalStorage('puntosMaquina', 0)

  const [jugador, setJugador] = useState('')
  const [maquina, setMaquina] = useState(opciones[Math.floor(Math.random() * opciones.length)])
  const [ganador, setGanador] = useState('')

  const handleClick = (event) => {
    const eleccionJugador = event.target.innerText
    setJugador(eleccionJugador)
    const nuevaMaquina = opciones[Math.floor(Math.random() * opciones.length)]
    setMaquina(nuevaMaquina)
    const resultado = comprobarGanador(eleccionJugador, nuevaMaquina)
    setGanador(resultado)
    if (resultado === 1) setPuntosJugador(p => p + 1)
    if (resultado === 2) setPuntosMaquina(p => p + 1)
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
