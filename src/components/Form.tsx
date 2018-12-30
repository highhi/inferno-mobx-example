import { SFC, FormEvent } from "inferno";

type Props = {
  form: { input: string }
  onInput: LinkEventHander<FormEvent<HTMLInputElement>>
  onSubmit: LinkEventHander<FormEvent<HTMLFormElement>>
}

const Form: SFC<Props> = ({ form, onInput, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" value={form.input} onInput={onInput} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
