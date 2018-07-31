import * as React from "react";
import * as ReactDOM from "react-dom";
import Layouts from "./components/Layouts";

class App extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Layouts username="管理者A" />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("container"),
);
