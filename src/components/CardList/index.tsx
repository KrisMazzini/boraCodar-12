import { useState, ReactNode, DragEvent } from 'react'
import { CardsWrapper, Container, DraggedOverContainer } from './styles'

export type StatusType = 'to-do' | 'doing' | 'done'

interface CardListProps {
  status: StatusType
  children: ReactNode
  handleUpdateTask: (changingTaskId: string, newStatus: StatusType) => void
}

export function CardList({
  status,
  children,
  handleUpdateTask,
}: CardListProps) {
  const [isDraggingOver, setIsDraggingOver] = useState(false)

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    const taskId = event.dataTransfer?.getData('text/plain') || ''
    handleUpdateTask(taskId, status)
    setIsDraggingOver(false)
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault()
    setIsDraggingOver(true)
  }

  function handleDragLeave(event: DragEvent) {
    setIsDraggingOver(false)
  }

  const CardListContainer = isDraggingOver ? DraggedOverContainer : Container

  return (
    <CardListContainer
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <h3>{status}</h3>
      <CardsWrapper>{children}</CardsWrapper>
    </CardListContainer>
  )
}
