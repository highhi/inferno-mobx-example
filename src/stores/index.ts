import FormStore from "./FormStore";
import ListStore from "./ListStore";

export type Store = ReturnType<typeof getStore>

export default function getStore() {
  return {
    form: new FormStore(),
    list: new ListStore()
  }
}
