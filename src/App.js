import React, { Component } from "react";
import InputTextContainer from "./components/InputText";
import TextList from "./components/TextList";
import { TextProvider } from "./contexts/addContext";

const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }), 
  children
);

class App extends Component {
  render() {
    return (
      <AppProvider
        contexts={[TextProvider]}
      >               
        <div className="container">
          <InputTextContainer />
          <TextList />
        </div>
      </AppProvider>
    );
  }
}

export default App;
