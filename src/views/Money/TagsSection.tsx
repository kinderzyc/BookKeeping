import styled from "styled-components";
import React, { useState } from "react";

const Wrapper = styled.section`
background: #fff;
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
padding: 12px 16px;
  ol{
    margin: 0 auto;
        > li{
      background: #D9D9D9;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: inline-block;
      line-height: 50px;
      text-align: center;
      /* padding: 4px 18px; */
      font-size: 16px;
      margin: 8px 14px;
      &.selected{
        background: #F26B14;
        color:  white;
      }
    }
  }
  > button{
     background: none;
     border: none;
     border-bottom: 1px solid #888;
     padding: 0 4px;
     color: #888;
     margin-top: 15px; 
  }
`;

const TagsSection: React.FC = (props) => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const onAddTag = () => {
    const tagName = window.prompt('新标签名称为');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
      //如果 tag 已被选中，就复制所有没有被选中的 tag，作为新的 selectedTag
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag} onClick={
            () => { onToggleTag(tag); }
          } className={getClass(tag)}
          >{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}

export { TagsSection };