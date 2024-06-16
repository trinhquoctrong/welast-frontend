"use client";
import React, { useEffect, useState } from "react";
import styled from "./styled.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { getDateFormat } from "@/services/func";

const ReposDetailPage = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/repos/${params.slug}/detail`
        );
        setData(res.data);
      } catch (error) {
        alert("Repository not found!");
        router.push("/");
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className={styled.wrapper}>
        <h2>Detail Repository</h2>
        <div className={styled.content}>
          <div>
            <span>Fullname:</span>
            <p>{data?.full_name}</p>
          </div>
          <div>
            <span>Description:</span>
            <p> {data?.description || "..."}</p>
          </div>
          <div>
            <span>Language:</span>
            <p> {data?.language || "---"}</p>
          </div>
          <div>
            <span>Update at:</span>
            <p>{getDateFormat(data?.updated_at)}</p>
          </div>
          <div>
            <span>Author:</span>
            <p>{data?.owner?.node_id}</p>
          </div>

          <div>
            <button
              onClick={() => {
                router.push("/");
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReposDetailPage;
