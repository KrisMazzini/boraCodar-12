import { FormEvent } from 'react'

import filter from '../../../../assets/filter.svg'
import search from '../../../../assets/search.svg'
import { Container } from './styles'

import { Button } from '../../../../components/Button'
import { InputWrapper } from '../../../../components/InputWrapper'

export function Filter() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Button icon={filter} title="Filter" />
      <InputWrapper icon={search}>
        <input placeholder="Search for cards, subjects or owners" />
      </InputWrapper>
    </Container>
  )
}
