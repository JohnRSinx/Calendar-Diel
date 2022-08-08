import { Container, MonthAndYear } from './styles'

export function Calendar() {
  const namesMonth = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembero',
    'Dezembro',
  ]
  const namesWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  const date = new Date()
  const firstDay = date.getDate() - date.getDay()

  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const nameMonth = namesMonth[month]

  function getWeeks() {
    const listWeek = []
    for (let i = 0; i < 7; i++) {
      const next = new Date(date.getTime())
      next.setDate(firstDay + i)

      const nameWeek = namesWeek[next.getDay()]
      listWeek.push(nameWeek)
    }
    return listWeek
  }
  function getNumber() {
    const numbersWeek = []
    for (let i = 0; i < 7; i++) {
      const next = new Date(date.getTime())
      next.setDate(firstDay + i)

      const numberWeek = next.getDate()
      numbersWeek.push(numberWeek)
    }
    return numbersWeek
  }
  const weekDays = getWeeks()
  const numberDays = getNumber()

  return (
    <Container>
      <MonthAndYear>
        <h1>{nameMonth}</h1>
        <h1>{year}</h1>
      </MonthAndYear>

      <ul>
        {weekDays.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <ul>
        {numberDays.map((value) => (
          <li className={`${day === value ? 'today' : ''}`} key={value}>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </Container>
  )
}
