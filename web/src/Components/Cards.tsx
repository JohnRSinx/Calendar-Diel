import { Pen, Trash } from 'phosphor-react'
import Modal from 'react-modal'
import { useState } from 'react'
import { Dialog } from './Dialog'
import axios from 'axios'

interface CardsProps {
  content: object
}
Modal.setAppElement('#root')
export function Cards({ content }: CardsProps) {
  const [isEditionModalOpen, setEditionModalOpen] = useState(false)

  function handleOpenEditionModal() {
    setEditionModalOpen(true)
  }

  function handleCloseEditionModal() {
    setEditionModalOpen(false)
  }

  async function handleDeleteCard() {
    try {
      await axios.delete(`http://localhost:3001/delete/${content.id}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <article>
      <h3>{content.title}</h3>
      <p>{content.description}</p>
      <p>{content.date}</p>
      <p>
        {content.time}
        <span> minutos</span>
      </p>
      <button onClick={handleOpenEditionModal}>
        <Pen />
      </button>
      <button onClick={handleDeleteCard}>
        <Trash />
      </button>
      <Dialog
        isOpen={isEditionModalOpen}
        onRequestClose={handleCloseEditionModal}
        content={content}
      />
    </article>
  )
}
