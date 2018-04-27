import React, { Component, createContext } from "react";

const Context = createContext();

// constext안에는 provider와 consumer가 존재한다
// 이 둘은 context를 이용하기 위해 필요한 컴포넌트이다.

const { Provider, Consumer: TextConsumer } = Context;

class TextProvider extends Component {
  state = {
    text: "",
    textList: ["안녕하시요"]
  };

  actions = {
    onChange: e => {
      this.setState({
        text: e.target.value
      });
    },
    onAddText: () => {
      const { text, textList } = this.state;

      this.setState({
        text: "",
        textList: textList.concat(text)
      });
    }
  };

  render() {
    const { state, actions } = this;
    //provider 내에서 사용할 값은 "value"라고 부른다.
    //state와 액션을 넣은 객체를 provider의 value값으로 넣어준다.
    const value = { state, actions };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { TextConsumer, TextProvider };
