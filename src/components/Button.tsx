import { InfernoMouseEvent, SFC } from "inferno";
import { css } from 'emotion'
import cx from 'classnames'

type Props = {
  type?: string
  as?: string
  onClick?: LinkEventHander<InfernoMouseEvent<HTMLButtonElement>>
}

const baseStyle = css`
  border-radius: 4px;
  padding: 4px 12px;
  border: 1px solid #ccc;
`

const asDelete = css`
 color: #721c24;
 background-color: #f8d7da;
 border-color: #f5c6cb;
`

function classNames(props: Props): string {
  return cx({
    [baseStyle]: true,
    [asDelete]: props.as === 'delete'
  })
}

const Button: SFC<Props> = (props) => {
  return <button
    className={classNames(props)}
    type={props.type}
    onClick={props.onClick}>
    {props.children}
  </button>
}

Button.defaultProps = {
  type: 'button',
}

export default Button
