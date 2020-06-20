import styled from "styled-components";
import React, { useState } from "react";

const Wrapper = styled.section`
    margin-bottom: 15px;
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

type Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+') => void;
}

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = { '-': '支出', '+': '收入' };
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
  const category = props.value;

  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c} className={category === c ? 'selected' : ''}
            onClick={() => { props.onChange(c) }}
          >{categoryMap[c]}</li>
        )}
      </ul>
    </Wrapper>
  )
}

export { CategorySection };