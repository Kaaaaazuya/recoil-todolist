import { useRecoilValue } from 'recoil'
import { todoListStatsState } from '../data-flow/todoList'

export const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum } =
    useRecoilValue(todoListStatsState)
  return (
    <ul>
      <li>Todoの登録数:{totalNum}</li>
      <li>完了の数:{totalCompletedNum}</li>
      <li>未完了の数:{totalUncompletedNum}</li>
    </ul>
  )
}
