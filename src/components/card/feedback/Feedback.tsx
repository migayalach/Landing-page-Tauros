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
    <>
      <h1 className="mb-4 text-[#fca311] font-bold text-[18px] md:text-[20px]">
        ¿Que opina la gente de nuestro producto?
      </h1>
      <div className="w-full flex md:flex-row md:justify-center">
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
                      <div className="container-personal-data text-[#240046]">
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
    </>
  );
}

export default Feedback;
