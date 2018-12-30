import { SFC, FormEvent } from "inferno";
import Button from "./Button";
import { css } from "emotion";

type Props = {
  form: { input: string }
  onInput: LinkEventHander<FormEvent<HTMLInputElement>>
  onSubmit: LinkEventHander<FormEvent<HTMLFormElement>>
}

const styles = css`
  input[type="text"] {
    padding: 2px 4px;
    margin-right: 4px
  }
`

const Form: SFC<Props> = ({ form, onInput, onSubmit }) => {
  return (
    <form className={styles} onSubmit={onSubmit}>
      <input type="text" name="title" value={form.input} onInput={onInput} />
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default Form
