import { Pen, Trash } from 'phosphor-react'
import { useState } from 'react'
import axios from 'axios'
import { Buttons, Container, TitleContainer } from './styles'
import { Dialog } from '../Dialog'
import type { ICard } from '../../@types/card'

interface CardsProps {
  getCards: (content?: ICard) => void
  content: ICard
}

export function Card({ content, getCards }: CardsProps) {
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
      getCards()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Container>
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
          <p>
            {content.time}
            <span> Minutos</span>
          </p>
        </div>
      </Container>
      <Dialog
        isOpen={isEditionModalOpen}
        onRequestClose={handleCloseEditionModal}
        content={content}
        handleUpdateAfterEdit={getCards}
      />
    </>
  )
}
