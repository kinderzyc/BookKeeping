import React, { useRef, useEffect } from "react";
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

type Props = {
  className?: string;
  scrollTop?: number;
}

const Layout: React.FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => { 
      if (!mainRef.current) { return; }
      mainRef.current.scrollTop = props.scrollTop!;
    },0);
  }, [props.scrollTop])
  return (
    <Wrapper>
      {/* <Header>
        <p className="title">记账本</p>
      </Header> */}
      <Main ref={mainRef} className={props.className}>
        {props.children}
      </Main>
      <Nav />
    </Wrapper>
  );
};
Layout.defaultProps = {
  scrollTop: 0
};
export default Layout;