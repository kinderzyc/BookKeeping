import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
require('icons/money.svg');
require('icons/chart.svg');
require('icons/tag.svg');


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
            <svg className="icon">
                 <use xlinkHref="#tag"/>
              </svg>
              <Link to="/tags" replace>标签页面</Link>
            </li>
            <li>
              <svg className="icon">
                 <use xlinkHref="#money"/>
              </svg>
              <Link to="/money" replace>记账页面</Link>
            </li>
            <li>
            <svg className="icon">
                 <use xlinkHref="#chart"/>
              </svg>
              <Link to="/statistics" replace>统计页面</Link>
            </li>
          </ul>
        </NavWrapper>
    )
}

export default Nav;