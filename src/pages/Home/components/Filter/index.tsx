import { ChangeEvent, FormEvent } from 'react'

import filter from '../../../../assets/filter.svg'
import search from '../../../../assets/search.svg'
import { Container } from './styles'

import { Button } from '../../../../components/Button'
import { InputWrapper } from '../../../../components/InputWrapper'

interface FilterProps {
  value: string
  setValue: (newValue: string) => void
}

export function Filter({ value, setValue }: FilterProps) {
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Button icon={filter} title="Filter" />
      <InputWrapper icon={search}>
        <input
          placeholder="Search for cards, subjects or owners"
          value={value}
          onChange={handleChangeInput}
        />
      </InputWrapper>
    </Container>
  )
}
