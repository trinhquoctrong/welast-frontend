import React from "react";
import styled from "./styled.module.css";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  data: any;
}

const ReposCard = ({ data }: IProps) => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.item}>
        <span>Name:</span>
        <span> {data.name}</span>
      </div>
      <div className={styled.item}>
        <span>Description:</span>
        <span> {data.description || '...'}</span>
      </div>
      <div className={styled.item}>
        <span>Language:</span>
        <span> {data.language || '---'}</span>
      </div>
      <div className={styled.item}>
        <span>Forks count:</span>
        <span> {data.forks_count}</span>
      </div>
      <Link href={`/respository/${data.id}`} target="_blank">Detail</Link>
    </div>
  );
};

export default ReposCard;
