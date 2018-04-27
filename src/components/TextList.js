import React, { Component } from "react";
import Text from "./Text";
import { TextConsumer } from "../contexts/TextContext";

class TextList extends Component {
  state = {
    list: []
  };

  render() {
    return (
      <TextConsumer>
        {

          ({ state }) => {
              const list = state.textList.map((text, index) => <Text text={text} index={index}/>);		  
              return list;
          }
          
        }
      </TextConsumer>
    );
  }
}

export default TextList;
