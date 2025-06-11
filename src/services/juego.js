export const reglas = {
  '✊🏻': '✌🏻',
  '✋🏻': '✊🏻',
  '✌🏻': '✋🏻'
}

export function comprobarGanador (jugador, maquina) {
  if (jugador === maquina) return 0
  if (reglas[jugador] === maquina) return 1
  return 2
}
