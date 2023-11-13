import { useRecoilState } from 'recoil'
import { todoListState } from '../data-flow/todoList'
import { TodoListItem } from '../types/TodoListItem'
import styled from 'styled-components'
import { RxCross1 } from 'react-icons/rx'

type TodoItemProps = {
  item: TodoListItem
}

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`

type CompleteButtonProps = {
  isComplete: boolean
}

const CompleteButton = styled.button<CompleteButtonProps>`
  background-color: ${(props) => (props.isComplete ? '#4caf50' : '#f44336')};
  color: white;
  border: none;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 4px;
  cursor: pointer;
`

const ItemTitle = styled.span`
  flex-grow: 1;
`

const DeleteButton = styled.span`
  color: #f44336;
  cursor: pointer;
  margin-left: 10px;
`

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
    <TodoItemContainer>
      <CompleteButton onClick={toggleItemCompletion} isComplete={item.isComplete}>
        {item.isComplete ? '完' : '未'}
      </CompleteButton>
      <ItemTitle>{item.title}</ItemTitle>
      <DeleteButton onClick={deleteItem}>
        <RxCross1 />
      </DeleteButton>
    </TodoItemContainer>
  )
}
