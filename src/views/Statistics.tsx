import React, { useState } from "react";
import Layout from "components/Layout";
import { CategorySection } from "./Money/CategorySection";
import styled from "styled-components";
import { useRecords } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import day from 'dayjs';

const CategroyWrapper = styled.div`
  background: white;
`;
const Item = styled.div`
  width: 92%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 30px 16px;
  box-shadow: 1px 2px 5px #cdcdcd;
  margin-top:20px;
  border-radius:8px;
  >.note{
      margin-right:auto;
      margin-left: 16px;
      color: #999;
  }
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const { records } = useRecords();
  const { getName } = useTags()
  return (
    <Layout>
      <CategroyWrapper>
        <CategorySection value={category}
          onChange={value => setCategory(value)} />
      </CategroyWrapper>
      <div>
        {records.map(r => {
          return <Item>
            <div className="tags">
              {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
            </div>
            {r.note && <div className="note">
              {r.note}
            </div>}
            <div className="amount">
              ¥ {r.amount}
            </div>
            {/* {day(r.createdAt).format('YYYY年MM月DD日')} */}
          </Item>
        })}
      </div>
    </Layout>
  );
}

export default Statistics;