import List from "../components/List";
import { observer, inject } from "inferno-mobx";
import { Store } from "../stores";
import { SFC } from "inferno";

const ObservableList = observer(List)
const WrappedList: SFC<{ store?: Store }> = ({ store }) => {
  return <ObservableList list={store!.list} />
}

export default inject('store')(WrappedList)
