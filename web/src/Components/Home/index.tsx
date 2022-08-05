import axios from 'axios'
import { useEffect, useState } from 'react'
import { Cards } from '../Cards'
import { Sidebar } from '../Sidebar'

import { HomeContainer } from './styles'
interface ListCard {
  id: number
  content: object
}
export function Home() {
  const [listCard, setListCard] = useState<ListCard>([])

  useEffect(() => {
    axios.get('http://localhost:3001/getCards').then((response) => {
      setListCard(response.data)
    })
  }, [])

  return (
    <HomeContainer>
      <div>
        <Sidebar />
        <form action="">
          <input
            type="search"
            aria-label="Campo de pesquisa"
            placeholder="Digite a data de busca"
          />
          <button type="submit">Pesquisar</button>
        </form>

        {typeof listCard !== 'undefined' &&
          listCard.map((value) => {
            return <Cards key={value.id} content={value} />
          })}
      </div>
      <div>
        <h1>Main</h1>
      </div>
    </HomeContainer>
  )
}
