import { inject, observer } from 'inferno-mobx'
import Form from '../components/Form';
import { Store } from '../stores';
import { SFC, FormEvent, linkEvent } from 'inferno';
import { inputForm, addTodo } from '../actions';

function onInput(store: Store, event: FormEvent<HTMLInputElement>) {
  const value = event.currentTarget.value.trim()
  inputForm(store, value)
}

function onSubmit(store: Store, event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const el = event.target!['title'] as HTMLInputElement
  const value = el.value.trim()

  if (!value) return

  addTodo(store, el.value.trim())
  el.value = ''
}

const ObservableForm = observer(Form)
const WrappedForm: SFC<{ store?: Store }> = ({ store }): JSX.Element => {
  return <ObservableForm
    form={store!.form}
    onInput={linkEvent(store!, onInput)}
    onSubmit={linkEvent(store!, onSubmit)}
  />
}

export default inject('store')(WrappedForm)


