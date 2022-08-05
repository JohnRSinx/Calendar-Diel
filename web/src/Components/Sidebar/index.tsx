import { useForm } from 'react-hook-form'
import axios from 'axios'
import {
  AsideContainer,
  ButtonSidebar,
  FormSidebar,
  InputNumber,
  InputSidebar,
} from './styles'

interface DataProps {
  data: object
  title: string
  description: string
  date: string
  time: number
}

export function Sidebar() {
  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      title: '',
      description: '',
      date: '',
      time: 0,
    },
  })

  const valueInputs = watch('title')
  const isSubmitDisabled = !valueInputs

  function handleSubmitSave(data: DataProps) {
    axios
      .post('http://localhost:3001/register', {
        title: data.title,
        description: data.description,
        date: data.date,
        time: data.time,
      })
      .then((response) => {
        console.log(response)
      })
    reset()
  }

  return (
    <AsideContainer>
      <h2>Nova tarefa</h2>
      <FormSidebar onSubmit={handleSubmit(handleSubmitSave)} action="">
        <label htmlFor="title">Titúlo</label>
        <InputSidebar
          type="text"
          id="title"
          placeholder="Titúlo"
          {...register('title')}
        />

        <label htmlFor="description">Descrição</label>
        <InputSidebar
          type="text"
          id="description"
          placeholder="Descrição"
          {...register('description')}
        />

        <label htmlFor="date">Data</label>
        <InputSidebar
          type="date"
          id="date"
          {...register('date', { valueAsDate: true })}
        />

        <label htmlFor="time">Tempo</label>
        <InputNumber
          type="number"
          id="time"
          placeholder="Duração"
          {...register('time', { valueAsNumber: true })}
        />

        <ButtonSidebar type="submit" disabled={isSubmitDisabled}>
          Adicionar
        </ButtonSidebar>
      </FormSidebar>
    </AsideContainer>
  )
}
