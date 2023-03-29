import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { removeDiacritics } from '../../utils/removeDiacritics'

import { Container } from './styles'

import { Filter } from './components/Filter'
import { Header } from './components/Header'
import { Kanban, TaskType } from './components/Kanban'
import { StatusType } from '../../components/CardList'

export function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: uuidv4(),
      title: '#boraCodar um Kanban 🧑‍💻',
      description:
        'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
      tags: ['rocketseat', 'desafio'],
      status: 'to-do',
    },
    {
      id: uuidv4(),
      title: 'Manter a ofensiva 🔥',
      description:
        'Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva',
      tags: ['rocketseat'],
      status: 'to-do',
    },
    {
      id: uuidv4(),
      title: 'Almoçar 🥗',
      description:
        'Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço',
      tags: ['autocuidado'],
      status: 'to-do',
    },
    {
      id: uuidv4(),
      title: 'Conferir o novo desafio 🚀 ',
      description:
        'Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível',
      tags: ['rocketseat', 'desafio'],
      status: 'doing',
    },
    {
      id: uuidv4(),
      title: 'Ser incrível 😎',
      description:
        'Sempre me lembrar de manter minha autenticidade e espalhar amor',
      tags: ['autocuidado'],
      status: 'doing',
    },
    {
      id: uuidv4(),
      title: '#boraCodar uma página de login 🧑‍💻',
      description:
        'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir uma página de login.',
      tags: ['rocketseat', 'desafio'],
      status: 'done',
    },
    {
      id: uuidv4(),
      title: '#boraCodar uma página de clima 🧑‍💻',
      description:
        'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir uma página de clima.',
      tags: ['rocketseat', 'desafio'],
      status: 'done',
    },
    {
      id: uuidv4(),
      title: '#boraCodar um conversor 🧑‍💻',
      description:
        'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um conversor de moedas.',
      tags: ['rocketseat', 'desafio'],
      status: 'done',
    },
  ])

  const [filter, setFilter] = useState('')

  const filteredTasks = tasks.filter(filterTasks)

  function changeTaskStatus(
    changingTaskId: string,
    newStatus: StatusType,
  ) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === changingTaskId) {
        return { ...task, status: newStatus }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  function filterTasks(task: TaskType) {
    const filterExpression = new RegExp(removeDiacritics(filter), 'gui')
    return (
      filterExpression.test(removeDiacritics(task.title)) ||
      filterExpression.test(removeDiacritics(task.description)) ||
      task.tags?.some((tag) => filterExpression.test(removeDiacritics(tag)))
    )
  }

  return (
    <Container>
      <Header />
      <Filter
        value={filter}
        setValue={(newValue: string) => setFilter(newValue)}
      />
      <Kanban tasks={filteredTasks} changeTaskStatus={changeTaskStatus} />
    </Container>
  )
}
