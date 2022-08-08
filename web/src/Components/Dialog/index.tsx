import Modal from 'react-modal'
import axios from 'axios'
import { FormEvent, useState, ChangeEvent } from 'react'
import { ModalContainer } from './styles'
import type { ICard } from '../../@types/card'

interface DialogProps {
  isOpen: boolean
  onRequestClose: () => void
  content: ICard
  handleUpdateAfterEdit: () => void
}

export function Dialog({
  isOpen,
  onRequestClose,
  content,
  handleUpdateAfterEdit,
}: DialogProps) {
  const [salveEditeCard, setSalveEditeCard] = useState({
    id: content.id,
    title: content.title,
    description: content.description,
    date: content.date,
    time: content.time,
  })
  function handleSalveEdit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    axios
      .put('http://localhost:3001/edit', {
        id: salveEditeCard.id,
        title: salveEditeCard.title,
        description: salveEditeCard.description,
        date: salveEditeCard.date,
        time: salveEditeCard.time,
      })
      .then(() => {
        handleUpdateAfterEdit()
      })
    onRequestClose()
  }

  const handleChangeModal = (event: ChangeEvent<HTMLInputElement>) => {
    setSalveEditeCard((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }))
  }
  Modal.setAppElement('#root')
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ModalContainer>
        <h2>Edite</h2>
        <form onSubmit={handleSalveEdit}>
          <input
            type="text"
            name="title"
            placeholder="Edite o Titulo"
            defaultValue={content.title}
            onChange={handleChangeModal}
          />
          <input
            type="text"
            name="description"
            placeholder="Edite a Descrição"
            defaultValue={content.description}
            onChange={handleChangeModal}
          />

          <input type="date" name="date" onChange={handleChangeModal} />

          <input
            type="number"
            name="time"
            defaultValue={content.time}
            onChange={handleChangeModal}
          />

          <button type="submit">Salvar</button>
        </form>
        <button type="button" onClick={onRequestClose}>
          Fechar
        </button>
      </ModalContainer>
    </Modal>
  )
}
