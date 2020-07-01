import styled from "styled-components";
import React from "react";
import { useTags } from "hooks/useTags";


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
      width: 65px;
      height: 65px;
      background: #D9D9D9;
      border-radius: 50%;
      display: inline-block;
      line-height: 65px;
      text-align: center;
      font-size: 16px;
      margin: 8px 10px;
      &.selected{
        background: #F26B14;
        color:white;
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

type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
};
const TagsSection: React.FC<Props> = (props) => {
  const { tags, AddTag } = useTags();
  const selectedTagIds = props.value;
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
      //如果 tag 已被选中，就复制所有没有被选中的 tag，作为新的 selectedTag
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={
            () => { onToggleTag(tag.id); }
          } className={getClass(tag.id)}
          >{tag.name}</li>
        )}
      </ol>
      <button onClick={AddTag}>新增标签</button>
    </Wrapper>
  )
}

export { TagsSection };