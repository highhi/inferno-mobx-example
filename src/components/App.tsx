import { SFC } from "inferno";
import { Provider } from "inferno-mobx";
import getStore from "../stores";
import Form from "../containers/Form";
import List from "../containers/List";

const App: SFC = () => {
  return (
    <Provider store={getStore()}>
      <Form />
      <List />
    </Provider>
  )
}

export default App
