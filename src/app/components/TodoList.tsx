import { useRecoilValue } from 'recoil'
import { todoListState, todoListStatsState } from '../todoList'

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState)
  const totalNum = useRecoilValue(todoListStatsState)

  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <ul>
        <li>Todoの登録数:{totalNum}</li>
      </ul>
      {todoList.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  )
}
