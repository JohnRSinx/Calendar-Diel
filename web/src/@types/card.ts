type CardContent = {
  id: string
  title: string
  description: string
  date: string
  time: number
}

export interface Card {
  content: CardContent
}
