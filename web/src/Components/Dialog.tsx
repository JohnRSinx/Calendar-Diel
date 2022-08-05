import Modal from 'react-modal'
import axios from 'axios'
import { FormEvent, useState } from 'react'

interface DialogProps {
  isOpen: boolean
  onRequestClose: () => void
  content: object
}

export function Dialog({ isOpen, onRequestClose, content }: DialogProps) {
  const [salveEditeCard, setSalveEditeCard] = useState({
    id: content.id,
    title: content.title,
    description: content.description,
    date: content.date,
    time: content.time,
  })

  function handleSalveEdit() {
    axios.put('http://localhost:3001/edit', {
      id: salveEditeCard.id,
      title: salveEditeCard.title,
      description: salveEditeCard.description,
      date: salveEditeCard.date,
      time: salveEditeCard.time,
    })
    onRequestClose()
  }

  function closeModal() {
    onRequestClose()
  }

  const handleSubmitModal = (value: FormEvent) => {
    setSalveEditeCard((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }))
    console.log(content.id)
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Edite</h2>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Edite o Titulo"
          defaultValue={content.title}
          onChange={handleSubmitModal}
        />
        <input
          type="text"
          name="description"
          placeholder="Edite a Descrição"
          defaultValue={content.description}
          onChange={handleSubmitModal}
        />

        <input type="date" name="date" onChange={handleSubmitModal} />

        <input
          type="number"
          name="time"
          defaultValue={content.time}
          onChange={handleSubmitModal}
        />

        <button type="button" onClick={handleSalveEdit}>
          Salvar
        </button>
      </div>
      <button type="button" onClick={closeModal}>
        Fechar
      </button>
    </Modal>
  )
}
