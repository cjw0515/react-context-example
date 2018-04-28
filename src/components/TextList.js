import React, { Component } from "react";
import Text from "./Text";
import { TextConsumer, useContext } from "../contexts/addContext";


class TextList extends Component {

  render() {

    const { textList } = this.props.state;
    console.log(textList);

    const list = textList.map(
      (text, index) => 
      <Text text={text} index={index}/>
    );		  

    return (
      <div>
        {list}
      </div>      
    );
  }
}

export default useContext(TextList);
