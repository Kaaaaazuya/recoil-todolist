import { useRecoilState } from 'recoil'
import { todoListState } from '../data-flow/todoList'
import { TodoListItem } from '../types/TodoListItem'

type TodoItemProps = {
  item: TodoListItem
}

export const TodoItem = ({ item }: TodoItemProps) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)

  const toggleItemCompletion = () => {
    const newTodoList = todoList.map((listItem) =>
      listItem.id === item.id
        ? { ...listItem, isComplete: !listItem.isComplete }
        : listItem,
    )
    setTodoList(newTodoList)
  }

  const deleteItem = () => {
    const newTodoList = todoList.filter((listItem) => listItem.id !== item.id)
    setTodoList(newTodoList)
  }

  return (
    <div>
      <button onClick={toggleItemCompletion} type='button'>
        {item.isComplete ? '完' : '未'}
      </button>
      {item.title}
      <span onClick={deleteItem} style={{ cursor: 'pointer' }}>
        X
      </span>
    </div>
  )
}
