import { atom, selector } from 'recoil'
import { TodoListItem } from '../types/TodoListItem'

export const todoListState = atom<TodoListItem[]>({
  key: 'todoListState', // アプリケーション内で一意
  default: [
    // default は必須
    {
      id: 0,
      title: 'メール送信',
      isComplete: false,
    },
  ],
})

// selectorはatomの状態を操作したい場合(atomの値を利用して別の処理を行う)に利用する
export const todoListStatsState = selector({
  key: 'todoListStatsState', // アプリケーション内で一意
  get: ({ get }) => {
    //getプロパティのget関数はselectorの中のみで利用することができatomやselectorにアクセスすることができます
    const todoList = get(todoListState)
    const totalNum = todoList.length
    return totalNum
  },
  //setプロパティを利用してatomの値を更新することもできます
})
