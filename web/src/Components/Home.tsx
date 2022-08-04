import { Cards } from './Cards'
import { Sidebar } from './Sidebar'

export function Home() {
  return (
    <>
      <div>
        <Sidebar />
        <Cards
          title="titulo"
          description="descrição"
          date="Data"
          time="Tempo"
        />
      </div>
      <div>
        <h1>Main</h1>
      </div>
    </>
  )
}
