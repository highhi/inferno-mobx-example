import { SFC, InfernoMouseEvent } from "inferno";
import Button from "./Button";
import { css } from "emotion";

type Props = {
  todo: { title: string },
  onClick: LinkEventHander<InfernoMouseEvent<HTMLButtonElement>>
}

const styles = css`
  span {
    margin-right: 4px;
  }
`

const Todo: SFC<Props> = ({ todo, onClick }) => {
  return (
    <li className={styles}>
      <span>{todo.title}</span>
      <Button as="delete" onClick={onClick}>delete</Button>
    </li>
  )
}

export default Todo
