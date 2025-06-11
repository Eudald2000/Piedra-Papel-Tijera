import { Opcion } from './Opcion'

export const ContenedorBotones = ({ manejarClick, reiniciarJuego }) => {
  return (
    <div className="contenedorBotones">
        <h2>Elige una opcion</h2>
        <div className="botones">
          <Opcion hacerClick={manejarClick} emoji={'✊🏻'}/>
          <Opcion hacerClick={manejarClick} emoji={'✋🏻'}/>
          <Opcion hacerClick={manejarClick} emoji={'✌🏻'}/>
        </div>
        <button className='reiniciar' onClick={reiniciarJuego}>Reiniciar</button>
      </div>
  )
}
