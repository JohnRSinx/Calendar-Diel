import axios from 'axios'
import { useEffect, useState } from 'react'
import { ICard } from '../../@types/card'
import { Calendar } from '../Calendar'
import { Card } from '../Card'
import { Sidebar } from '../Sidebar'
import { SearchAndCardContainer, SearchContainer, Container } from './styles'

export function Home() {
  const [listCard, setListCard] = useState<ICard[]>([])
  const [search, setSearch] = useState('')

  function getCardAPI() {
    axios.get('http://localhost:3001/getCards').then((response) => {
      setListCard(response.data)
    })
  }

  function getCards() {
    getCardAPI()
  }
  function handleUpdateAfterSaving() {
    getCardAPI()
  }
  useEffect(() => {
    getCardAPI()
  }, [])

  const filteredCard =
    search.length > 0
      ? listCard.filter((value) => value.title.includes(search))
      : []

  return (
    <Container>
      <Sidebar handleUpdateAfterSaving={handleUpdateAfterSaving} />
      <SearchAndCardContainer>
        <SearchContainer>
          <label htmlFor="search">Pesquise Tarefas</label>
          <input
            id="search"
            type="search"
            aria-label="Campo de pesquisa"
            placeholder="Digite Titulo da Tarefa"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </SearchContainer>
        {search.length > 0
          ? filteredCard.map((value) => {
              return <Card key={value.id} content={value} getCards={getCards} />
            })
          : listCard.map((value) => {
              return <Card key={value.id} content={value} getCards={getCards} />
            })}
      </SearchAndCardContainer>
      <Calendar />
    </Container>
  )
}
