import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

// const Header = styled.header`
//   padding: 15px;
//   background: #00A292;
//   color: white;
//   border-bottom-left-radius: 8px;
//   border-bottom-right-radius: 8px;
  
//   .title{
//     text-align: center;
//     font-size: 20px;
//   }
// `;

const Layout = (props: any) => {
  return (
    <Wrapper>
      {/* <Header>
        <p className="title">记账本</p>
      </Header> */}
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav />
    </Wrapper>
  );
};
export default Layout;