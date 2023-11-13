import { useRecoilValue } from 'recoil'
import { todoListFilterState, todoListStatsState } from '../data-flow/todoList'

export const TodoListStats = () => {
  const filter = useRecoilValue(todoListFilterState)
  const { totalNum, totalCompletedNum, totalUncompletedNum } =
    useRecoilValue(todoListStatsState)

  const isFilterCompleted = filter === 'すべて' || filter === '完了'
  const isFilterTodo = filter === 'すべて' || filter === '未完了'

  return (
    <ul>
      <li>Todoの登録数:{totalNum}</li>
      {isFilterCompleted && <li>完了の数:{totalCompletedNum}</li>}
      {isFilterTodo && <li>未完了の数:{totalUncompletedNum}</li>}
    </ul>
  )
}
