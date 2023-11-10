import { useRecoilValue } from 'recoil'
import { todoListState } from '../data-flow/todoList'
import { TodoListStats } from './TodoListStas'

import { TodoItemCreator } from './TodoItemCreator'

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
      <TodoItemCreator />
      {todoList.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  )
}
