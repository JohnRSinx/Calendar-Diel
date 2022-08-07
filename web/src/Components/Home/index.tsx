import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from '../../@types/card'
import { Cards } from '../Cards'
import { Sidebar } from '../Sidebar'
import { SearchAndCardContainer, HomeContainer } from './styles'

export function Home() {
  const [listCard, setListCard] = useState<Card['content'][]>([])
  const [search, setSearch] = useState('')

  function handleUpdateAfterEdit() {
    axios.get('http://localhost:3001/getCards').then((response) => {
      setListCard(response.data)
    })
  }

  function handleUpdateAfterSaving() {
    axios.get('http://localhost:3001/getCards').then((response) => {
      setListCard(response.data)
    })
  }
  function handleUpdateAfterDeleting() {
    axios.get('http://localhost:3001/getCards').then((response) => {
      setListCard(response.data)
    })
  }
  useEffect(() => {
    axios.get('http://localhost:3001/getCards').then((response) => {
      setListCard(response.data)
    })
  }, [])

  const filteredCard =
    search.length > 0
      ? listCard.filter((value) => value.title.includes(search))
      : []

  return (
    <HomeContainer>
      <div className="containerSideBar">
        <Sidebar handleUpdateAfterSaving={handleUpdateAfterSaving} />
      </div>
      <SearchAndCardContainer>
        <div className="ContainerSearch">
          <form action="">
            <label htmlFor="search">Pesquise Tarefas</label>
            <input
              id="search"
              type="search"
              aria-label="Campo de pesquisa"
              placeholder="Digite Titulo da Tarefa"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Pesquisar</button>
          </form>
        </div>
        <div className="containerCards">
          {search.length > 0
            ? filteredCard.map((value) => {
                return (
                  <Cards
                    key={value.id}
                    content={value}
                    handleUpdateAfterEdit={handleUpdateAfterEdit}
                    handleUpdateAfterDeleting={handleUpdateAfterDeleting}
                  />
                )
              })
            : listCard.map((value) => {
                return (
                  <Cards
                    key={value.id}
                    content={value}
                    handleUpdateAfterEdit={handleUpdateAfterEdit}
                    handleUpdateAfterDeleting={handleUpdateAfterDeleting}
                  />
                )
              })}
        </div>
      </SearchAndCardContainer>
      <div className="containerCalendar">
        <h1>Calendário</h1>
      </div>
    </HomeContainer>
  )
}
