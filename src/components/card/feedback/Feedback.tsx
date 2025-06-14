"use client";
// COMPONENTS
// HOOKS
import React, { useEffect, useState } from "react";
// REDUX
// INTERFACE
import { DataType } from "./FeedBack.interface";
// LIBRARY
import { Avatar, Button, List, Skeleton } from "antd";
// CSS
// JAVASCRIP
const PAGE_SIZE = 3;

function Feedback() {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([]);
  const [page, setPage] = useState(1);

  const fetchData = (currentPage: number) => {
    const fakeDataUrl = `https://660d2bd96ddfa2943b33731c.mockapi.io/api/users?page=${currentPage}&limit=${PAGE_SIZE}`;
    return fetch(fakeDataUrl).then((res) => res.json());
  };

  useEffect(() => {
    fetchData(page).then((res) => {
      const results = Array.isArray(res) ? res : [];
      setInitLoading(false);
      setData(results);
      setList(results);
    });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        Array.from({ length: PAGE_SIZE }).map(() => ({ loading: true }))
      )
    );

    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage).then((res) => {
      const results = Array.isArray(res) ? res : [];
      const newData = data.concat(results);
      setData(newData);
      setList(newData);
      setLoading(false);
      window.dispatchEvent(new Event("resize"));
    });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>Ver mas opiniones</Button>
      </div>
    ) : null;

  return (
    <>
      <h1>¿Que opina la gente de nuestro producto?</h1>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              style={{ border: "3px solid black" }}
              avatar={<Avatar src={item.avatar} />}
              title={<a href="https://ant.design">{item.name}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </Skeleton>
        )}
      />
    </>
  );
}

export default Feedback;
