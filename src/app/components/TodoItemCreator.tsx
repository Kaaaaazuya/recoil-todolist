import { useState, ChangeEvent } from 'react'
import { useSetRecoilState } from 'recoil'
import { useRandomNumber } from '../hook/useRandomNumber'
import { todoListState } from '../todoList'

export const TodoItemCreator = () => {
  const [title, setTitle] = useState('')
  const { getRandomInt } = useRandomNumber()
  const setTodoList = useSetRecoilState(todoListState)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getRandomInt(1, 10000),
        title: title,
        isComplete: false,
      },
    ])
    setTitle('')
  }

  return (
    <div style={{ margin: '1em 0' }}>
      <input type='text' value={title} onChange={handleChange} />
      <button onClick={addItem} type='button'>
        Add
      </button>
    </div>
  )
}
