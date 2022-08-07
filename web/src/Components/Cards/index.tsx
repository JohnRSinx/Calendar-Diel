import { Pen, Trash } from 'phosphor-react'
import { useState } from 'react'
import axios from 'axios'
import { Buttons, CardsContainer, TitleContainer } from './styles'
import { Dialog } from '../Dialog'
import type { Card } from '../../@types/card'

interface CardsProps extends Card {
  handleUpdateAfterEdit: (content: Card['content']) => void
  handleUpdateAfterDeleting: () => void
}

export function Cards({
  content,
  handleUpdateAfterEdit,
  handleUpdateAfterDeleting,
}: CardsProps) {
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
      await axios.get('http://localhost:3001/getCards')
      handleUpdateAfterDeleting()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <CardsContainer>
        <TitleContainer>
          <h2>{content.title}</h2>
          <div>
            <Buttons onClick={handleOpenEditionModal}>
              <Pen />
            </Buttons>
            <Buttons onClick={handleDeleteCard}>
              <Trash />
            </Buttons>
          </div>
        </TitleContainer>

        <div>
          <p>{content.description}</p>
          <p>{content.date}</p>
          <p>{content.time} </p>
        </div>
      </CardsContainer>
      <Dialog
        isOpen={isEditionModalOpen}
        onRequestClose={handleCloseEditionModal}
        content={content}
        handleUpdateAfterEdit={handleUpdateAfterEdit}
      />
    </div>
  )
}
