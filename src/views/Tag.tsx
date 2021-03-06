import React from "react"
import { useTags } from "hooks/useTags"
import { useParams, useHistory } from "react-router"
import Layout from "components/Layout"
import Icon from "components/Icon"
import styled from "styled-components"
import { Button } from "components/Button"
import { Input } from "components/Input"
import { Center } from "components/Center"
import { Space } from "components/Space"

type Params = {
    id: string
}
const Header = styled.header`
  display:flex;
  justify-content: space-between;
  line-height: 30px;
  padding: 15px;
  align-items: center;
  background: #00A292;
  color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  .icon{
      fill: #fff;
  }
  .font{
      font-size: 24px;
  } 
`;

const InputWrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    background: white;
    padding: 8px;
    border-radius: 8px;
    margin-top: 15px;
    box-shadow: 1px 1px 10px #dfdfdf;
`;

const Tag: React.FC = () => {
    const { findTag, updateTag, deleteTag } = useTags()
    let { id: idString } = useParams<Params>()
    const tag = findTag(parseInt(idString));
    const tagContent = (tag: { id: number; name: string }) => (
        <div>
            <InputWrapper>
                <Input label="标签" type="text" placeholder="标签名" value={tag.name}
                    onChange={(e) => {
                        updateTag(tag.id, { name: e.target.value })
                    }}
                />
            </InputWrapper>
            <Center>
                <Space />
                <Space />
                <Button onClick={() => deleteTag(tag.id)}>删除</Button>
            </Center>
        </div>
    );
    const history = useHistory()
    const onClickBack = () => {
        history.goBack()
    }

    return (
        <Layout>
            <Header>
                <Icon name="return" onClick={onClickBack} />
                <span className="font">编辑标签</span>
                <Icon />
            </Header>
            {tag ? tagContent(tag) : <Center>tag 不存在</Center>}
        </Layout>
    )
}

export { Tag }