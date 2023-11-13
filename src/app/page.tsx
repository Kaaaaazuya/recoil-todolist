'use client'
import styled from 'styled-components'
import { TodoList } from './components/TodoList'

const Main = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 0;
  height: 100vh;
`

const Home = () => {
  return (
    <Main>
      <TodoList />
    </Main>
  )
}

export default Home
