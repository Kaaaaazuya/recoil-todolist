import { useRecoilState, useRecoilValue } from 'recoil'
import {
  filteredTodoListState,
  todoListFilterState,
  todoListState,
} from '../data-flow/todoList'
import { TodoListStats } from './TodoListStas'

import { TodoItemCreator } from './TodoItemCreator'
import { TodoItem } from './TodoItem'
import { ChangeEvent } from 'react'

export const TodoList = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)
  const todoList = useRecoilValue(filteredTodoListState)

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value)
  }

  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
      <select value={filter} onChange={handleChange}>
        <option value='すべて'>すべて</option>
        <option value='完了'>完了</option>
        <option value='未完了'>未完了</option>
      </select>
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  )
}
