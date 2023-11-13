import { useState, ChangeEvent } from 'react'
import { useSetRecoilState } from 'recoil'
import { useRandomNumber } from '../hook/useRandomNumber'
import { todoListState } from '../data-flow/todoList'
import styled from 'styled-components'

const InputLabel = styled.span`
  color: #333;
  display: block;
  margin-bottom: 5px;
  font-size: 0.9em;
`

const InputWrapper = styled.div`
  display: flex;
  gap: 12px;
`

const Input = styled.input`
  color: #333;
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #969da3;
  border-radius: 3px;
  font-size: 1em;
  line-height: 1.5;
  &:placeholder {
    color: #999;
`

const AddButon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin: 0 auto;
  padding: 0.9em 2em;
  border: 1px solid #2589d0;
  border-radius: 5px;
  background-color: #fff;
  color: #2589d0;
  font-size: 1em;
`

export const TodoItemCreator = () => {
  const [title, setTitle] = useState('')
  const { getRandomInt } = useRandomNumber()
  const setTodoList = useSetRecoilState(todoListState)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getRandomInt(1, 10000),
        title: title,
        isComplete: false,
      },
    ])
    setTitle('')
  }

  return (
    <div style={{ margin: '1em 0' }}>
      <InputLabel>Add Todo</InputLabel>
      <InputWrapper>
        <Input
          type='text'
          value={title}
          onChange={handleChange}
          placeholder='please input todo title'
        />
        <AddButon onClick={addItem} type='button'>
          Add
        </AddButon>
      </InputWrapper>
    </div>
  )
}
