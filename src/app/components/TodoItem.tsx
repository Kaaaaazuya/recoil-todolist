import { useRecoilState } from 'recoil'
import { todoListState } from '../data-flow/todoList'
import { TodoListItem } from '../types/TodoListItem'

type TodoItemProps = {
  item: TodoListItem
}

export const TodoItem = ({ item }: TodoItemProps) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)

  const deleteItem = () => {
    const newTodoList = todoList.filter((listItem) => listItem.id !== item.id)
    setTodoList(newTodoList)
  }

  return (
    <div>
      {item.title}
      <span onClick={deleteItem} style={{ cursor: 'pointer' }}>
        X
      </span>
    </div>
  )
}
