import Layout from "components/Layout";
import React from "react";
import styled from "styled-components";

const TagsSection = styled.section`
  background: #fff;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 12px 16px;
    ol{
      margin: 0 -12px;
          > li{
        background: #D9D9D9;
        border-radius: 18px;
        display: inline-block;
        padding: 4px 18px;
        font-size: 14px;
        margin: 8px 14px;
      }
    }
    > button{
       background: none;
       border: none;
       border-bottom: 1px solid #888;
       padding: 0 4px;
       color: #888;
       margin-top: 15px; 
    }
`;

const NotesSection = styled.section`
  background: #F5F5F5;
  padding: 0 16px;
  font-size: 14px;
    > label{
      display: flex;
      align-items: center;
      > span{
          margin-right: 16px;
          white-space: nowrap;
      }
      > input{
        display: block;
        width: 100%;
        height: 72px;
        background: none;
        border: none;
      }
    }
`;

const CategorySection = styled.section`
    font-size: 24px;
    color: #fff;
    > ul{
      display: flex;
      background: #00A292;
      > li{
        width: 50%;
        text-align: center;
        padding: 16px 0;
        position: relative;
        &.selected::after{
          content: '';
          display: block;
          height: 3px;
          position: absolute;
          bottom: 5px;
          width: 50%;
          background: white;
          transform: translate(50%);
          left:0;
        }  
      }
    }
`;

const NumberPadSection = styled.section`
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

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
  return (
    <MyLayout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="请点击添加备注" />
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className="output">
        <span>￥</span>
        <div>100</div>
          </div>
        <div className="pad clearfix">
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
      </NumberPadSection>
    </MyLayout>

  );
}

export default Money; 