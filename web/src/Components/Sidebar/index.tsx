import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import {
  Container,
  ButtonSidebar,
  FormSidebar,
  InputNumber,
  InputSidebar,
} from './styles'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface SidebarProps {
  handleUpdateAfterSaving: () => void
}

type FormValues = {
  title: string
  description: string
  date: Date
  time: number
}

export function Sidebar({ handleUpdateAfterSaving }: SidebarProps) {
  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      title: '',
      description: '',
      date: new Date(),
      time: 0,
    },
  })

  const valueInputs = watch('title')
  const isSubmitDisabled = !valueInputs

  const handleSubmitSave: SubmitHandler<FormValues> = (data) => {
    const publishedDateFormatted = format(data.date, "d 'de' LLLL ", {
      locale: ptBR,
    })
    axios
      .post('http://localhost:3001/register', {
        title: data.title,
        description: data.description,
        date: publishedDateFormatted,
        time: data.time,
      })
      .then(() => {
        handleUpdateAfterSaving()
      })

    reset()
  }

  return (
    <Container>
      <h2>Nova tarefa</h2>
      <FormSidebar onSubmit={handleSubmit(handleSubmitSave)}>
        <InputSidebar
          type="text"
          id="title"
          placeholder="Titúlo"
          {...register('title')}
        />

        <InputSidebar
          type="text"
          id="description"
          placeholder="Descrição"
          {...register('description')}
        />

        <InputSidebar
          type="date"
          id="date"
          placeholder="Descrição"
          {...register('date', { valueAsDate: true })}
        />

        <label htmlFor="time">Tempo</label>
        <InputNumber
          type="number"
          id="time"
          {...register('time', { valueAsNumber: true })}
        />

        <ButtonSidebar type="submit" disabled={isSubmitDisabled}>
          Adicionar
        </ButtonSidebar>
      </FormSidebar>
    </Container>
  )
}
