import { observable, action, decorate } from 'mobx'

let id = 0

export type TodoParams = {
  id: number
  title: string
}

export default class TodoStore {
  id!: TodoParams['id']
  title!: TodoParams['title']

  constructor(title: string) {
    this.id = id
    this.title = title
    id++
  }
}

decorate(TodoStore, {
  title: observable.ref,
})
