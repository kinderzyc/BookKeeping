import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "./Icon";



const NavWrapper = styled.nav`
line-height: 24px;
box-shadow: rgba(192, 196, 204, 0.4) 0px -2px 12px 0px;
background: white;
    >ul{
        display:flex;
      >li{
        width: 33.333333%;
        text-align: center;
        > a{
          display: flex;
          padding: 10px 0;
          flex-direction: column;
          justify-content: center;
          align-items: center;
            .icon{
            width: 26px;
            height: 26px;
          }
          &.selected{
            color: #00A292;
            .icon{
              fill: #00A292;
            }
          }
        }
      }
    }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" replace activeClassName="selected">
            <Icon name="tag" />
            标签</NavLink>
        </li>
        <li>
          <NavLink to="/money" replace activeClassName="selected">
            <Icon name="money" />
            记账</NavLink>
        </li>
        <li>
          <NavLink to="/statistics" replace activeClassName="selected">
            <Icon name="chart" />
            统计</NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;