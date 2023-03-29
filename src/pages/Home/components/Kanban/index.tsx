import { Container } from './styles'

import { Card, CardProps } from '../../../../components/Card'
import { CardList, StatusType } from '../../../../components/CardList'

export interface TaskType extends CardProps {
  status: StatusType
}

interface KanbanProps {
  tasks: TaskType[]
  changeTaskStatus: (changingTaskId: string, newStatus: StatusType) => void
}

export function Kanban({ tasks, changeTaskStatus }: KanbanProps) {
  const statusList: StatusType[] = ['to-do', 'doing', 'done']

  return (
    <Container>
      {statusList.map((status) => {
        return (
          <CardList
            status={status}
            key={status}
            handleUpdateTask={changeTaskStatus}
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
