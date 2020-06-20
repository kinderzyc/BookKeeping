import styled from "styled-components";
import React from "react";
import { useTags } from "useTags";
import { createId } from "lib/createId";

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

type Props = {
  value: number[];
  onChange: (selected: number[]) => void;
};
const TagsSection: React.FC<Props> = (props) => {
  const { tags, setTags } = useTags();
  const selectedTagIds = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('新标签名称为');
    if (tagName !== null) {
      setTags([...tags, { id: createId(), name: tagName}]);
  }
};
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
    <button onClick={onAddTag}>新增标签</button>
  </Wrapper>
)
}

export { TagsSection };