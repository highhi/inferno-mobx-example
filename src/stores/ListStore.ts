import { observable, action, decorate, computed } from 'mobx'
import { TodoParams } from './TodoStore';

export type ListParams = {
  todos: TodoParams[]
}

export default class ListStore {
  todoMap = new Map<number, TodoParams>()

  get todos(): TodoParams[] {
    return Array.from(this.todoMap.values())
  }

  setTodo = (todo: TodoParams) => {
    this.todoMap.set(todo.id, todo)
  }

  deleteTodo = (id: number) => {
    this.todoMap.delete(id)
  }
}

decorate(ListStore, {
  todoMap: observable.shallow,
  todos: computed,
  setTodo: action,
  deleteTodo: action,
})
