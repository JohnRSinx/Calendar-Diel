import { useForm } from 'react-hook-form'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import axios from 'axios'
import {
  AsideContainer,
  ButtonSidebar,
  FormSidebar,
  InputNumber,
  InputSidebar,
} from './styles'
import { Card } from '../../@types/card'

interface CardsProps extends Card {
  handleUpdateAfterSaving: (content: Card['content']) => void
}

export function Sidebar({ handleUpdateAfterSaving }) {
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

  function handleSubmitSave(data: CardsProps['content']) {
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
    <AsideContainer>
      <h2>Nova tarefa</h2>
      <FormSidebar onSubmit={handleSubmit(handleSubmitSave)} action="">
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
    </AsideContainer>
  )
}
