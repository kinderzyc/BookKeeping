import React, { useState, ReactNode } from "react";
import Layout from "components/Layout";
import { CategorySection } from "./Money/CategorySection";
import styled from "styled-components";
import { useRecords, RecordItem } from "hooks/useRecords";
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
  margin-top:5px;
  border-radius:8px;
  font-weight: bolder;
  margin-bottom:50px;
  >.note{
      margin-right:auto;
      margin-left: 16px;
      color: #999;
  }
`;

const Header = styled.h3`
  width: 50%;
  float:right;
  display: flex;
  justify-content: space-between;
  background: #F26A13;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  color: white;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow:0px 0px 3px #F26A13;
  margin-bottom:6px;
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const { records } = useRecords();
  const { getName } = useTags();
  const hash: { [key: string]: RecordItem[] } = {} // {'2020-05-26': [item], '2020-05-27': [item], '2020-05-28': [item, item, item], '2020-05-29': [item, item, item]}
  const selectedRecords = records.filter(r => r.category === category);

  selectedRecords.forEach(r => {
    const key = day(r.createdAt).format('YYYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
  // console.log(array)
  return (
    <Layout>
      <CategroyWrapper>
        <CategorySection value={category}
          onChange={value => setCategory(value)} />
      </CategroyWrapper>
      {array.map(([date, records]) => <div key={date}>
        <Header>
          {date}
        </Header>
        <div>
          {records.map(r => {
            return <Item>
              <div className="tags">
                {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                  .reduce((result, span, index, array) =>
                    result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
                }
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
      </div>)}
    </Layout>
  );
}

export default Statistics;