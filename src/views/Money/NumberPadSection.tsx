import React from "react";
import { Wrapper } from "./NumberPadSection/Wrapper";
import { generateOutput } from "./NumberPadSection/generateOutput";

type Props = {
  value: number;
  onChange: (value: number) => void;
  onok?: () => void;
}

const NumberPadSection: React.FC<Props> = (props) => {
  const output = props.value.toString();
  const setOutput = (output: string) => {
    let value
    if (output.length > 12) {
      value = parseFloat(output.slice(0, 12));
    } else if (output.length === 0) {
      value = 0;
    } else {
      value = parseFloat(output);
    }
    props.onChange(value);
  }
  const onClickBottonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent
    if (text === null) { return; }
    if (text === 'OK') {
     if(props.onok){ props.onok();}
      return;
    }
    if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
    }
  };

  return (
    <Wrapper>
      <div className="output">
        <span>￥</span>
        <div>{output}</div>
      </div>
      <div className="pad clearfix" onClick={onClickBottonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="xxx">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  )
}

export { NumberPadSection };