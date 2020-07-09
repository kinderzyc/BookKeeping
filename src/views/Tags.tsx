import Layout from "components/Layout";
import React from "react";
import { useTags } from "hooks/useTags";
import styled from "styled-components";
import Icon from "components/Icon";
import { Link } from "react-router-dom";
import { Button } from "components/Button";
import { Center } from "components/Center";
import { Space } from "components/Space";

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
    font-weight: bolder;
    >a{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px;
    }
  }
`;

function Tags() {
  const { tags, AddTag } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span>{tag.name}</span>
              <Icon name="right" />
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Button onClick={AddTag}>新增标签</Button>
      </Center>

    </Layout>
  );
}

export default Tags;