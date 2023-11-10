import { atom } from 'recoil'

export const todoListState = atom({
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
