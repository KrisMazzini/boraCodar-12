import { v4 as uuidv4 } from 'uuid'

import { Container } from './styles'

import { Card, CardProps } from '../../../../components/Card'
import { CardList, StatusType } from '../../../../components/CardList'
import { useState } from 'react'

interface TaskType extends CardProps {
  status: StatusType
}

export function Kanban() {
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
      tags: ['selfcare'],
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
        'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
      tags: ['rocketseat', 'desafio'],
      status: 'done',
    },
    {
      id: uuidv4(),
      title: '#boraCodar uma página de clima 🧑‍💻',
      description:
        'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
      tags: ['rocketseat', 'desafio'],
      status: 'done',
    },
    {
      id: uuidv4(),
      title: '#boraCodar um conversor 🧑‍💻',
      description:
        'Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.',
      tags: ['rocketseat', 'desafio'],
      status: 'done',
    },
  ])

  const statusList: StatusType[] = ['to-do', 'doing', 'done']

  function handleChangeTaskStatus(
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

  return (
    <Container>
      {statusList.map((status) => {
        return (
          <CardList
            status={status}
            key={status}
            handleUpdateTask={handleChangeTaskStatus}
          >
            {tasks
              .filter((task) => task.status === status)
              .map((task) => {
                return (
                  <Card
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    tags={task.tags}
                    key={task.id}
                  />
                )
              })}
          </CardList>
        )
      })}
    </Container>
  )
}
