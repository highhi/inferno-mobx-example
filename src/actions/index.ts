import { Store } from "../stores";
import TodoStore from "../stores/TodoStore";

export function inputForm(store: Store, input: string) {
  store.form.setInput(input)
}

export function addTodo(store: Store, input: string) {
  store.list.setTodo(new TodoStore(input))
}

export function removeTodo(store: Store, todoId: number) {
  store.list.deleteTodo(todoId)
}
