import styled from "styled-components";
import React, { useState } from "react";

const Wrapper = styled.section`
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
          bottom: 10px;
          width: 50%;
          background: white;
          transform: translate(50%);
          left:0;
          box-shadow: 1px 2px 10px #333;
        }  
      }
    }
`;

const CategorySection: React.FC = () => {
  const categoryMap = { '-': '支出', '+': '收入' };
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
  const [category, setCategory] = useState('-');
  
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c} className={category === c ? 'selected' : ''}
            onClick={() => { setCategory(c) }}
          >{categoryMap[c]}</li>
        )}
      </ul>
    </Wrapper>
  )
}

export { CategorySection };