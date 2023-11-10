import { TodoListItem } from '../types/TodoListItem'

type TodoItemProps = {
  item: TodoListItem
}

export const TodoItem = ({ item }: TodoItemProps) => {
  return <div>{item.title}</div>
}
