import styled from "styled-components";
import React, { useState } from "react";

const Wrapper = styled.section`
display: flex;
flex-direction: column;
  > .output{
    background: white;
    width:  95%;
    margin:  0 auto;
    display: flex;
    border-radius: 4px;
    font-size: 36px;
    line-height: 72px;
    padding: 0 16px;
    > div{
      text-align: right;
      flex-grow:1;
    }
  }
  > .pad{
      width:95%;
      margin: 0 auto;
      > button{
        float: left;
        width:25%;
        height: 64px;
        background: white;
        border-radius:6px;
        border: 4px solid #FAFAFA;
        outline: none;
        font-size: 18px;
        &.ok{
          float: right;
          height: 128px;
        }
        &.xxx{
          float:left;
          width: 50%;
        }
      }
  }
`;
const NumberPadSection: React.FC = () => {
  const [output, setOutput] = useState('0');
  const onClickBottonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent
    if (text === null) { return; }
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        if (output === '0') {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case '删除':
        console.log('删除');
        break;
      case '清空':
        console.log('清空');



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