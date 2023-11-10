import { useRecoilValue } from 'recoil'
import { todoListState } from '../data-flow/todoList'
import { TodoListStats } from './TodoListStas'

import { TodoItemCreator } from './TodoItemCreator'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  )
}
