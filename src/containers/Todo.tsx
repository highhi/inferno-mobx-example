import { SFC, InfernoMouseEvent, linkEvent } from "inferno";
import { observer, inject } from "inferno-mobx";
import Todo from "../components/Todo";
import { Store } from "../stores";
import TodoStore from "../stores/TodoStore";
import { removeTodo } from "../actions";

type Props = {
  store?: Store
  todo: TodoStore
}

function onClick({ store, todo }: Required<Props>) {
  removeTodo(store, todo.id)
}

const ObservableTodo = observer(Todo)
const WrappedTodo: SFC<Props> = ({ store, todo }) => {
  return <ObservableTodo todo={todo} onClick={linkEvent({ store: store!, todo}, onClick)} />
}

export default inject('store')(WrappedTodo)
