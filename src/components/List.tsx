import { SFC } from "inferno";
import { TodoParams } from "../stores/TodoStore";
import Todo from "../containers/Todo";


type Props = {
  list: { todos: TodoParams[] }
}

const List: SFC<Props> = ({ list }): JSX.Element => {
  const todos = list.todos.map(todo => <Todo key={todo.id} todo={todo} />)
  return <ul>{todos}</ul>
}

export default List
