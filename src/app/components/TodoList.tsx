import styled from 'styled-components'
import { useRecoilState, useRecoilValue } from 'recoil'
import { filteredTodoListState, todoListFilterState } from '../data-flow/todoList'
import { TodoListStats } from './TodoListStas'

import { TodoItemCreator } from './TodoItemCreator'
import { TodoItem } from './TodoItem'
import { ChangeEvent } from 'react'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const SelectBoxWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  &:after {
    position: absolute;
    right: 15px;
    width: 10px;
    height: 7px;
    background-color: #535353;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
    content: '';
    pointer-events: none;
  }
`

const SelectBox = styled.select`
  appearance: none;
  min-width: 230px;
  height: 2.8em;
  padding: 0.4em calc(0.8em + 30px) 0.4em 0.8em;
  border: 1px solid #cccccc;
  border-radius: 25px;
  background-color: #fff;
  color: #333333;
  font-size: 1em;
  cursor: pointer;
`

export const TodoList = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)
  const todoList = useRecoilValue(filteredTodoListState)

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value)
  }

  return (
    <>
      <Title>RecoilによるTodoアプリ</Title>
      <TodoListStats />
      <SelectBoxWrapper>
        <SelectBox value={filter} onChange={handleChange}>
          <option value='すべて'>すべて</option>
          <option value='完了'>完了</option>
          <option value='未完了'>未完了</option>
        </SelectBox>
      </SelectBoxWrapper>
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  )
}
