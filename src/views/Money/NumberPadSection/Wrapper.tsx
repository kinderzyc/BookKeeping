import styled from "styled-components";

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

export { Wrapper }