"use client";
// COMPONENTS
// HOOKS
import React, { useEffect, useState } from "react";
// REDUX
// INTERFACE
import { FeedbackInterface } from "@/interface";
// LIBRARY
import { Avatar, Button, List, Skeleton } from "antd";
// CSS
import "./feedback.css";
// JAVASCRIP
const PAGE_SIZE = 3;

function Feedback({ listFeedback }: { listFeedback: FeedbackInterface[] }) {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<FeedbackInterface[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const initialData = listFeedback.slice(0, PAGE_SIZE);
    setList(initialData);
    setInitLoading(false);
  }, [listFeedback]);

  const onLoadMore = () => {
    setLoading(true);
    const nextPage = page + 1;
    const nextItems = listFeedback.slice(0, nextPage * PAGE_SIZE);
    setList(nextItems);
    setPage(nextPage);
    setLoading(false);
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
        <Button onClick={onLoadMore}>Ver mas</Button>
      </div>
    ) : null;

  return (
    <div>
      <h1 style={{ marginBottom: "15px" }}>
        ¿Que opina la gente de nuestro producto?
      </h1>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <Skeleton avatar title={false} loading={false} active>
            <List.Item>
              <Skeleton avatar title={false} loading={false} active>
                <div className="container-block">
                  <div className="head">
                    <div className="container-personal-data">
                      <Avatar src={item.image} />
                      <span>{item.fullName}</span>
                    </div>
                  </div>
                  <div className="container-comment">{item.comment}</div>
                </div>
              </Skeleton>
            </List.Item>
          </Skeleton>
        )}
      />
    </div>
  );
}

export default Feedback;
