import Layout from "components/Layout";
import React, { useState } from "react";
import styled from "styled-components";
import { TagsSection } from "./Money/TagsSection";
import { NotesSection } from "./Money/NoteSection";
import { CategorySection } from "./Money/CategorySection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { useRecords } from "hooks/useRecords";


type Category = '-' | '+'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const defaultFormDate = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};

function Money() {
  const [selected, setSelected] = useState(defaultFormDate);
  const { records, addRecord } = useRecords();
  console.log('records');
  console.log(records);
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({ ...selected, ...obj })
  }
  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功')
      setSelected(defaultFormDate);
    }
  };
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
        onok={submit}
      />
    </MyLayout>

  );
}

export default Money; 