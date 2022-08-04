import { Play } from 'phosphor-react'
export function Sidebar() {
  return (
    <div>
      <h3>Nova tarefa</h3>
      <form action="">
        <label htmlFor="title">Titúlo</label>
        <input type="text" id="title" placeholder="Titúlo" />
        <label htmlFor="description">Descrição</label>
        <input type="text" id="title" placeholder="Descrição" />
        <label htmlFor="date">Data</label>
        <input type="date" id="date" />
        <label htmlFor="time">Tempo</label>
        <input type="number" id="time" placeholder="Duração" />

        <button type="submit">
          Adicionar
          <Play size={18} />
        </button>
      </form>
    </div>
  )
}
