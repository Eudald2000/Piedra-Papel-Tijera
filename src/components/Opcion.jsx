export const Opcion = ({ hacerClick, emoji }) => {
  return (
    <button onClick={hacerClick} className="boton">{emoji}</button>
  )
}
