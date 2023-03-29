import { Container } from './styles'

import { Card, CardProps } from '../../../../components/Card'
import { CardList, StatusType } from '../../../../components/CardList'

export interface TaskType extends CardProps {
  status: StatusType
}

interface KanbanProps {
  tasks: TaskType[]
  handleSetTasks: (tasks: TaskType[]) => void
}

export function Kanban({ tasks, handleSetTasks }: KanbanProps) {
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

    handleSetTasks(updatedTasks)
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
