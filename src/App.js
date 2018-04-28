import React, { Component } from "react";
import InputTextContainer from "./components/InputText";
import TextList from "./components/TextList";
//import { TextProvider } from "./contexts/TextContext";
import { TextProvider } from "./contexts/addContext";

class App extends Component {
  render() {
    return (
      <TextProvider>
        <div className="container">
          <InputTextContainer />
          <TextList />
        </div>
      </TextProvider>
    );
  }
}

export default App;
