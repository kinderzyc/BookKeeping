import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";



const NavWrapper = styled.nav`
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
    >ul{
        display:flex;
      >li{
        width: 33.333333%;
        text-align: center;
        display: flex;
        padding: 10px 0;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        >.icon{
          width: 26px;
          height: 26px;
        }
      }
    }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tag" />
          <Link to="/tags" replace>标签页面</Link>
        </li>
        <li>
          <Icon name="money" />
          <Link to="/money" replace>记账页面</Link>
        </li>
        <li>
          <Icon name="chart" />
          <Link to="/statistics" replace>统计页面</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;