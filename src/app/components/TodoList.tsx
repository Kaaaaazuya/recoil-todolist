import { useRecoilValue } from 'recoil'
import { todoListState } from '../todoList'
import { TodoListStats } from './TodoListStas'

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
      {todoList.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  )
}
