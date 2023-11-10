import { useRecoilValue } from 'recoil'
import { todoListState } from '../todoList'

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState)
  console.log(todoList)

  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      {todoList.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  )
}
