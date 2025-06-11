export const Tablero = ({ player, machine }) => {
  return (
    <div className="tablero">
        <div className="contenedorJuego">
          <h2>Opcion maquina</h2>
          <div className="cuadroJuego">
            {player ? machine : ''}
          </div>
        </div>
        <div className="vs">🆚</div>
        <div className="contenedorJuego">
          <h2>Opcion jugador</h2>
          <div className="cuadroJuego">
            {player}
          </div>
        </div>
      </div>
  )
}
