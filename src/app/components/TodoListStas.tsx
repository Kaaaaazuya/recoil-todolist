import { useRecoilValue } from 'recoil'
import { todoListStatsState } from '../data-flow/todoList'

export const TodoListStats = () => {
  const totalNum = useRecoilValue(todoListStatsState)
  return (
    <ul>
      <li>Todoの登録数:{totalNum}</li>
    </ul>
  )
}
