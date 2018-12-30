import { SFC, InfernoMouseEvent } from "inferno";

type Props = {
  todo: { title: string },
  onClick: LinkEventHander<InfernoMouseEvent<HTMLButtonElement>>
}

const Todo: SFC<Props> = ({ todo, onClick }) => {
  return (
    <li>
      <span>{todo.title}</span>
      <button type="button" onClick={onClick}>delete</button>
    </li>
  )
}

export default Todo
