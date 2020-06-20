import Layout from "components/Layout";
import React from "react";
import { useTags } from "useTags";
import styled from "styled-components";
import Icon from "components/Icon";
import { Link } from "react-router-dom";

const TagList = styled.ol`
  font-size: 16px;
  width: 97%;
  margin: 0 auto;
  >li{
    border: 1px solid #fff;
    line-height: 20px;
    /* padding: 12px 16px 12px 0; */
    margin-left: 16px;
    margin: 10px 10px;
    border-radius: 6px;
    background: white;
    box-shadow: 2px 2px 6px 0px #dfdbdb;
    >a{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px;
    }
  }
`;

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #00A292;
  color: white;
  border-radius: 4px;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Space = styled.div`
  height: 20px;
`;

function Tags() {
  const { tags } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right" />
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button>新增标签</Button>
      </Center>

    </Layout>
  );
}

export default Tags;