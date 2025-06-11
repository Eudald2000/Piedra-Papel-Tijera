export const Mensaje = ({ esGanador }) => {
  return (
    <div className='mensaje'>
        {esGanador !== '' && (
          <h2>
            {esGanador === 0 && 'Es un empate'}
            {esGanador === 1 && '¡Has ganado!'}
            {esGanador === 2 && '¡La máquina gana!'}
          </h2>
        )}
      </div>
  )
}
