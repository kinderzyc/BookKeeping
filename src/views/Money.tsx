import Layout from "components/Layout";
import React, { useState } from "react";
import styled from "styled-components";
import { TagsSection } from "./Money/TagsSection";
import { NotesSection } from "./Money/NoteSection";
import { CategorySection } from "./Money/CategorySection";
import { NumberPadSection } from "./Money/NumberPadSection";


type Category = '-' | '+'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
  })
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({ ...selected, ...obj })
  }
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
        onChange={tagIds => onChange({ tagIds })} />
      <NotesSection value={selected.note}
        onChange={note => onChange({ note })} />
      <CategorySection value={selected.category}
        onChange={category => onChange({ category })} />
      <NumberPadSection value={selected.amount}
        onChange={amount => onChange({ amount })}
        onok={() => {

        }}
      />
    </MyLayout>

  );
}

export default Money; 