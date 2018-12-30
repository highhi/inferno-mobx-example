import { observable, action, decorate } from 'mobx'

export default class FormStore {
  input: string = ''

  setInput = (input: string) => {
    this.input = input
  }
}

decorate(FormStore, {
  input: observable.ref,
  setInput: action,
})
