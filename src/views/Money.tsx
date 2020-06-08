import Layout from "components/Layout";
import React from "react";
import styled from "styled-components";

const TagsSection = styled.section`
  background: #fff;
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

`;

const NumberPadSection = styled.section`

`;

function Money() {
  return (
    <Layout>
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
          <input type="text"  placeholder="请点击添加备注"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>100</div>
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
        <button>OK</button>
        <button>0</button>
        <button>.</button>
      </NumberPadSection>
    </Layout>

  );
}

export default Money; 